var mysql = require("mysql");
var inquirer = require("inquirer");
var cTable = require("console.table");

var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "test123",
  database: "employee_trackerDB"
});

connection.connect(function (err) {
  if (err) throw err;
  runSearch();
});

function runSearch() {
  inquirer
    .prompt({
      name: "action",
      type: "list",
      message: "What would you like to do?",
      choices: [
        "Add Departments",
        "Add Roles",
        "Add Employees",
        "View Departments",
        "View Roles",
        "View Employees",
        "Update Employee Roles",
        "exit"
      ]
    })
    .then(function (answer) {
      switch (answer.action) {
        case "Add Departments":
          addDepartments();
          break;

        case "Add Roles":
          addRoles();
          break;

        case "Add Employees":
          addEmployees();
          break;

        case "View Departments":
          viewDepartments();
          break;

        case "View Roles":
          viewRoles();
          break;

        case "View Employees":
          viewEmployees();
          break;

        case "Update Employee Roles":
          updateEmployeeRoles();
          break;

        case "exit":
          connection.end();
          break;
      }
    });
}

function addDepartments() {
      inquirer.prompt([{
        type: "input",
        name: "department",
        message: "What is the department that you want to add?"
    }, ]).then(function(res) {
        connection.query('INSERT INTO department (dept_name) VALUES (?)', [res.department], function(err, data) {
            if (err) throw err;
            console.table("Successfully Inserted");
            runSearch();
        })
    })
  }

 function addRoles() {
      inquirer.prompt([
        {
            message: "enter title:",
            type: "input",
            name: "title"
        }, {
            message: "enter salary:",
            type: "number",
            name: "salary"
        }, {
            message: "enter department ID:",
            type: "number",
            name: "department_id"
        }
    ]).then(function (response) {
        connection.query("INSERT INTO roles (title, salary, department_id) values (?, ?, ?)", [response.title, response.salary, response.department_id], function (err, data) {
            console.table(data);
        })
        runSearch();
    })  
  }

 function addEmployees() {
  inquirer.prompt([
    {
          message: "What is the employees first name?",
          type: "input",
          name: "firstName",
          
      },
      {
          message: "What is the employees last name?",
          type: "input",
          name: "lastName",
          
      },
      {
          message: "What is the employees role ID", 
          type: "number",
          name: "roleId",
          
      },
      {
          message: "What is the employees manager's ID?",
          type: "number",
          name: "managerId",
          
      }
  ]).then(function(response) {
      connection.query("INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)", [response.firstName, response.lastName, response.roleId, response.managerId], function(err, data) {
          if (err) throw err;
          console.table("Successfully Inserted");
          runSearch();
      })
  })
}

function viewDepartments() {
  connection.query("SELECT * FROM department", function (err, data) {
      console.table(data);
      runSearch();
  })
}

function viewRoles() {
connection.query("SELECT * FROM role", function (err, data) {
    console.table(data);
    runSearch();
})
}

function viewEmployees() {
    connection.query("SELECT * FROM employee", function (err, data) {
        console.table(data);
        runSearch();
    })
}

function updateEmployeeRoles() {
    inquirer.prompt([
        {
            message: "which employee would you like to update? (first name)",
            type: "input",
            name: "name"
        }, {
            message: "enter the new role ID:",
            type: "number",
            name: "role_id"
        }
    ]).then(function (response) {
        connection.query("UPDATE employee SET role_id = ? WHERE first_name = ?", [response.role_id, response.name], function (err, data) {
            console.table(data);
        })
        runSearch();
    })
}

