-- schema.sql

-- Create the database
CREATE DATABASE destinate_db;

-- Connect to the database
--\c destinate_db;

-- Create the flight_confirmations table
CREATE TABLE flight_confirmations (
  id SERIAL PRIMARY KEY,
  flight_data JSONB
);