class SmartHike {
    constructor(username){
        this.username = username
        this.goals = {}
        this.listOfHikes = []
        this.resources = 100
    }

    addGoal (peak, altitude) {
        if(this.goals.hasOwnProperty(peak)){
            return `${peak} has already been added to your goals`
        }else{
            this.goals[peak] += altitude
          return `You have successfully added a new goal - ${peak}`
        }
    }
    

    hike (peak, time, difficultyLevel) {
        if(!this.goals.hasOwnProperty(peak)){
            throw new Error(`${peak} is not in your current goals` )
        }
        if(this.resources <= 0){
            throw new Error("You don't have enough resources to start the hike")
        }
        let difference = this.resources - (time * 10)
        if(difference < 0){
            return "You don't have enough resources to complete the hike"
        }
        this.resources -= time * 10
        this.listOfHikes.push({ peak, time, difficultyLevel })

        
        return `You hiked ${peak} peak for ${time} hours and you have ${difference}% resources left` 
        
    }


    rest (time) {
        let addRecourses = time * 10
        this.resources += addRecourses
        if(this.resources >= 100){
            this.resources == 100
            return `Your resources are fully recharged. Time for hiking!`
        }else{
            return `You have rested for ${time} hours and gained ${addRecourses}% resources`
        }
    }



    showRecord (criteria) {
        if(this.listOfHikes.length == 0){
            `${this.username} has not done any hiking yet`
        }
        let sorted = this.listOfHikes.sort((a,b)=> b.time - a.time)
if(criteria == 'all'){
    let array = []
    array.push("All hiking records:" )
    for (const hikes of this.listOfHikes) {
        array.push(`${this.username} hiked ${hikes.peak} for ${hikes.time} hours` )
    }
    return array.join('\n')
}
        let found = sorted.find((f)=> f.difficultyLevel == criteria)
        if(!found){
            return `${this.username} has not done any ${criteria} hiking yet`;
        }else{
            return `${this.username}'s best ${criteria} hike is ${found.peak} peak, for ${found.time} hours` 
        }
        //return `${this.username}'s best ${criteria} hike is ${found.peak} peak, for ${found.time} hours`

      
    }
}
const user = new SmartHike('Vili'); 

user.addGoal('Musala', 2925); 

user.hike('Musala', 8, 'hard'); 

console.log(user.showRecord('easy')); 

user.addGoal('Vihren', 2914); 

user.hike('Vihren', 4, 'hard'); 

console.log(user.showRecord('hard')); 

user.addGoal('Rui', 1706); 

user.hike('Rui', 3, 'easy'); 

console.log(user.showRecord('all')); 