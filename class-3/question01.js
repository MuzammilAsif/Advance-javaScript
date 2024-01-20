class employee {
    constructor (salary,name){
        this.salary = salary
        this.name = name
    }

    display(){
        console.log((`the annual salary of ${this.name} is `) + (this.salary) * 12);
    }
}
class Manager extends employee{
    display(){
        super.display()
        console.log('include bonuses');
    }
}

let gM = new Manager(95000, " Ali ")
let manager = new Manager(150000, " rohaan ")
gM.display()
manager.display()