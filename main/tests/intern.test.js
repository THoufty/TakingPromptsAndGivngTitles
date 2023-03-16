const Intern = require('../lib/intern')

describe("Intern", () => {
    it("should return any given intern's school", () => {
        const school = 'CWRU'
        const intern = new Intern("chris", 5, 'charlie@me.com', school)
        expect(intern.school).toBe(school)
    })
    it("should call the function to return the office number for any given intern", () => {
        const school = 'CWRU'
        const intern = new Intern("blah", 5, "email", school)
        expect(intern.getSchool()).toBe(school)
    })
    it('should return the role of any given employee', () => {
        const role = 'Intern'
        const employee = new Intern("tom", 1, 'me@me.com')
        expect(employee.getRole()).toBe(role)
    })
})