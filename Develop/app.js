const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output")
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");
const teamMembers = [];

// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

// manager-specific questions
function managerInfo(name, email, id) {
    inquirer
        .prompt(
            {
                type: "input",
                message: "What is your office number?",
                name: "office"
            }

        ).then(response => {
            const managerInfo = new Manager(name, email, id, response.office)
            console.log(managerInfo)
            // building team members
            teamMembers.push(managerInfo)
// calling employeeRole in case you want to add a new employee 
            employeeRole();
        })
}
// make inquirer for each type of team member and make new object for each, push to global array
function engineerDetails(name, email, id) {
    inquirer
        .prompt([
            {
                type: "input",
                message: "What is your Github user name?",
                name: "github"
            }
        ]).then(response => {

            const engineerInfo = new Engineer(name, email, id, response.github)
            // console.log(engineerInfo);
            // building team members
            teamMembers.push(engineerInfo);
            employeeRole();
        })
}

function internDetails(name, email, id) {
    inquirer
        .prompt(
            {
                type: "input",
                message: "What is the name of your school?",
                name: "school"
            }
        ).then(response => {

            const internInfo = new Intern(response.school, name, email, id)
            // building team members
            teamMembers.push(internInfo);
            employeeRole();
        })

}
// Is an employee function necessary? Need place to ask the questions that all employee types will answer,
//  but making a new Employee isn't what we want, we want to make new "types" of employees, so...
function employeeDetails(roleType) {
    console.log("Please enter info for new team member...")
    inquirer
        .prompt([

            {
                type: "input",
                message: "What is your name?",
                name: "name"
            },
            {

                type: "input",
                message: "What is your ID number?",
                name: "id",
            },
            {
                type: "input",
                message: "What is your email address?",
                name: "email"
            }

        ]).then(res => {
            console.log("employee details", res)

            if(roleType === "manager") {
                
                managerInfo(res.name, res.email, res.id);
            } 
            else if(roleType === "engineer") {
                
                engineerDetails(res.name, res.email, res.id)
            } 
            else if(roleType === "intern") {
                
                internDetails(res.name, res.email, res.id)
            }
        })
}
function employeeRole() {
    inquirer
        .prompt([
            {
                type: "list",
                message: "What is your employee role?",
                name: "role",
                choices: ["manager", "engineer", "intern", "none"]

            }
        ]).then(res => {

            console.log("role details", res);
            
           
            if(res.role === "none") {
                console.log(teamMembers);
                console.log("Success! All team members have been logged")
                console.log("good-bye")
                // fs.writeFile(outputPath, JSON.stringify(teamMembers), "utf-8", () => {console.log("file written")});
                const teamHTML = render(teamMembers);
                fs.writeFile(outputPath, teamHTML, "utf-8", () => {console.log("file written")});
                
            }
            else {
                employeeDetails(res.role)
            }
           
        })

}
employeeRole();
// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above to target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an 
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work!```
