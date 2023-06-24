const Scooter = require('../src/Scooter')
const User = require('../src/User')

//typeof scooter === object
describe('scooter object', () => {
  const alice = new User('Alice', 'password1', 18, true)
  const scooter1 = new Scooter('station1')
  test('station is correct', () => {
    expect(scooter1.station).toEqual('station1');
  })
})

//Method tests
describe('scooter methods', () => {
  const alice = new User('Alice', 'password1', 18, true)
  const scooter1 = new Scooter('station1')
  // tests here!
  //rent method
  test('if scooter charged above 20 and isnt broken, removed from station, give to user',()=>{
    expect(scooter1.rent(alice)).toBe(alice)
})
  //dock method
  test('docks the scooter back to station and makes user null',()=>{
    expect(scooter1.dock('station1')).toBe(null)
})
  //requestRepair method

  //charge method

})
