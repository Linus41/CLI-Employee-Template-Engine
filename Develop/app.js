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


// manager-specific questions
function managerInfo(name, id, email) {
    inquirer
        .prompt(
            {
                type: "input",
                message: "What is your office number?",
                name: "office"
            }

        ).then(response => {
            const managerInfo = new Manager(name, id, email, response.office)
            console.log(managerInfo)
            // building team members
            teamMembers.push(managerInfo)
            // calling employeeRole in case you want to add a new employee 
            employeeRole();
        })
}
// make inquirer for each type of team member and make new object for each, push to global array
function engineerDetails(name, id, email) {
    inquirer
        .prompt([
            {
                type: "input",
                message: "What is your Github user name?",
                name: "github"
            }
        ]).then(response => {

            const engineerInfo = new Engineer(name, id, email, response.github)
            // building team members
            teamMembers.push(engineerInfo);
            employeeRole();
        })
}

function internDetails(name, id, email) {
    inquirer
        .prompt(
            {
                type: "input",
                message: "What is the name of your school?",
                name: "school"
            }
        ).then(response => {

            const internInfo = new Intern(name, id, email, response.school)
            // building team members
            teamMembers.push(internInfo);
            employeeRole();
        })

}

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

            if(roleType === "Manager") {
                
                managerInfo(res.name, res.id, res.email,);
            } 
            else if(roleType === "Engineer") {
                
                engineerDetails(res.name, res.id, res.email)
            } 
            else if(roleType === "Intern") {
                
                internDetails(res.name, res.id, res.email)
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
                choices: ["Manager", "Engineer", "Intern", "none"]

            }
        ]).then(res => {

            console.log("role details", res);
            
           
            if(res.role === "none") {
                console.log(teamMembers);
                console.log("Success! All team members have been logged")
                console.log("good-bye")
                const teamHTML = render(teamMembers);
                fs.writeFile(outputPath, teamHTML, "utf-8", () => {console.log("file written")});
                
            }
            else {
                employeeDetails(res.role)
            }
           
        })

}
employeeRole();