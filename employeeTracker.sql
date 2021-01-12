----- Drop, Create & Use company_db -----
DROP DATABASE IF EXISTS company_db;

CREATE database company_db;

USE company_db;

----- Create Database Tables, Assign Primary & Foreign Keys -----
CREATE TABLE department (
  id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(30) NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE role (
  id INT NOT NULL AUTO_INCREMENT,
  title VARCHAR(30) NOT NULL,
  salary DECIMAL(10,2) NOT NULL,
  department_id INT NOT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY (department_id) REFERENCES department(id) ON DELETE CASCADE
);

CREATE TABLE employee (
  id INT NOT NULL AUTO_INCREMENT,
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(30) NOT NULL,
  role_id INT NOT NULL,
  manager_id INT,
  PRIMARY KEY (id)
);

----- Create & Insert Existing Department Data -----
INSERT INTO department (id, name)
VALUES (1, "Sales");

INSERT INTO department (id, name)
VALUES (2, "Marketing");

INSERT INTO department (id, name)
VALUES (3, "Human Resouces");

INSERT INTO department (id, name)
VALUES (4, "IT");

----- Create & Insert Existing Role Data -----
INSERT INTO role (id, title, salary, department_id)
VALUES (1, "Sales Associate", 35000, 1);

INSERT INTO role (id, title, salary, department_id)
VALUES (2, "Assistant Manager", 49000, 1);

INSERT INTO role (id, title, salary, department_id)
VALUES (3, "Store Manager", 60000, 1);

INSERT INTO role (id, title, salary, department_id)
VALUES (4, "Brand Manager", 65000, 2);

INSERT INTO role (id, title, salary, department_id)
VALUES (5, "HR Manager", 70000, 3);

INSERT INTO role (id, title, salary, department_id)
VALUES (6, "HR Director", 100000, 3);

INSERT INTO role (id, title, salary, department_id)
VALUES (7, "Database Adminstrator", 75000, 4);

INSERT INTO role (id, title, salary, department_id)
VALUES (8, "Network Administrator", 65000, 4);

INSERT INTO role (id, title, salary, department_id)
VALUES (9, "IT Director", 105000, 4);

----- Create & Insert Existing Employee Data -----
INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES (1, "Donald", "Hoffman", 1, 3);

INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES (2, "Dawn", "Porter", 1, 3);

INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES (3, "Carrol", "Porter", 2, 4);

INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES (4, "Victoria", "Porter", 3, null);

INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES (5, "Madison", "Porter", 4, null);

INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES (6, "Corbin", "Porter", 5, 7);

INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES (7, "Colton", "Porter", 6, null);

INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES (8, "Wade", "Cobb", 7, 10);

INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES (9, "Joe", "Lindecke", 8, 10);

INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES (10, "Mark", "Thomas", 9, null);