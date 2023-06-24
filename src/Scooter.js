class Scooter{
static nextSerial = 1;

  constructor(station) {
    this.station = station;
    this.user = null;
    this.serial = Scooter.nextSerial++;
    this.charge = 100;
    this.isBroken = false;
  }
  rent(user){
    if(this.isBroken == true){
        throw new Error('scooter is broken')
    }else if(this.charge < 20){
        throw new Error('sccoter needs to charge')
    }else if(this.charge > 20 && this.station !== undefined){
        this.user = user
        this.station = undefined
        }
        return this.user
    }
    dock(station){
        this.station = station
        this.user = null
        return this.user
    }
}


module.exports = Scooter
