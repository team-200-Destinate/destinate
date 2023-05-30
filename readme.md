


## Flight Search GET Request

To perform a flight search, send a GET request to the following endpoint:

http://localhost:5000/flight-search?originCode=`${leave.input}&destinationCode=${arrive.input}&dateOfDeparture=${YY/MM/DD}`&currencyCode=USD

perl


Replace `${leave.input}`, `${arrive.input}`, and `${YY/MM/DD}` with the appropriate values for the origin code, destination code, and date of departure.

## Params in the POST Request (in order)

When making a POST request to `/trip-confirmation`, provide the following parameters in the request body:

1. id
2. source
3. one_way (indicates if there are no stops)
4. price
5. currency
6. duration
7. segments

## Delete Flight Confirmation

To delete a specific flight confirmation, send a DELETE request to the following URL, replacing `:id` with the ID of the flight confirmation you want to delete:

http://localhost:5000/flight-confirmations/:id

vbnet


## Get Specific Flight Confirmation

To retrieve a specific flight confirmation, send a GET request to the following URL, replacing `:id` with the ID of the flight confirmation you want to retrieve:

http://localhost:5000/flight-confirmations/:id

css


## Get All Flight Confirmations

To retrieve all flight confirmations, send a GET request to the following URL:

http://localhost:5000/flight-confirmations

vbnet


## Get Hotels

To retrieve hotels in a specific city, send a GET request to the following URL, replacing `:city` with the desired city name:

http://localhost:5000/hotels/:city

css


## Hotel POST Method

To save hotel data, send a POST request to the following URL:

http://localhost:5000/trip-confirmation

css


Include the following input in the request body:

```json

{
  "flightId":7,
  "name": "Example Hotel",
  "photoUrl": "https://example.com/hotel.jpg",
  "rating": 4.5
}
  

````
## all Hotel get Method

To save hotel data, send a POST request to the following URL:

`http://localhost:5000/trip-confirmations`

## specific Hotel get Method

To save hotel data, send a POST request to the following URL:

`http://localhost:5000/trip-confirmations/:id`
## specific Hotel delete Method

To save hotel data, send a POST request to the following URL:

`http://localhost:5000/trip-confirmations/:id`
_______________________________________________________________________________ planning and plan page backend


To create a new result confirmation, you can use the following JSON input:

```json
{
  "flightId": 1,
  "hotelName": "Example Hotel",
  "hotelPhotoUrl": "https://example.com/hotel.jpg",
  "hotelRating": 4.5,
  "hotelPrice": 150.99
}
````````
The result confirmation will be stored in the database and will have the following structure:

```json

{
  "id": 10,
  "flight_id": 1,
  "hotel_price": "150.99",
  "hotel_name": "Example Hotel",
  "hotel_photo_url": "https://example.com/hotel.jpg",
  "hotel_rating": "4.5"
}
```````
To retrieve the flight price, you can make a GET request to the following endpoint:



http://localhost:5000/trip-confirmations/1

Make sure to replace 1 with the appropriate ID of the trip confirmation.

To retrieve the hotel price and other details, you can make a GET request to the following endpoint:



http://localhost:5000/results/4

Make sure to replace 4 with the appropriate ID of the result confirmation.

If you need to delete a result confirmation, you can make a DELETE request to the following endpoint:



http://localhost:5000/results/4

Make sure to replace 4 with the appropriate ID of the result confirmation.
dont forget to run psql -d destinate_db -f schema.sql
