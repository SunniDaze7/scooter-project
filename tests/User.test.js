const User = require('../src/User')

// User tests here
describe('user tests',()=>{
    const alice = new User('Alice', 'password1', 18, true)
    const frank = new User('Frank', 'password2', 18, false)

// test username
    test('username correct',()=>{
        expect(alice.username).toBe('Alice')
    })
// test password
    test('password correct',()=>{
        expect(alice.password).toBe('password1')
    })
// test age
    test('age correct',()=>{
        expect(alice.age).toBe(18)
    })
// test login
    test('can successfully log in if password correct',()=>{
        expect(()=>{
            alice.login('password2')}).toThrow('incorrect password')
        expect(frank.login('password2')).toBe(true)
    })
// test logout
    test('logout',()=>{
        expect(alice.logout()).toBe(false)
    })
})