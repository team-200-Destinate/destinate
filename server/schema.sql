DROP TABLE IF EXISTS hotel_confirmations;
DROP TABLE IF EXISTS flight_confirmations;

CREATE TABLE flight_confirmations (
  id SERIAL PRIMARY KEY,
  flight_data JSONB
);

CREATE TABLE hotel_confirmations (
  id SERIAL PRIMARY KEY,
  hotel_data JSONB,
  flight_id INTEGER REFERENCES flight_confirmations (id)
);