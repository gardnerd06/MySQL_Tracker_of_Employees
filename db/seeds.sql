INSERT INTO departments (name)
VALUES ('Engineering'),
       ('Finance'),
       ('Legal'),
       ('Sales'),
       ('Service');


INSERT INTO roles (title, salary, department_id)
VALUES ('Accountant', 70000,3),
       ('Sales Rep', 65000,2),
       ('Engineer', 90000,1),
       ('Lawyer', 100000,3),
       ('Account Manager', 85000,4),
       ('Service Tech', 75000,4),
       ('Sales Lead', 90000,2),
       ('Mechanic', 80000,1);

INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES ('Derrick', 'Long',1,1),
('Derrick', 'Oneale',1,1),
('Denzel', 'Kemp',2,1),
('Denise', 'Slip',2,1),
('Doloris', 'Lewis',3,1),
('Dexter', 'Mfongu',3,1),
('Drake', 'Nance',4,1),
('Dion', 'Gardner',4,1),
('Donna', 'Lawrence',5,1),
('Delanie', 'Lock',5,1),
('Deanna', 'Smith',5,1);


show databases;
show tables;
select * from roles;
select * from employees;
select * from departments;