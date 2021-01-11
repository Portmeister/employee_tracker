const inquirer = require('inquirer');
const [
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
    VIEW_BUDGET
] = require('./const'); 

async function promptChoices() {
    try {
        answer = await inquirer
            .prompt({
                name: "action",
                type: "rawlist",
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
            });

        return answer;
    } catch (error) {
        console.log(error);
    }
}

async function promptEmployee() {
    try {
        employee = await inquirer
            .prompt({
                name: "first_name",
                type: "input",
                message: "What is the employee's first name?"
            },
            {
                name: "last_name",
                type: "input",
                message: "What is the employee's last name?"
            },
            {
                name: "role_id",
                type: "input",
                message: "What is the employee's role id?"
            },
            {
                name: "",
                type: "input",
                message: "What is the employee's manager id?",
                default: "NULL"
            });

        return employee;
    } catch (error) {
        console.log(error);
    }
}

async function promptRole() {
    try {
        role = await inquirer
        .prompt({
                name: "title",
                type: "input",
                message: "What is the name of the new role?"
            },
            {
                name: "salary",
                type: "input",
                message: "What is salary of the new role?"
            });

        return role;
    } catch (error) {
        console.log(error);
    }
}

async function promptDept() {
    try {
        dept = await inquirer
        .prompt({
            name: "name",
            type: "input",
            message: "What is the new department name?"
        });

        return dept;
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    promptChoices, 
    promptEmployee,
    promptRole,
    promptDept
};