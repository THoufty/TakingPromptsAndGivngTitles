const Engineer = require('../lib/engineer')

describe("engineer", () => {
    it("should return any given engineer's office number", () => {
        const github = "github.com/thoufty"
        const engineer = new Engineer("chris", 5, 'charlie@me.com', github)
        expect(engineer.github).toBe(github)
    })
    it("should call the function to return the office number for any given engineer", () => {
        const github = 'github.com/thoufty'
        const engineer = new Engineer("blah", 5, "email", github)
        expect(engineer.getgithub()).toBe(github)
    })
    it('should return the role of any given employee', () => {
        const role = 'Engineer'
        const employee = new Engineer("tom", 1, 'me@me.com')
        expect(employee.getRole()).toBe(role)
    })
})