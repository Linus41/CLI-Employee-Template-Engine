// TODO: Write code to define and export the Employee class
var info = require("../app")

class Employee {
    constructor(name, email, id) {
        // if(!name) {
        //     throw new Error("You are missing the name.");
        //   }
        //   if (!email) {
        //     throw new Error("You are missing your email.");
        //   }
        //   if (!id) {
        //     throw new Error("You are missing your ID.");
        //   }
          this.name = name;
          this.email = email;
          this.id = id;
    }
    getName() {
        return this.name;
    }

    getRole() {
        return "Employee";
    }
    getId() {
        return this.id;
    }
    getEmail() {
        return this.email;
    }
}

module.exports = Employee