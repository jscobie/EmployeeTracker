# Challenge 12 SQL: Employee Tracker

## Badges
[![License: CC0-1.0](https://img.shields.io/badge/license-MIT-blue.svg)](https://opensource.org/licenses/MIT)

## Description

This project's challenge  was built to show my continued learning in Full Stack web development. This project I have learned and will be using SQL and MySQL to populate values into a database and retrieve them through HTTP requests using an Express Server. This Employee Tracker is not a website but a command line interface to manage an employee database using Node.js, select NPM packages (Inquirer, MySQL2, and Console.table), and a MySQL database.

Additionally in a reach to Module 13 I have added the dotenv option so I can hide my MySQL connection properties, mainly the user/password combination, since storing that on Github is unwise.

[Github Repository Link](https://github.com/jscobie/EmployeeTracker)<br>
[Git Hub Deployed page link (not functioning since project is a command line application, this is just a repository site hosting the readme.md file)](https://jscobie.github.io/EmployeeTracker/)

Video walkthrough of the working Employee Tracker command line application (challenge required options):<br>
[Video walkthrough of completed application](https://drive.google.com/file/d/1dylDoVNBgwwhaMt1b8In5L0bHgfT7SiV/view)

Bonus Video walkthrough of the working Employee Tracker command line application (BONUS options: Delete Employee, Department, Role; View Employees by Manager; View Utilized Budget by Department):<br>
[Video walkthrough of completed application BONUS items](https://drive.google.com/file/d/1jbo_ZCKQnOjJy0pA7KWIZJBRzW7ra6qo/view)

## Table of Contents

* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Tests](#tests)
* [Credits](#credits)
* [Questions?](#questions)

## Installation

1. Clone to your computer using SSH from GitHub:
```
git clone git@github.com:jscobie/EmployeeTracker.git
```
2. You'll need to run to install the node required dependencies after you clone the install by running:
```
npm install
```
3. You'll then need to configure your MySQL user/password in the server.js file
4. You will then need to run the following commands in your MySQL server command line to build the database and tables and then seed/populate the tables needed:
```
mysql -u root -p
SOURCE db/schema.sql
SOURCE db/seeds.sql
```
5. You will need to make an .env file to handle the MySQL connection, an example file (.env.EXAMPLE) has been included for you to reference. Contents of .env.EXAMPLE are:
```
DB_HOST='localhost'
DB_USER=''
DB_PASSWORD=''
DB_DBASE='employee_db'
```
6. Finally to start the Employee Tracker you need the command:
```
npm start
```

## Usage

The usage of this project is to allow myself to turn this project in for grading to the MSU Bootcamp academic grading team.

## License
Read more about [MIT license](https://opensource.org/licenses/MIT).

## Tests

N/A

## Credits

Credit to the MSU Bootcamp and instructors for training and training materials to resolve some of these issues.<br>
*Programs, packages used:*<br>
[Node.js](https://nodejs.org/en/)<br>
[Console.table npm package](https://www.npmjs.com/package/console.table)<br>
[Mysql2 npm package](https://www.npmjs.com/package/mysql2)<br>
[Inquirer npm package (Version 8.2.4)](https://www.npmjs.com/package/inquirer/v/8.2.4)<br>
[dotenv npm package](https://www.npmjs.com/package/dotenv)

## Questions:
*Use the following options to contact me for questions:*<br>
[jscobie](https://github.com/jscobie)<br>
jscobie@focus-solutions.net