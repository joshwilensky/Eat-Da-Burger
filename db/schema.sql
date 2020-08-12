USE u553gn7x3ux301dm;
CREATE TABLE burgers (
  id int NOT NULL AUTO_INCREMENT,
  burger_name varchar(255) NOT NULL,
  devoured BOOLEAN DEFAULT false,
  PRIMARY KEY (id)
);
SELECT
  *
FROM
  burgers;
INSERT INTO
  burgers (burger_name)
VALUES
  ('The Impossible Solution Burger'),
  ('What Shiitake About Burger'),
  ('Top Bun Burger'),
  ('Little Swiss Sunshine Burger'),
  ('The Squeezy Cheesey Bacon Burger'),
  ('Sweet Home Avocado'),
  ('KatzenBurger')