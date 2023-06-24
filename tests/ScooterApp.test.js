const Scooter = require('../src/Scooter')
const User = require('../src/User')
const ScooterApp = require('../src/ScooterApp')

// ScooterApp tests here
describe('scooterapp tests', ()=>{
    const alice = new User('Alice', 'password1', 18, true)
    const scooter1 = new Scooter('station1')
    const frank = new User('Frank', 'password2', 18, true)
    const scooter2 = new Scooter('station2')
    const scooter3 = new Scooter('station3')
    const scooterApp1 = new ScooterApp({station:[scooter1,scooter2],station:[scooter3]}, {username: alice, username: frank})
    test('stations is object with station location and docked scooters at that location',()=>{
        expect(scooterApp1.stations()).toBe({station:[scooter1,scooter2],station:[scooter3]})
    })

// register user
test('registereduser is object with username as key and user as value',()=>{
    expect(scooterApp1.registeredUser()).toBe({username: alice, username: frank})
})
// log in

// log out

// rent scooter

// dock scooter

})