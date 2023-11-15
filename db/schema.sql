DROP DATABASE IF EXISTS swords_dev;
CREATE DATABASE swords_dev;

\c swords_dev;

CREATE TABLE swords (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  maker TEXT NOT NULL,
  price NUMERIC,
  is_upgraded BOOLEAN, 
  is_cursed BOOLEAN,
  rarity INTEGER CHECK (rarity >= 1 AND rarity <= 5)
);