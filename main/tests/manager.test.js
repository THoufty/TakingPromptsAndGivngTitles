const Manager = require('../lib/manager')

describe("Manager", () => {
    it("should return any given manager's office number", () => {
        const officeNumber = 1
        const manager = new Manager("chris", 5, 'charlie@me.com', officeNumber)
        expect(manager.officeNumber).toBe(officeNumber)
    })
    it("should call the function to return the office number for any given manager", () => {
        const officeNumber = 1
        const manager = new Manager("blah", 5, "email", officeNumber)
        expect(manager.getOfficeNumber()).toBe(officeNumber)
    })
    it('should return the role of any given employee', () => {
        const role = 'Manager'
        const employee = new Manager("tom", 1, 'me@me.com')
        expect(employee.getRole()).toBe(role)
    })
})