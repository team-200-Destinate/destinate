DROP TABLE IF EXISTS destinate_db;

CREATE DATABASE destinate_db;

CREATE TABLE flight_confirmations (
  id SERIAL PRIMARY KEY,
  flight_data JSONB
);