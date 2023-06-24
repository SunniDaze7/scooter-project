const Scooter = require('../src/Scooter')
const User = require('../src/User')
const ScooterApp = require('../src/ScooterApp')

// ScooterApp tests here
describe('scooterapp tests', ()=>{
    const alice = new User('Alice', 'password1', 17, true)
    const scooter1 = new Scooter('station1')
    const scooter2 = new Scooter('station2')
    const scooter3 = new Scooter('station4')
    const frank = new User('Frank', 'password2', 18, false)
    const sam = new User('Sam', 'password3', 18, false)
    const scooterApp1 = new ScooterApp()
    scooterApp1.registeredUsers = {'Sam':sam}
    scooterApp1.stations['station1'] = [scooter1]

    test('stations is object with station location and docked scooters at that location',()=>{
        expect(scooterApp1.stations).toStrictEqual({'station1':[scooter1],'station2':[],'station3':[]})
    })

//register user
    test('throws error if underage',()=>{
        expect(()=>{
            scooterApp1.registeredUser(alice.username,alice.password,alice.age)
        }).toThrow('too young to register')
    })
    test('registers user', ()=>{
        expect(scooterApp1.registeredUser(frank.username,frank.password,frank.age)).toStrictEqual({'Frank':frank,'Sam':sam})
    })
    test('throws error if user already exists',()=>{
        expect(()=>{
            scooterApp1.registeredUser(sam.username,sam.password,sam.age)
         }).toThrow('already registered')
    })
// log in
    test('throws error if username or password do not match',()=>{
        expect(()=>{
            scooterApp1.loginUser(alice.username, 'password2')
        }).toThrow('username or password is incorrect')
    })
    test('logs in user if username and password match',()=>{
        expect(scooterApp1.loginUser(sam.username, sam.password)).toBe(true)
    })
// log out
    test('throws error if user not logged in',()=>{
        expect(()=>{
            scooterApp1.logoutUser(alice.username, 'password2')
        }).toThrow('no such user is logged in')
    })
    test('logs out user if username match',()=>{
        expect(scooterApp1.logoutUser(sam.username, sam.password)).toBe(false)
    })
// create scooter
    test('throws error if station does no exist', ()=>{
        expect(()=>{
            scooterApp1.createScooter('station4')
        }).toThrow('no such station')
    })
    test('creates new scooter and logs in station', ()=>{
        expect(scooterApp1.createScooter('station1')).toBe(scooterApp1.stations)
    })
// dock scooter
    test('throws error if station does not exist',()=>{
        expect(()=>{
            scooterApp1.dockScooter(scooter1, 'station4')
        }).toThrow('no such station')
    })
    test('throws error if scooter already at station',()=>{
        expect(()=>{
            scooterApp1.dockScooter(scooter1, 'station1')
        }).toThrow('scooter already at station')
    })
    test('docks scooter at station',()=>{
        expect(scooterApp1.dockScooter(scooter2,'station2')).toBe(scooterApp1.stations)
    })
//rent scooter
    test('throws error if scooter already rented', ()=>{
        expect(()=>{
            scooterApp1.rentScooter(scooter3,alice)
        }).toThrow('scooter already rented')
    })
    test('rent scooter to user',()=>{
        expect(scooterApp1.rentScooter(scooter1,sam)).toBe(scooterApp1.stations)
    })
})

