
<h2> 1-flight search get requast</h>

<p>2-http://localhost:5000/flight-search?originCode=${leave.input}&destinationCode=${arrive.input}&dateOfDeparture=${YY/MM/DD}&currencyCode=USD 
</p>
<h2>3- params in the post request in order</h2>
<li>    id
  <li>  source 
  <li>  one_way          Means there is no stops  
  <li>  price
  <li>  currency
  <li>  duration
  <li>  segments
 

 <h2> 4-delete url 
 http://localhost:5000/flight-confirmations/2
<h2>
 5-get specific Flight 
  http://localhost:5000/flight-confirmations/2
  <h2>
 6-get all Flights
  http://localhost:5000/flight-confirmations


-------

  # Hotel

## Get (/searchHotel);

Example `http://localhost:5009/searchHotel?city=amman`


## Post (/trip-confirmation)

Example data set


```json
{
  "flight": {
    "id": "FLIGHT_ID",
    "source": "FLIGHT_SOURCE",
    "one_way": true,
    "price": 100.0,
    "currency": "USD",
    "duration": "2h 30m",
    "segments": [
      {
        "departure": {
          "iataCode": "DEP_CODE",
          "terminal": "DEP_TERMINAL",
          "at": "2023-05-30T10:00:00"
        },
        "arrival": {
          "iataCode": "ARR_CODE",
          "terminal": "ARR_TERMINAL",
          "at": "2023-05-30T12:30:00"
        },
        "carrierCode": "AA",
        "number": "AA123",
        "aircraft": "A320",
        "duration": "2h 30m",
        "numberOfStops": 0
      }
    ]
  },
  "hotel": {
    "name": "Le Royal Hotel & Resorts Amman",
    "photoUrl": "https://example.com/hotel-photo.jpg",
    "rating": 4.5
  }
}
