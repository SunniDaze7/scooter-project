class User {
  // User code here
  constructor(username, password, age,loggedIn){
    this.username = username
    this.password = password
    this.age = age
    this.loggedIn = loggedIn
  }
  login(password){
    if(this.password !== password){
      throw new Error('incorrect password')
    }else if(this.password == password){
      this.loggedIn = true
    }
    return this.loggedIn
  }
  logout(){
    this.loggedIn = false
    return this.loggedIn
  }
}

module.exports = User
