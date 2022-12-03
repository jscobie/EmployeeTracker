// require and set dependencies
const mysql = require("mysql2");
const inquirer = require("inquirer");
require("console.table");

const PORT = process.env.PORT || 3001;

// build mysql database connection
const connection = mysql.createConnection({ 
    host: "localhost",
    port: "3001",
    user: "root",
    password: "Password123",
    database: "employee_DB"
});

connection.connect(function (err) {
    if (err) throw err;
    // this is the ascii art splash title
    console.log(`███████╗███╗   ███╗██████╗ ██╗      ██████╗ ██╗   ██╗███████╗███████╗
    ██╔════╝████╗ ████║██╔══██╗██║     ██╔═══██╗╚██╗ ██╔╝██╔════╝██╔════╝
    █████╗  ██╔████╔██║██████╔╝██║     ██║   ██║ ╚████╔╝ █████╗  █████╗  
    ██╔══╝  ██║╚██╔╝██║██╔═══╝ ██║     ██║   ██║  ╚██╔╝  ██╔══╝  ██╔══╝  
    ███████╗██║ ╚═╝ ██║██║     ███████╗╚██████╔╝   ██║   ███████╗███████╗
    ╚═══████████╗██████╗═╝█████╗══██████╗██╗══██╗███████╗██████╗╝╚══════╝
        ╚══██╔══╝██╔══██╗██╔══██╗██╔════╝██║ ██╔╝██╔════╝██╔══██╗        
           ██║   ██████╔╝███████║██║     █████╔╝ █████╗  ██████╔╝        
           ██║   ██╔══██╗██╔══██║██║     ██╔═██╗ ██╔══╝  ██╔══██╗        
           ██║   ██║  ██║██║  ██║╚██████╗██║  ██╗███████╗██║  ██║        
           ╚═╝   ╚═╝  ╚═╝╚═╝  ╚═╝ ╚═════╝╚═╝  ╚═╝╚══════╝╚═╝  ╚═╝`)
    // run the startTracker function after the connection is successful to show prompts to user
    startTracker();
  });

  // this is the Tracker program itself which will run and call additional functions to process additional steps in the application
function StartTracker(){
inquirer.prompt([
{
    type: 'list',
    name:'userChoice',
    message: 'What would you like to do?',
    choices: [
    'View All Departments',
    'View All Roles',
    'View All Employees',
    'Add a Department',
    'Add a Role',
    'Add an Employee',
    'Update an Employee Role',
    'Update Employee Manager',
    'View Employees by Manager',
    'View Employees by Department',
    'Delete a Department',
    'Delete a Role',
    'Delete an Employee',
    'Exit'
    ]
    
}

]).then((res) => {
    console.log(res.userChoice);
    switch(res.userChoice){
        case 'View All Departments':
            viewAllDepartments();
            break;
        case 'View All Roles':
            viewAllRoles();
            break;
        case 'View All Employees':
            viewAllEmployees();
            break;
        case 'Add a Department':
            addDepartment();
            break;
        case 'Add a Role':
            addRole();
            break;
        case 'Add an Employee':
            addEmployee();
            break;
        case 'Update an Employee Role':
            updateEmployeeRole();
            break;
        case 'Update Employee Manager':
            updateEmployeeManager();
            break;
        case 'View Employees by Manager':
            viewEmployeesByManager();
            break;
        case 'View Employees By Department':
            viewEmployeesByDepartment();
            break;
            case 'Delete a Department': 
            removeDepartment();
            break;
            case 'Delete a Role': 
            removeRole();
            break;    
        case 'Delete an Employee': 
            removeEmployee();
            break;
        case 'Exit':
            connection.end();
            break;
    }
    
    }).catch((err)=>{
if(err)throw err;
});
}

// View Departments
function viewAllDepartments() {
    // select from the db
    let query = "SELECT * FROM department";
    connection.query(query, function(err, res) {
      if (err) throw err;
      console.table(res);
      startTracker();
    });
};

// View Roles
function viewAllRoles() {
    // select from the db
    let query = "SELECT * FROM role";
    connection.query(query, function(err, res) {
      if (err) throw err;
      console.table(res);
      startTracker();
    });
};

// View Employees
function viewAllEmployees() {
    // select from the db
    let query = "SELECT * FROM employee";
    connection.query(query, function(err, res) {
      if (err) throw err;
      console.table(res);
      startTracker();
    });
};

