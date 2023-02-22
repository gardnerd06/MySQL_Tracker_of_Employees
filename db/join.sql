SELECT departments.dept_id, employees.role_id, employees.first_name, employees.last_name, roles.title, roles.salary
FROM employees
INNER JOIN roles, departments ON employees.manager_id=employees.e_id;


SELECT * FROM employees