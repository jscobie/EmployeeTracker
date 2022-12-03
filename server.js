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

function StartTracker(){
inquirer.prompt([
{
    type: 'list',
    name:'userChoice',
    message: 'What would you like to do?',
    choices: [
    'View All Employees',
    'View Employees By Department',
    'Add Employee',
    'Remove Employee',
    'Update Employee Role',
    'Add Role',
    'Add Department',
    'Exit'
    ]
    
}

]).then((res)=>{
    console.log(res.userChoice);
    switch(res.userChoice){
    case 'View All Employees':
        viewAllEmployees();
        break;
    case 'View Employees By Department':
        viewEmployeesByDepartment();
        break;
    case 'Add Employee':
        addEmployee();
        break;
    case 'Remove Employee':
        removeEmployee();
        break;
    case 'Update Employee Role':
        updateEmployeeRole();
        break;
    case 'Add Role':
        addRole();
        break;
    case 'Add Department':
        addDepartment();
        break;
    case 'Exit':
        connection.end();
        break;
    }
    
    }).catch((err)=>{
if(err)throw err;
});
}