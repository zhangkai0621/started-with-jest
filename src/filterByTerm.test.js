const filterByTerm = require("./filterByTerm")
// @ponicode
describe("filterByTerm", () => {
    test("0", () => {
        let callFunction = () => {
            filterByTerm({ length: 2 }, false)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            filterByTerm({ length: 10 }, "SELECT * FROM Movies WHERE Title=’Jurassic Park’ AND Director='Steven Spielberg';")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            filterByTerm({ length: 2 }, "DELETE FROM Projects WHERE pid = %s")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            filterByTerm({ length: 0 }, "UPDATE Projects SET pname = %s WHERE pid = %s")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            filterByTerm({ length: 0 }, "DELETE FROM Projects WHERE pid = %s")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            filterByTerm(undefined, undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})
