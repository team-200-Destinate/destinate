DROP TABLE IF EXISTS destinate_db;


CREATE TABLE  flight_confirmations (
  id SERIAL PRIMARY KEY,
  flight_data JSONB,
  hotel_data JSONB
);


