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
    'INSERT INTO flight_confirmations (flight_data) VALUES ($1)',
    [JSON.stringify(flight)],
    (error, results) => {
      if (error) {
        console.error('Error saving data:', error);
        res.status(500).send('Error saving data');
      } else {
        res.send('Data saved successfully');
      }
    }
  );
});

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