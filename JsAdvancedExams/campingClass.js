class SummerCamp {
  constructor(organizer, location) {
    this.organizer = organizer;
    this.location = location;
    this.priceForTheCamp = { child: 150, student: 300, collegian: 500 };
    this.listOfParticipants = [];
  }

  registerParticipant(name, condition, money) {
    money = Number(money)
    if (!this.priceForTheCamp.hasOwnProperty(condition)) {
      throw new Error("Unsuccessful registration at the camp.");
    }
    
    if (money < this.priceForTheCamp[condition]) {
      return `The money is not enough to pay the stay at the camp.`;
    }
    for (const listItem of this.listOfParticipants) {
      if (listItem.name == name) {
        return `The ${name} is already registered at the camp.`;
      }
    }

    this.listOfParticipants.push({ name, condition, power: 100, wins: 0 });
    return `The ${name} was successfully registered.`;
  }
  unregisterParticipant(name) {
    let found = this.listOfParticipants.find((el) => el.name == name)
    if(found){
        this.listOfParticipants.splice(this.listOfParticipants.indexOf(found),1)
        return `The ${name} removed successfully.`
    }else{
        throw new Error(`The ${name} is not registered in the camp.`) 
    }
  }
  timeToPlay(typeOfGame, participant1, participant2) {
    if(typeOfGame == 'WaterBalloonFights'){
        let found = this.listOfParticipants.find((par) => par.name == participant1)
        let found2 = this.listOfParticipants.find((par2) => par2.name == participant2)
        
        if(found == undefined || found2 == undefined){
            throw new Error(`Invalid entered name/s.`)
        }
        if(found.condition != found2.condition){
            throw new Error(`Choose players with equal condition.`)
        }
        if(found.power > found2.power){
            found.wins += 1
            return `The ${found.name} is winner in the game ${typeOfGame}.`
        }else if(found2.power > found.power){
            found2.wins += 1
            return `The ${found2.name} is winner in the game ${typeOfGame}.`
        }else {
            return `There is no winner.` 
        }
    }else if(typeOfGame == 'Battleship'){
        let found = this.listOfParticipants.find((par) => par.name == participant1)
        if(found == undefined){
            throw new Error(`Invalid entered name/s.`)
        }else{
            found.power += 20
            return `The ${found.name} successfully completed the game ${typeOfGame}.`
        }
    }

    }


  toString() {
    let array = []
    
    let sorted = this.listOfParticipants.sort((a,b) => b.wins - a.wins)

    array.push(`${this.organizer} will take ${this.listOfParticipants.length} participants on camping to ${this.location}`)
    for (const person of sorted) {
        array.push(`${person.name} - ${person.condition} - ${person.power} - ${person.wins}`)
    }
    return array.join(`\n`);
  }
}


const summerCamp = new SummerCamp("Jane Austen", "Pancharevo Sofia 1137, Bulgaria"); 
console.log(summerCamp.registerParticipant("Petar Petarson", "child", 300)); 
console.log(summerCamp.registerParticipant("Sara Dickinson", "child", 200)); 
console.log(summerCamp.timeToPlay("Battleship","Sara Dickinson")); 
console.log(summerCamp.timeToPlay("WaterBalloonFights", "Sara Dickinson","Petar Petarson" )); 
console.log(summerCamp.toString());
