const User = require('./User')
const Scooter = require('./Scooter')

class ScooterApp{
  // ScooterApp code here
  constructor(stations, registeredUsers){
    this.stations = stations
    this.registeredUsers = registeredUsers
  }
  registeredUser(){
    
  }
  // registeredUser(username,password,age){
  //   for(let i = 0; i < this.registeredUsers.length;i++){
  //     if(!this.registeredUsers[i].includes(username) && age
  //     >= 18){
  //       this.registeredUsers[i].username = username
  //       this.registeredUsers[i].password = password
  //       this.registeredUsers[i].age = age
  //       console.log('this user has been registered')
  //     }else if(age < 18){
  //       console.log('too young to register')
  //     }else{
  //       console.log('already registered')
  //     }
  //   }
  // }
  // loginUser(username,password){
  //   for(let i= 0;i <this.registeredUsers.length;i++){
  //     if(this.registeredUsers[i].username == username && this.registeredUsers[i].password == password){
        
  //     }
  //   }
  // }
}

module.exports = ScooterApp
