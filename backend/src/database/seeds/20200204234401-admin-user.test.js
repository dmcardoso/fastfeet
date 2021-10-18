const _20200204234401_admin_user = require("./20200204234401-admin-user")
// @ponicode
describe("_20200204234401_admin_user.up", () => {
    test("0", () => {
        let callFunction = () => {
            _20200204234401_admin_user.up({ bulkInsert: () => "da7588892" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            _20200204234401_admin_user.up({ bulkInsert: () => 12345 })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            _20200204234401_admin_user.up({ bulkInsert: () => "bc23a9d531064583ace8f67dad60f6bb" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            _20200204234401_admin_user.up({ bulkInsert: () => 9876 })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            _20200204234401_admin_user.up({ bulkInsert: () => "c466a48309794261b64a4f02cfcc3d64" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            _20200204234401_admin_user.up(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("_20200204234401_admin_user.down", () => {
    test("0", () => {
        let callFunction = () => {
            _20200204234401_admin_user.down()
        }
    
        expect(callFunction).not.toThrow()
    })
})
