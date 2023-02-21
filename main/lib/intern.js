const Employee = require("./Employee")

class Intern extends Employee {
    construcor(name, id, email, school) {
        super(name, id, email)
        this.school = school
    }

    getSchool(){
        return this.school
    }

    getRole(){
        return 'Intern'
    }
}

module.exports = Intern