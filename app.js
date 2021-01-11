const mysql = require("mysql2");
const inquirer = require("inquirer");
const consoleTable = require("console.table");
const promisemysql = require("promise-mysql");

// Import Constants Choice Variables
const [VIEW_EMPLOYEES,
    EMPLOYEES_BY_ROLE,
    EMPLOYEES_BY_DEPT,
    EMPLOYEES_BY_MGR,
    ADD_EMPLOYEE,
    ADD_ROLE,
    ADD_DEPT,
    UPDATE_ROLE,
    UPDATE_MGR,
    DELETE_EMPLOYEE,
    DELETE_ROLE,
    DELETE_DEPT,
    VIEW_BUDGET] = require('./lib/const');

// Import Query Functions
const  {viewAllEmp, 
    viewAllEmpByRole,
    viewAllEmpByDept,
    viewAllEmpByMngr,
    addEmp,
    addRole,
    addDept,
    updateEmpRole,
    updateEmpMngr,
    deleteEmp,
    deleteRole,
    deleteDept,
    viewDeptBudget} = require('./lib/queries');

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

    // Start main menu function

    console.log("\n WELCOME TO EMPLOYEE TRACKER \n");
    promptChoices();
});

// Main menu function
function promptChoices(){

    // Prompt user to choose an option
    inquirer
    .prompt({
      name: "action",
      type: "list",
      message: "MAIN MENU",
      choices: [
        VIEW_EMPLOYEES,
                    EMPLOYEES_BY_ROLE,
                    EMPLOYEES_BY_DEPT,
                    EMPLOYEES_BY_MGR,
                    ADD_EMPLOYEE,
                    ADD_ROLE,
                    ADD_DEPT,
                    UPDATE_ROLE,
                    UPDATE_MGR,
                    DELETE_EMPLOYEE,
                    DELETE_ROLE,
                    DELETE_DEPT,
                    VIEW_BUDGET,
                    "EXIT"
      ]
    })
    .then((answer) => {

        // Switch case depending on user option
        switch (answer.action) {
            case VIEW_EMPLOYEES:
                viewAllEmp();
                break;
    
            case EMPLOYEES_BY_ROLE:
                viewAllEmpByRole();
                break;
    
            case EMPLOYEES_BY_DEPT:
                viewAllEmpByDept();
                break;
    
            case EMPLOYEES_BY_MGR:
                viewAllEmpByMngr();
                break;
            
            case ADD_EMPLOYEE:
                addEmp();
                break;
    
            case ADD_ROLE:
                addRole();
                break;
            
            case ADD_DEPT:
                addDept();
                break;
    
            case UPDATE_ROLE:
                updateEmpRole();
                break;
    
            case UPDATE_MGR:
                updateEmpMngr();
                break;
    
            case DELETE_EMPLOYEE:
                deleteEmp();
                break;
    
            case DELETE_ROLE:
                deleteRole();
                break;
    
            case DELETE_DEPT:
                deleteDept();
                break;
    
            case VIEW_BUDGET:
                viewDeptBudget();
                break;
        }
    });
}