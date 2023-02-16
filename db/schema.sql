DROP DATABASE IF EXISTS business_db;
CREATE DATABASE business_db;

USE business_db;

CREATE TABLE instructors (
  id INT NOT NULL AUTO_INCREMENT,
  first_name VARCHAR(30),
  PRIMARY KEY (id)
);
