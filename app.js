const mysql = require("mysql2");
const inquirer = require("inquirer");
const consoleTable = require("console.table");

// Import Query Functions
const  {promptChoices} = require('./lib/queries');

// Connection Properties
const connectionProperties = {
    host: "localhost",
    port: 3306,
    user: "root",
    password: "password",
    database: "company_db"
}

// Creating Connection
const connection = mysql.createConnection(connectionProperties);


// Establishing Connection to database
connection.connect((err) => {
    if (err) throw err;
    console.log('connected as id ' + connection.threadId);
    promptChoices();
    connection.end();
});