\c business_db;

INSERT INTO department (name) VALUES 
    ('Research and Development'),
    ('Sales'),
    ('Production'),
    ('Human Resources'),
    ('Administration');


INSERT INTO role (title, salary, department_id) VALUES 
    ('Senior Scientist', 110000.00,1),
    ('Junior Scientist', 70000.00,1),
    ('Sales Manager', 170000.00,2),
    ('Junior Salesman', 80000.00,2),
    ('Plant Manager', 150000.00,3),
    ('Machine Operator', 70000.00,3),
    ('Internal Affairs Manager', 100000.00,4),
    ('Recruiter', 60000.00,4),
    ('CEO', 1000000.00,5),
    ('CFO', 500000.00,5);

INSERT INTO employee (first_name, last_name, manager_id, role_id) VALUES 
    ('Will', 'Gallagher', null, 9),
    ('Joe', 'Schmoe', 1, 10),
    ('Sarah', 'Connor', 1, 7),
    ('Louis', 'Jones', 3, 8),
    ('Wayne', 'McDermott', 1, 5),
    ('Maria', 'Lopez', 5, 6),
    ('Brad', 'Nowell', 1, 3),
    ('Anthony', 'Lee', 7, 4),
    ('Kim', 'Metz', 1, 1),
    ('John', 'Worth', 9, 2);