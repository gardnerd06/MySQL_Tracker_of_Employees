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

INSERT INTO employees ( first_name, last_name, role_id, manager_id)
VALUES ('Danile','Oneale',2,7),
       ('Dexter','Mfongu',8,11),
       ('Drake','Nance',4,NULL),
       ('Dion','Gardner',8,11),
       ('Donna','Lawrence',5,NULL),
       ('Delanie','Lock',6,5),
       ('Deanna','Smith',7,NULL),
       ('Denzel','Kemp',2,7),
       ('Denise','Slip',2,7),
       ('Derrick','Long',1,NULL),
       ('Doloris','Lewis',3,NULL);


show databases;
show tables;
select * from roles;
select * from employees;
select * from departments;