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
VALUES ('Danile', 'Oneale',2,11),
       ('Dexter', 'Mfongu',8,5),
       ('Drake', 'Nance',4,),
       ('Dion', 'Gardner',8,5),
       ('Donna', 'Lawrence',5,),
       ('Delanie', 'Lock',6,9),
       ('Deanna', 'Smith',7,),
       ('Denzel', 'Kemp',2,11),
       ('Denise', 'Slip',2,11),
       ('Derrick', 'Long',1,),
       ('Doloris', 'Lewis',3,);


show databases;
show tables;
select * from roles;
select * from employees;
select * from departments;