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

module.exports = {
    promptChoices, 
};