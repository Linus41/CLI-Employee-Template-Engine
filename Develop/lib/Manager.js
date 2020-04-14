// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class Manager extends Employee {
    constructor(office, name, email, id) {
      super(name, email, id);
      this.office = office;
    }
}

module.exports = Manager