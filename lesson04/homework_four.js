/**
 * Exercise 1. University
 */

class University {
    constructor(teachers, students) {
        this.teachers = teachers
        this.students = students

    }

    addMember(...member) {

        member.forEach((item)=>{
            if (item.role === 1) {
                this.teachers.push(item)
            } else if (item.role === 2) {
                this.students.push(item)
            }

        })


    }

    removeMember(member) {
        if (member.role === 1) {
            this.teachers.map((item, i) => {
                if (item.name === this.teachers[i].name && item.age === this.teachers[i].age && item.energy === this.teachers[i].energy) {
                    this.teachers.splice(i, 1)
                }
            })
        } else if (member.role === 2) {
            this.students.map((item, i) => {
                if (item.name === this.students[i].name && item.age === this.students[i].age && item.energy === this.students[i].energy) {
                    this.students.splice(i, 1)
                }
            })
        }
    }

    startLesson() {

        this.teachers.forEach((item) => {
            item.energy -= 5;
        });
        this.students.forEach((item) => {
            item.energy -= 2;
        });
    }

}


class UniversityMember {
    constructor(name, age, role, energy) {
        this.name = name;
        this.age = age;
        this.role = role;
        this.energy = energy;

    }

    info() {

        return this
    }

}
class Teacher extends UniversityMember {
    constructor(name, age, role, energy) {
        super(name, age, role, energy);

    }

}
class Student extends UniversityMember {
    constructor(name, age, role, energy) {
        super(name, age, role, energy);

    }
}

const university = new University([], [])
let jon = new Teacher('LBERT', 25, 1, 19)
let Luiji = new Teacher('Luiji', 25, 1, 19)
university.addMember(jon.info(),Luiji.info())
let student = new Student('studentik', 25, 2, 50)
university.addMember(student)
university.startLesson()
console.log(university)

/**
 * Exercise 2. CoffeeShop
 */

const menuList = [
    {
        name: "cinnamon roll",
        type: "food",
        price: 150,
    },
    {
        name: "natural orange",
        type: "drink",
        price: 400,

    },
    {
        name: "iced coffee",
        type: "drink",
        price: 300,
    },
    {
        name: "stake",
        type: "food",
        price: 200,
    },
    {
        name: "Valerianka",
        type: "drink",
        price: 10,
    }]

function CoffeeShop(name, menu, orders) {

    this.name = name
    this.menu = menu
    this.order = orders


    this.addOrder = (name) => {
        const result = Boolean(this.menu.find((item) => item.name === name))

        if (result) {
            if (this.order.push(name)) return "Order added!"


        } else {

            return "This item is currently unavailable!"
        }

    }
    this.fulfillOrder = () => {
        if (this.order.length > 0) {

            let result = `The ${this.order.join()} is ready`

            return result

        }
        return `All orders fulfilled!`;

    }
    this.listOrders = () => {

        return orders
    }


    this.dueAmount = () => {
        let result = []
        this.order.forEach((elem, i) => {
            return this.menu.forEach((item, j) => {
                if (elem === item.name) {
                    result.push(this.menu[j].price)
                }

            })

        })

        return result.reduce((previousValue, currentValue) => previousValue + currentValue)

    }


    this.cheapestItem=()=>{
       let minPrice =  Math.min(...this.menu.map((item)=>item.price))
       let result=  this.menu.find((item)=>item.price === minPrice)

        return result.name

    }

    this.drinksOnly = () => {
        let onlyDrink = this.menu.filter((item)=> item.type === 'drink').map(item => item.name)
        return onlyDrink.join()
    }


    this.foodOnly=()=>{
        let onlyDrink = this.menu.filter((item)=> item.type === 'food').map(item => item.name)
        return onlyDrink.join()
    }
}


const tcs = new CoffeeShop('Food', menuList, [])
console.log(tcs.addOrder("iced tea"))
console.log(tcs.addOrder("hot cocoa"))
console.log(tcs.addOrder("cinnamon roll"))
console.log(tcs.addOrder("iced coffee"))
console.log(tcs.listOrders())
console.log(tcs.fulfillOrder())
console.log(tcs.dueAmount())
console.log(tcs.cheapestItem())
console.log(tcs.drinksOnly())
console.log(tcs.foodOnly())









/**
 * Exercise 3 Abstract class
 */


class Teachers
{
    constructor() {
        if(this.constructor == Teachers){
            throw new Error(" Object of Abstract Class cannot be created");
        }
    }
    display(){
        throw new Error("Abstract Method  implementation");
    }
}
class Students extends Teachers
{
    display(){

        console.log("I am a Students");
    }
}


let students = new Students();
console.log(students.display() );


/**
 * Exercise 4.1. Class hierarchy
 */
const user = {
    name: "Tarzam",
    type: "Daemon",
    health: 100,
    level: 30,
    attack: 500,
    defense: 50
}

class Character {
    constructor(user) {
        if(typeof user.name === "string" && user.name.length>2 && user.name.length <= 10){
            this.name = user.name
        }else{

            throw new Error('write the correct one name')
        }

        if(typeof user.type ===  "string" && typeof user.type ===  "string" && typeof user.type === "string" && typeof user.type ===  "string" &&  typeof user.type ===  "string" && typeof user.type ===  "string"){
            this.type = user.type

        }else{
            throw new Error('write the correct one type')
        }



        this.health = user.health
        this.level = user.level
        this.attack = user.attack
        this.defense = user.defense
    }

    levelUp(level,paracent ,health){
        if(this.health !== 0){
            this.level = this.level + level
            this.attack =  this.attack + (this.attack   * paracent / 100)
            this.defense =  this.defense + (this.defense   * paracent / 100)
            this.health = health

        }else{

            throw new Error('(you cannot increase the level of the deceased).')
        }


    }

    damage(points){

    }
}

const character = new Character(user)
character.levelUp(1,20,100)

class Bowerman extends Character{
        constructor(user) {
            super(user)
            this.health = user.health
            this.level = user.level
            this.attack = user.attack
            this.defense = user.defense
        }

}

const bowermanObj = {
    health: 100,
    level: 1,
    attack: 25,
    defense: 25
}

let bowerman = new Bowerman(bowermanObj)





class Magician extends Character{
    constructor(user) {
        super(user)
        this.health = user.health
        this.level = user.level
        this.attack = user.attack
        this.defense = user.defense
    }

}

const magicianObj = {
    health: 100,
    level: 1,
    attack: 10,
    defense: 40,
}

let magician = new Magician (magicianObj)

class Daemon extends  Character{
    constructor(user) {
        super(user)
        this.health = user.health
        this.level = user.level
        this.attack = user.attack
        this.defense = user.defense
    }
}
const daemonObj = {
    health: 100,
    level: 1,
    attack: 10,
    defense: 40
}
let daemon = new Daemon(daemonObj)

class  Undead extends  Character{
    constructor(user) {
        super(user)
        this.health = user.health
        this.level = user.level
        this.attack = user.attack
        this.defense = user.defense
    }

}

const undeadObj = {
    health: 100,
    level: 1,
    attack: 10,
    defense: 40
}


let undead = new Undead(undeadObj)


class Zombie extends  Character{
    constructor(user) {
        super(user)
        this.health = user.health
        this.level = user.level
        this.attack = user.attack
        this.defense = user.defense
    }
}


const zombie = {
    health: 100,
    level: 1,
    attack: 40,
    defense: 10
}






/**
 * Exercise 5. OOP Structure
 */


class City {
    constructor() {
        this.building = []
    }



}


class Building extends City{
    constructor() {
        super();
    }

}

class Hospital  extends City{
    constructor() {
        super();
    }


}
class PoliceDepartment   extends City{
    constructor() {
        super();
    }

}

class Car {
    constructor(policeCar ,ambulanceCar) {
    }


}


class PoliceCar extends Car {
        constructor() {
        super();
        this.policeCar = 10
        this.type = "Police"
    }


}


class AmbulanceCar  extends Car{
    constructor() {
        super();
        this.policeCar = 10
        this.type = "AmbulanceCar"
    }


}
const nairiHospital = new Hospital();

const erebuniHospital = new Hospital();
const city = new City();
const centralPoliceDepartment = new PoliceDepartment()
city.buildings = [nairiHospital, erebuniHospital, centralPoliceDepartment]
const policeCar = new PoliceCar();
const car = new Car();
const ambulanceCar = new AmbulanceCar();



/**
 * Exercise 6. TV Class
 */









class TV {
    constructor(brand, channel, volume) {
        this.brand = brand;
        this.channel = channel;
        this.volume = volume;

    }

    increaseVolume() {
        if (this.volume > 0 && this.volume < 100) {
             this.volume = this.volume + 1
        }


    }

    decreaseVolume() {
        if (this.volume >= 0 && this.volume <= 100) {
            this.volume = this.volume - 1
        }
    }

    setChannel(set) {
         this.channel = set
    }


    reset(volume,channel) {
        this.channel = channel;
        this.volume = volume;
    }

    status() {
        return `brand ${this.brand} channel ${this.channel}, volume ${this.volume}`
    }
}

    let tv = new TV("Alm", 1, 50 );
    tv.setChannel(55)
    tv.reset(55 ,1)
    console.log(tv.status())



/**
 * Exercise 7. Shopping Cart
 *
 */


class  Product {

    constructor(name, type, price, code) {
        this.name = name;
        this.type = type;
        this.price = price;
    };
}


class ShoppingCart {
    constructor() {
        this.bag = []
    };

    addProduct(product) {
        this.bag.push(product)

    };

    removeProduct(product) {

    };

    totalPrice() {


    };

    replace(productName, replacementProduct) {

    }
}

