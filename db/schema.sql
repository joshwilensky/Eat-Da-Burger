DROP DATABASE IF EXISTS burgers_db;
CREATE DATABASE burgers_db;
USE burgers_db;
CREATE TABLE burgers (
  id int NOT NULL AUTO_INCREMENT,
  burger_name varchar(255) NOT NULL,
  devoured BOOLEAN DEFAULT false,
  PRIMARY KEY (id)
);
INSERT INTO
  burgers (burger_name)
VALUES
  ('The Impossible Solution Burger'),
  ('What Shiitake About Burger'),
  ('Top Bun Burger'),
  ('Little Swiss Sunshine Burger'),
  ('The Squeezy Cheesey Bacon Burger'),
  ('Sweet Home Avocado');
SELECT
  *
FROM
  burgers