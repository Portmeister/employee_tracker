// Import the mysql package
const mysql = require('mysql2');

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

// Import Prompt Functions
const {promptChoices, 
    promptEmployee,
    promptRole,
    promptDept} = require('./lib/prompts');

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


// Connect to the top_songsDB database using a localhost connection
const connection = mysql.createConnection({
    host: 'localhost',

    // Your port, if not 3306
    port: 3306,

    // Your MySQL username
    user: 'root',

    // Your MySQL password (leave blank for class demonstration purposes; fill in later)
    password: 'password',

    // Name of database
    database: 'company_db',
});

connection.connect(async (err) => {
    if (err) throw err;
    console.log('connected as id ' + connection.threadId);
    await runSearch();
    connection.end();
});

async function runSearch() {

    let answer;

    answer = await promptChoices();

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
    };
}