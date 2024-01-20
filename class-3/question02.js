class Animal {
    constructor (species, sound){
        this.species = species
        this.sound = sound
    }

    animalSound(){
        console.log(` the sound of ${this.species}  is ${this.sound}`);
    }
}
class dog extends Animal{
    constructor(species, color, sound){
        super(species, sound)
        this.color = color
    }
    animalSound(){
        super.animalSound()
        console.log(`the color of the dog is ${this.color}`);
    }
}

let spSound = new Animal("cow", "moooohhhhhhhhhh")
let  dogSound = new dog("pitbull", "WOOF WOOF")

spSound.animalSound()
dogSound.animalSound()