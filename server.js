import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import Amadeus from 'amadeus';
import pg from 'pg';
import dotenv from 'dotenv';

import axios from 'axios';

dotenv.config();

const { Pool } = pg;

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(cors({
  origin: 'http://localhost:4200',
}));
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'https://cozy-heliotrope-daf0f8.netlify.app');
 
  next();
});
const amadeus = new Amadeus({
  clientId: process.env.APIKEY,
  clientSecret: process.env.APISEC,
});

// FlightOffer class to structure flight data
class FlightOffer {
  constructor(data) {
    this.id = data.id;
    this.source = data.source;
    this.one_way = data.oneWay;
    this.price = data.price.total;
    this.currency = data.price.currency;
    this.duration = data.itineraries[0].duration;
    this.segments = [];

    for (const segment of data.itineraries[0].segments) {
      const segmentInfo = {
        departure: {
          iataCode: segment.departure.iataCode,
          terminal: segment.departure.terminal,
          at: segment.departure.at,
        },
        arrival: {
          iataCode: segment.arrival.iataCode,
          terminal: segment.arrival.terminal,
          at: segment.arrival.at,
        },
        carrierCode: segment.carrierCode,
        number: segment.number,
        aircraft: segment.aircraft.code,
        duration: segment.duration,
        numberOfStops: segment.numberOfStops,
      };
      this.segments.push(segmentInfo);
    }
  }

  displayInfo() {
    console.log('Flight ID:', this.id);
    console.log('Source:', this.source);
    console.log('One-way:', this.one_way);
    console.log('Price:', this.price, this.currency);
    console.log('Duration:', this.duration);
    console.log('Segments:');
    for (let i = 0; i < this.segments.length; i++) {
      const segment = this.segments[i];
      console.log('Segment', i + 1);
      console.log('Departure:', segment.departure.iataCode, segment.departure.at);
      console.log('Arrival:', segment.arrival.iataCode, segment.arrival.at);
      console.log('Carrier:', segment.carrierCode);
      console.log('Aircraft:', segment.aircraft);
      console.log('Duration:', segment.duration);
      console.log('Number of stops:', segment.numberOfStops);
      console.log();
    }
  }
}

// Endpoint to search for cities and airports
app.get(`/city-and-airport-search/:parameter`, (req, res) => {
  const parameter = req.params.parameter;
  amadeus.referenceData.locations
    .get({
      keyword: parameter,
      subType: Amadeus.location.any,
    })
    .then(function (response) {
      res.send(response.result);
    })
    .catch(function (error) {
      res.send(error);
    });
});

// Endpoint to search for flights
app.get(`/flight-search`, (req, res) => {
  const originCode = req.query.originCode;
  const destinationCode = req.query.destinationCode;
  const dateOfDeparture = req.query.dateOfDeparture;

  amadeus.shopping.flightOffersSearch
    .get({
      originLocationCode: originCode,
      destinationLocationCode: destinationCode,
      departureDate: dateOfDeparture,
      adults: '1',
      max: '7',
    })
    .then(function (response) {
      const flightOffers = response.data.map((offer) => new FlightOffer(offer));
      res.send(flightOffers);
    })
    .catch(function (error) {
      res.send(error);
    });
});

// Endpoint to save flight confirmation data
app.post('/flight-confirmation', (req, res) => {
  const flightData = req.body;
  const hotelData = req.body.hotel; // Extract hotel data separately

  const flight = {
    id: flightData.id,
    source: flightData.source,
    one_way: flightData.one_way,        
    price: parseFloat(flightData.price),
    currency: flightData.currency,
    duration: flightData.duration,
    segments: JSON.stringify(flightData.segments),
  };

  pool.query(
    'INSERT INTO flight_confirmations (flight_data) VALUES ($1) RETURNING id',
    [JSON.stringify(flight)],
    (error, flightResult) => {
      if (error) {
        console.error('Error saving flight data:', error);
        res.status(500).send('Error saving flight data');
      } else {
        const flightId = flightResult.rows[0].id;
        linkFlightAndHotel(flightId, hotelData, res); // Pass hotelData as a separate argument
      }
    }
  );
});

function linkFlightAndHotel(flightId, hotelData, res) {
  console.log('hoteldatalin:', hotelData);
  if (hotelData) {
    const { name, photoUrl, rating } = hotelData;

    const hotel = {
      name: name,
      photoUrl: photoUrl,
      rating: rating,
      flight_id: flightId,
      
    };
    console.log('name:', name);
    console.log('photoUrl:', photoUrl);
    console.log('rating:', rating);
    pool.query(
      'INSERT INTO hotel_confirmations (hotel_data, flight_id) VALUES ($1, $2)',
      [JSON.stringify(hotel), flightId],
      (error, hotelResult) => {
        if (error) {
          console.error('Error saving hotel data:', error);
          res.status(500).send('Error saving hotel data');
        } else {
          res.send('Flight and hotel data saved successfully');
        }
      }
    );
  } else {
    res.send('Flight data saved successfully');
  }
}

// Endpoint to retrieve all flight confirmations
app.get('/flight-confirmations', (req, res) => {
  pool.query('SELECT * FROM flight_confirmations', (error, results) => {
    if (error) {
      console.error('Error retrieving data:', error);
      res.status(500).send('Error retrieving data');
    } else {
      const flightConfirmations = results.rows.map((row) => {
        const flight = {
          id: row.id,
          source: row.flight_data.source,
          one_way: row.flight_data.one_way,
          price: parseFloat(row.flight_data.price),
          currency: row.flight_data.currency,
          duration: row.flight_data.duration,
          segments: JSON.parse(row.flight_data.segments),
        };
        return flight;
      });
      res.send(flightConfirmations);
    }
  });
});
// Endpoint to retrieve all flight confirmations
app.get('/flight-confirmations/:id', (req, res) => {
  const confirmationId = req.params.id;

  pool.query('SELECT * FROM flight_confirmations WHERE id = $1', [confirmationId], (error, results) => {
    if (error) {
      console.error('Error retrieving data:', error);
      res.status(500).send('Error retrieving data');
    } else {
      if (results.rows.length === 0) {
        res.status(404).send('Flight confirmation not found');
      } else {
        const row = results.rows[0];
        const flightConfirmation = {
          id: row.id,
          source: row.flight_data.source,
          one_way: row.flight_data.one_way,
          price: parseFloat(row.flight_data.price),
          currency: row.flight_data.currency,
          duration: row.flight_data.duration,
          segments: JSON.parse(row.flight_data.segments),
        };
        res.send(flightConfirmation);
      }
    }
  });
});

// Endpoint to delete a flight confirmation
app.delete('/flight-confirmations/:id', (req, res) => {
  const confirmationId = req.params.id;
  

  pool.query('DELETE FROM flight_confirmations WHERE id = $1', [confirmationId], (error, results) => {
    if (error) {
      console.error('Error deleting data:', error);
      res.status(500).send('Error deleting data');
    } else {
      res.send('Data deleted successfully');
    }
  });
});
//----------------------------------------------------------Hotels----------------------------------------
const apiKey = 'AIzaSyCYT5U2bjcBd_bLJ_VVHQW9lvgvPgmmSQM';
app.get('/hotels/:city', async (req, res) => {
  const city = req.params.city;

  try {
    const { latitude, longitude } = await getCoordinates(city);
    const hotels = await findHotels(latitude, longitude);
    res.send(hotels);
  } catch (error) {
    console.error('Error finding hotels:', error.message);
    res.status(500).send('Error finding hotels');
  }
});

async function getCoordinates(city) {
  const geocodingUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(city)}&key=${apiKey}`;
  try {
    const response = await axios.get(geocodingUrl);
    const { results } = response.data;
    if (results.length > 0) {
      const { lat, lng } = results[0].geometry.location;
      return { latitude: lat, longitude: lng };
    } else {
      throw new Error('No results found for the city.');
    }
  } catch (error) {
    throw new Error(`Error getting coordinates: ${error.message}`);
  }
}

async function findHotels(latitude, longitude) {
  try {
    const placesUrl = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${latitude},${longitude}&radius=5000&type=lodging&key=${apiKey}`;
    const response = await axios.get(placesUrl);
    const { results } = response.data;
    if (results.length > 0) {
      const hotels = results.slice(0, 10).map(async (result) => {
        const placeDetailsUrl = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${result.place_id}&fields=name,price_level,photo,rating&key=${apiKey}`;
        const detailsResponse = await axios.get(placeDetailsUrl);
        const { name, price_level, photos, rating } = detailsResponse.data.result;
        // Get the first photo reference and construct the photo URL
        let photoUrl = '';
        if (photos && photos.length > 0) {
          const photoReference = photos[0].photo_reference;
          photoUrl = `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${photoReference}&key=${apiKey}`;
        }
        return {
          name,
          price_level,
          photoUrl,
          rating
        };
      });
      return Promise.all(hotels);
    } else {
      return 'No hotels found near the location.';
    }
  } catch (error) {
    throw new Error(`Error finding hotels: ${error.message}`);
  }
}

app.post('/trip-confirmation', (req, res) => {
  const { flightId, name, photoUrl, rating } = req.body;
 console.log(flightId+"============")
  const hotel = {
    name: name,
    photoUrl: photoUrl,
    rating: rating
  };

  pool.query(
    'INSERT INTO hotel_confirmations (hotel_data) VALUES ($1) RETURNING id',
    [JSON.stringify(hotel)],
    (error, hotelResult) => {
      if (error) {
        console.error('Error saving hotel data:', error);
        res.status(500).send('Error saving hotel data');
      } else {
        const hotelId = hotelResult.rows[0].id;
        linkFlightAndHotel(flightId, hotel, res); // Call the function to link flight and hotel data
      }
    }
  );
});
app.get('/trip-confirmations', async (req, res) => {
  try {
    const client = await pool.connect();

    // Retrieve flight and hotel data from the joined tables
    const query = `
      SELECT fc.*, hc.hotel_data
      FROM flight_confirmations fc
      LEFT JOIN hotel_confirmations hc ON fc.id = hc.flight_id
    `;
    const result = await client.query(query);

    // Send the retrieved data as a response
    res.json(result.rows);

    client.release();
  } catch (err) {
    console.error('Error executing query', err);
    res.status(500).send('Internal Server Error');
  }
});
// Get a specific trip confirmation by ID
app.get('/trip-confirmations/:id', async (req, res) => {
  const confirmationId = req.params.id;

  try {
    const client = await pool.connect();

    // Retrieve the specific trip confirmation by ID
    const query = 'SELECT * FROM flight_confirmations WHERE id = $1';
    const result = await client.query(query, [confirmationId]);

    if (result.rows.length === 0) {
      // If no trip confirmation with the given ID is found, send a 404 response
      res.status(404).send('Trip confirmation not found');
    } else {
      // Send the retrieved trip confirmation as a response
      res.json(result.rows[0]);
    }

    client.release();
  } catch (err) {
    console.error('Error executing query', err);
    res.status(500).send('Internal Server Error');
  }
});

// Delete a trip confirmation by ID
app.delete('/trip-confirmations/:id', async (req, res) => {
  const confirmationId = req.params.id;

  try {
    const client = await pool.connect();

    // Delete the specific trip confirmation by ID
    const query = 'DELETE FROM flight_confirmations WHERE id = $1';
    await client.query(query, [confirmationId]);

    res.send('Trip confirmation deleted successfully');

    client.release();
  } catch (err) {
    console.error('Error executing query', err);
    res.status(500).send('Internal Server Error');
  }
});





app.get('/trip-confirmations', async (req, res) => {
  try {
    const client = await pool.connect();

    // Retrieve data from the flight_confirmations table
    const query = 'SELECT * FROM flight_confirmations';
    const result = await client.query(query);

    // Send the retrieved data as a response
    res.json(result.rows);

    client.release();
  } catch (err) {
    console.error('Error executing query', err);
    res.status(500).send('Internal Server Error');
  }
});

///////////////////////////Results//////////////////////////
app.post('/results', async (req, res) => {
  try {
    const { flightId, hotelName, hotelPhotoUrl, hotelRating, hotelPrice } = req.body;
    
    // Insert the result data into the result_confirmations table
    const query = 'INSERT INTO result_confirmations (flight_id, hotel_name, hotel_photo_url, hotel_rating, hotel_price) VALUES ($1, $2, $3, $4, $5) RETURNING id';
    const values = [flightId, hotelName, hotelPhotoUrl, hotelRating, hotelPrice];
    const result = await pool.query(query, values);

    res.status(201).json({ id: result.rows[0].id });
  } catch (error) {
    console.error('Error saving result:', error);
    res.status(500).json({ error: 'An error occurred while saving the result.' });
  }
});
//get
app.get('/results', async (req, res) => {
  try {
    // Retrieve all rows from the result_confirmations table
    const query = 'SELECT * FROM result_confirmations';
    const result = await pool.query(query);

    if (result.rows.length === 0) {
      res.status(404).json({ error: 'No results found.' });
    } else {
      res.status(200).json(result.rows);
    }
  } catch (error) {
    console.error('Error retrieving results:', error);
    res.status(500).json({ error: 'An error occurred while retrieving the results.' });
  }
});
// GET route to retrieve a specific result by ID
app.get('/results/:id',
 async (req, res) => {
  try {
    const resultId = req.params.id;
    
    // Retrieve the result by ID from the result_confirmations table
    const query = 'SELECT * FROM result_confirmations WHERE id = $1';
    const values = [resultId];
    const result = await pool.query(query, values);

    if (result.rows.length === 0) {
      res.status(404).json({ error: 'Result not found.' });
    } else {
      res.status(200).json(result.rows[0]);
    }
  } catch (error) {
    console.error('Error retrieving result:', error);
    res.status(500).json({ error: 'An error occurred while retrieving the result.' });
  }
});

app.delete('/results/:id', 
async (req, res) => {
  try {
    const resultId = req.params.id;

    // Delete the result by ID from the result_confirmations table
    const query = 'DELETE FROM result_confirmations WHERE id = $1';
    const values = [resultId];
    const result = await pool.query(query, values);

    if (result.rowCount === 0) {
      res.status(404).json({ error: 'Result not found.' });
    } else {
      res.status(204).json({ message: `Result with ID ${resultId} has been deleted.` });
    }
  } catch (error) {
    console.error('Error deleting result:', error);
    res.status(500).json({ error: 'An error occurred while deleting the result.' });
  }
});

app.listen(PORT, () =>
  console.log(`Server is running on port: http://localhost:${PORT}`)
);


// npm i axios 
// npm i dotenv 
// npm i express 
// npm i amadeus
// npm i body-parser
// npm i cors
// npm i pg

