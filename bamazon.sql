CREATE DATABASE bamazon;
USE bamazon;
CREATE TABLE Products(
  item_id INT AUTO_INCREMENT NOT NULL,
  product_name VARCHAR(50) NOT NULL,
  department_name VARCHAR(50) NOT NULL,
  price DECIMAL(10,2) NOT NULL,
  stock_quantity INT,
  PRIMARY KEY(item_id)
);

INSERT INTO Products (product_name, department_name, price, stock_quantity)
 VALUES ('iphone x', 'electronic', 999.99, 1),
 ('apple watch', 'electronic', 299.99, 40),
 ('macbook pro', 'electronic', 2799.99, 10),
 ('crazy explosive 2', 'sports', 180.99, 100),
 ('jordan 32', 'sports', 209.99, 70),
 ('kettle bell', 'sports', 89.99, 10),
 ('olympic bar', 'sports', 120.99, 5),
 ('garlic supplement', 'vitamins/supplement', 49.99, 80),
 ('turmeric', 'vitamins/supplement', 89.99, 30),
 ('fish oil', 'vitamins/supplement', 19.99, 300);
