// a class named busRussia
class busRussia{
    constructor(name, Lname){
        this.name = name
        this.lastname = Lname
    }
    registeryform(){
        alert(`${this.name} your registration is complete ${this.lastname}`)
    }
    cancelform(){
    alert(`${this.name} your registration is canceled ${this.lastname}`)
    }
    // info(zabuza){
    //     this.name = zabuza
    // }
}

//inherited the busRussian class into the busPakistan's class

// class busPakistan extends busRussia{
//     menu(){
//         alert('tikka, biryani, qourma, malai boti')
//     }
// }

// let obj = new busPakistan() // an objects of pakistan's bus
let obj2 = new busRussia("Muzammil","Mughal") // an object of russian's bus

// obj.info('Pakistan\'s Bus')
// obj.menu()
// obj.registeryform()
// obj.cancelform()


// obj2.info('Russian\'s Bus')
obj2.registeryform()
obj2.cancelform()