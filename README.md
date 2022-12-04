# Challenge 12 SQL: Employee Tracker

## Badges
[![License: CC0-1.0](https://img.shields.io/badge/license-MIT-blue.svg)](https://opensource.org/licenses/MIT)

## Description

This project's challenge  was built to show my continued learning in Full Stack web development. This project I have learned and will be using SQL and MySQL to populate values into a database and retrieve them through HTTP requests using an Express Server. This Employee Tracker is not a website but a command line interface to manage an employee database using Node.js, select NPM packages (Inquirer, MySQL2, and Console.table), and a MySQL database.

[Github Repository Link](https://github.com/jscobie/NoteTaker)<br>
[Git Hub Deployed page link (not functioning just repository site hosting readme file)](https://jscobie.github.io/NoteTaker/)

Video walkthrough of the working Employee Tracker command line application:<br>
[Video walkthrough of completed application](https://jscobie.github.io/NoteTaker/)

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
git clone git@github.com:jscobie/NoteTaker.git
```
2. You'll need to run to install the node required dependencies after you clone the install by running:
```
npm install
```
3. You'll then need to configure your MySQL user/password in the server.js file
4. You will then need to run the following commands in your MySQL server command line to build and populate the database and tables needed:
```
mysql -u root -p
SOURCE db/schema.sql
SOURCE db/seeds.sql
```
5. Finally to start the Employee Tracker you need the command:
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

## Questions:
*Use the following options to contact me for questions:*<br>
[jscobie](https://github.com/jscobie)<br>
jscobie@focus-solutions.net