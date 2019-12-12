DROP DATABASE IF EXISTS bamazonDB;

CREATE DATABASE bamazonDB;

USE bamazonDB;

CREATE TABLE products (
  id INT NOT NULL, AUTO_INCREMENT INT,
  product_name VARCHAR(45) NULL,
  department_name VARCHAR(45) NULL,
  price DECIMAL(10,2) NULL,
  quantity INT NULL,
  PRIMARY KEY (id)
);

INSERT INTO products (product_name, department_name, price, quantity)
VALUES ("Coffee Mug", "kitchen", 12.50, 100),
("Advent Token", "foods", 3.10, 120),
("Strawberry Mints", "foods", 3.25, 75),
("R2D2 French Press", "kitchen", 15.00, 50),
("Cat Tongue Novelty Rug", "housewares", 35.50, 30),
("Flux Capacitor", "automotive", 88000.95, 3),
("Knight Rider Automotive Interface", "automotive", 1983.87, 17),
("Oil Lamp w/Genie", "housewares", 950.00, 27),
("ACME Rocket Skates", "birdcatching", 350.00, 75),
("ACME Giant Spring", "birdcatching", 100.99, 150),
("Acme Giant Magnet", "birdcatching", 175.95, 120)


SELECT id, product_name, price FROM products

--SELECT price * userQuantity FROM products WHERE id = customerInput AS totalPrice