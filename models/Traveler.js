class Traveler {
    constructor(name, isHealthy, food){
        this.name = name
        this.isHealthy = isHealthy || true
        this.food = food || 1
        this.class = "Traveler"
    }

    hunt(){
        this.food += 2
    }

    eat(){
        if(this.food === 0){
            this.isHealthy = false
        } else {
            this.food -= 1
        }
    }

}

class Hunter extends Traveler {
    constructor(name, isHealthy, food){
        super(name, isHealthy, food)
        this.class = "Hunter"
    }

    hunt(){
        this.food += 5
    }

    eat(){
        if(this.food > 2){
            this.food -= 2
        } else {
            this.isHealthy = false
            this.food = 0
        }
    }

    giveFood(traveler, foodAmount){
        if(this.food > foodAmount){
            let passenger = passengers.find(passenger => passenger.name === traveler)

            passenger.food = Number(passenger.food) + foodAmount
            this.food -= foodAmount
        }
    }
}

class Doctor extends Traveler {
    constructor(name, isHealthy, food){
        super(name, isHealthy, food)
        this.class = "Doctor"
    }

    heal(traveler){
        let passenger = passengers.find(passenger => passenger.name === traveler)

        passenger.isHealthy = true
    }
}

module.exports = {
    Traveler,
    Hunter,
    Doctor
}