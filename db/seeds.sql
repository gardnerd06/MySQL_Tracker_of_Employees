INSERT INTO departments (name)
VALUES ('Engineering'),
       ('Finance'),
       ('Legal'),
       ('Sales'),
       ('Service');


INSERT INTO roles (title, salary, department_id)
VALUES ('Accountant', 80000,1);

INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES ('Derrick', 'Long',1,1);


show databases;
show tables;
select * from roles;
select * from employees;
select * from departments;