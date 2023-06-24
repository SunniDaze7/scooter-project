const User = require('./User')
const Scooter = require('./Scooter')

class ScooterApp{
  // ScooterApp code here
  constructor(){
    this.registeredUsers = {}
    this.stations = {'station1':[], 'station2':[], 'station3':[]}
  }
  registeredUser(username,password,age){
      if(age<18){
        throw new Error('too young to register')
      }else if(this.registeredUsers.hasOwnProperty(username)){
        throw new Error('already registered')
      }
      else if(!this.registeredUsers.hasOwnProperty(username) && age
          >= 18){
            this.registeredUsers[username] = new User(username,password,age,false)
            console.log('this user has been registered')
          }
        return this.registeredUsers
  }
  loginUser(username,password){
    if(!this.registeredUsers.hasOwnProperty(username) || this.registeredUsers[username].password !== password){
      throw new Error('username or password is incorrect')
    }else{
      this.registeredUsers[username].loggedIn = true
      console.log('user has been logged in')
    }
    return this.registeredUsers[username].loggedIn
  }
  logoutUser(username){
    if(!this.registeredUsers.hasOwnProperty(username)){
      throw new Error('no such user is logged in')
    }else{
      this.registeredUsers[username].loggedIn = false
      console.log('user has been logged out')
    }
    return this.registeredUsers[username].loggedIn
  }
  createScooter(station){
    if(!this.stations.hasOwnProperty(station)){
      throw new Error('no such station')
    }
    this.stations[station].push(new Scooter(station))
    console.log('created new scooter')
    return this.stations
  }
  dockScooter(scooter, station){
    if(!this.stations.hasOwnProperty(station)){
      throw new Error('no such station')
    }else if(this.stations[station].includes(scooter)){
      throw new Error('scooter already at station')
    }else{
      console.log('scooter is docked')
      this.stations[station].push(scooter)
    }
    return this.stations
  }
  rentScooter(scooter,user){
    if(!this.stations.hasOwnProperty(scooter.station)){
      throw new Error('scooter already rented')
    }else{
      const index = this.stations[scooter.station].indexOf(scooter)
      this.stations[scooter.station].splice(index,1)
    }
   return this.stations
}
  print(){
    console.log(this.registeredUsers, '============')
    console.log(this.stations, '===========')
  }
}

module.exports = ScooterApp
