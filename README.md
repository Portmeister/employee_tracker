# employee_tracker

Creates an interface that makes it easy for non-developers to view and interact with information stored in database. A **C**ontent **M**anagement **S**ystems. A solution for managing a company's employees using node, inquirer, and MySQL.

## Instructions

Database Design with the following database schema containing three tables:

![Database Schema](assets/images/schema.png)

* **department**:

  * **id** - INT PRIMARY KEY
  * **name** - VARCHAR(30) to hold department name

* **role**:

  * **id** - INT PRIMARY KEY
  * **title** -  VARCHAR(30) to hold role title
  * **salary** -  DECIMAL to hold role salary
  * **department_id** -  INT to hold reference to department role belongs to

* **employee**:

  * **id** - INT PRIMARY KEY
  * **first_name** - VARCHAR(30) to hold employee first name
  * **last_name** - VARCHAR(30) to hold employee last name
  * **role_id** - INT to hold reference to role employee has
  * **manager_id** - INT to hold reference to another employee that manages the employee being Created. This field may be null if the employee has no manager
  
A command-line application that allows the user to:

  * Add departments, roles, employees

  * View departments, roles, employees

  * Update employee roles

  * Update employee managers

  * View employees by manager

  * Delete departments, roles, and employees

  * View the total utilized budget of a department -- ie the combined salaries of all employees in that department

## Dependancies

* Uses the [MySQL](https://www.npmjs.com/package/mysql) NPM package to connect to your MySQL database and perform queries.

* Uses [InquirerJs](https://www.npmjs.com/package/inquirer/v/0.2.3) NPM package to interact with the user via the command-line.

* Uses [console.table](https://www.npmjs.com/package/console.table) to print MySQL rows to the console. There is a built-in version of `console.table`, but the NPM package formats the data a little better for our purposes.

![Employee Tracker](Assets/employee-tracker.gif)

## Minimum Requirements

You are required to submit the following:

* The URL of the GitHub repository: https://github.com/Portmeister/employee_tracker

* A video demonstrating the entirety of the app's functionality: https://drive.google.com/file/d/1h3kg0kXHkX4KX5A8gtKZAbRcx-lW7UZJ/view