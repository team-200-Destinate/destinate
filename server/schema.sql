DROP TABLE IF EXISTS hotel_confirmations;
DROP TABLE IF EXISTS flight_confirmations;
DROP TABLE IF EXISTS result_confirmations;
CREATE TABLE flight_confirmations (
  id SERIAL PRIMARY KEY,
  flight_data JSONB
);

CREATE TABLE hotel_confirmations (
  id SERIAL PRIMARY KEY,
  hotel_data JSONB,
  flight_id INTEGER REFERENCES flight_confirmations (id)
);
CREATE TABLE result_confirmations (
  id SERIAL PRIMARY KEY,
  flight_id INTEGER REFERENCES flight_confirmations (id),
  hotel_price DECIMAL(10,2),
  hotel_name TEXT,
  hotel_photo_url TEXT,
  hotel_rating DECIMAL(3,1)
);