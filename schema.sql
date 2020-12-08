DROP DATABASE IF EXISTS employee_trackerDB;
CREATE database employee_trackerDB;

USE employee_trackerDB;

CREATE TABLE department (
    id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    dept_name VARCHAR(30)    
);

SELECT * FROM department;

CREATE TABLE role (
id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
title VARCHAR(30),
salary DECIMAL,
department_id INT 
);

SELECT * FROM role;

CREATE TABLE employee (
id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
first_name VARCHAR(30),
last_name VARCHAR(30),
role_id INT,
manager_id INT NULL
);

SELECT * FROM employee;



  