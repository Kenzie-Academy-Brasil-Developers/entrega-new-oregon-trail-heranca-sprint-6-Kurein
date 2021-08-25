class Wagon {
    constructor(capacity, passengers = []){
        this.capacity = capacity
        this.passengers = passengers
    }

    getAvailableSeatCount(){
        return this.capacity - this.passengers.length
    }

    join(traveler){
        if(this.getAvailableSeatCount() !== 0){
            this.passengers.push(traveler)
        }
    }

    shouldQuarantine(){
        
        for(let i=0; i<this.passengers.length; i++){
            if(this.passengers[i].isHealthy === "false"){
                return true
            }
        }

        return false
    }

    totalFood(){
        let count = 0
        this.passengers.forEach((element) =>{
            count += Number(element.food)
        })

        return count
    }

}

module.exports = Wagon;