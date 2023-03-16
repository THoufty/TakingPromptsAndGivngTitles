const Employee = require("../lib/employee")

describe('employee', () => {
    it('should return a name for any employee entered', () => {
        const name = "Tom"
        const employee = new Employee(name)
        expect(employee.name).toBe(name)
    })
    it('should return an id for any employee entered', () => {
        const id = 1
        const employee = new Employee("tom", id)
        expect(employee.id).toBe(id)
    })
    it('should return an email for any employee entered', () => {
        const email = "me@me.com"
        const employee = new Employee ("tom", 1, email)
        expect(employee.email).toBe(email)
    })
    it('should call the function to get the name of any given employee', () => {
        const name = "Tom"
        const employee = new Employee(name)
        expect(employee.getName()).toBe(name)
    })
    it('should call the function to get the id of any given employee', () => {
        const id = 1
        const employee = new Employee("tom", id)
        expect(employee.getId()).toBe(id)
    })
    it('should call the function to get the email of any given employee', () => {
        const email = "me@me.com"
        const employee = new Employee("tom", 1, email)
        expect(employee.getEmail()).toBe(email)
    }) 
    it('should return the role of any given employee', () => {
        const role = 'Employee'
        const employee = new Employee("tom", 1, 'me@me.com')
        expect(employee.getRole()).toBe(role)
    })
})
