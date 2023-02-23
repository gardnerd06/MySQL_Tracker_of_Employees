DROP DATABASE IF EXISTS business_db;
CREATE DATABASE business_db;

USE business_db;

CREATE TABLE departments (
  dept_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(30)
);

CREATE TABLE roles (
  r_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(30),
  salary DECIMAL NOT NULL,
  department_id INT,
  -- to hold reference to department role belongs to
  FOREIGN KEY (department_id)
  REFERENCES departments(dept_id)
);

CREATE TABLE employees (
  e_id INT  AUTO_INCREMENT  PRIMARY KEY,
  first_name VARCHAR(30),
  last_name VARCHAR(30),
  role_id INT NOT NULL,
  -- to hold reference to employee role
  manager_id INT DEFAULT NULL,
  -- to hold reference to another employee that is the manager of the current employee (`null` if the employee has no manager)
  FOREIGN KEY (role_id)
  REFERENCES roles(r_id)
  -- FOREIGN KEY (manager_id)
  -- REFERENCES employees(e_id)
  
);