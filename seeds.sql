USE employee_trackerDB;

INSERT INTO department (dept_name) VALUES ("HR");
INSERT INTO department (dept_name) VALUES ("Operating");
INSERT INTO department (dept_name) VALUES ("M&S");
INSERT INTO department (dept_name) VALUES ("Law");

INSERT INTO role (title, salary, department_id) VALUES ("VP", 70, 3);
INSERT INTO role (title, salary, department_id) VALUES ("RVP", 50, 2);
INSERT INTO role (title, salary, department_id) VALUES ("Supt", 50, 2);
INSERT INTO role (title, salary, department_id) VALUES ("Director", 100, 1);
INSERT INTO role (title, salary, department_id) VALUES ("Mgr", 100, 4);

INSERT INTO employee (first_name, last_name, role_id) VALUES ("Terry", "Two", 2);
INSERT INTO employee (first_name, last_name, role_id) VALUES ("Miles", "Down", 1);
INSERT INTO employee (first_name, last_name, role_id) VALUES ("Nina", "Tumble", 3);
INSERT INTO employee (first_name, last_name, role_id) VALUES ("Hannah", "Royal", 4);
INSERT INTO employee (first_name, last_name, role_id) VALUES ("George", "Test", 5);