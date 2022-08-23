/**
 * 1. Create an object and methods to support the following functionality
 */


const  obj =  {
    setName:(name)=> this.name = name,
    getName:()=> this.name

}


obj.setName('Tarzan')
console.log(obj.getName())


/**
 * 2. Create an object and methods to support the following functionality
 */


const  obj_two =  {
    setSum:(setNumber)=> this.setNumber = setNumber,
    add:(addNumber)=> this.addNumber = addNumber,
    geSum:()=>  this.setNumber === 100? this.setNumber: this.setNumber + this.addNumber

}


obj_two.setSum(100);
obj_two.add(500);
console.log(obj_two.geSum())


/**
 * 3. Using the constructor function create, an object and methods to support the following functionality
 */

 function   Calculator(InitialResult ) {
    this.InitialResult = InitialResult

    this.plus = function (plusNumber) {
      this.InitialResult =  this.InitialResult + plusNumber
    }

    this.minus = function (minusMinus) {
        this.InitialResult =  this.InitialResult - minusMinus
    }

    this.multiply = function (multiplyNumber) {
        this.InitialResult =  this.InitialResult * multiplyNumber
    }

    this.divide = function (divideNumber) {
        this.InitialResult =  this.InitialResult / divideNumber
    }

    this.getResult = function () {

        return    this.InitialResult
    }


}


const calculator = new Calculator(0)


calculator.plus(100); // add 5 to the result
calculator.minus(0); // subtract 3 from result
calculator.multiply(2); // multiply result by 3
calculator.divide(2); // divide result on 2
console.log(calculator.getResult())


/**
 * 4. Using the constructor function create, an object and methods to support the following functionality
 */



function  ProfileInfo() {
    this.setUsername = function (userName){
        this.userName = userName

    }

    this.getUsername = function (){

        return    this.userName
    }

    this.setEmail = function (userEmail){
        this.userEmail = userEmail

    }

    this.getEmail = function (){

        return  this.userEmail
    }


    this.setAddress = function (userAddress ){
        this.userAddress = userAddress

    }

    this.getAddress = function (){

        return   this.userAddress
    }

}





const profileInfo = new ProfileInfo();
profileInfo.setUsername('Pushok');
console.log(profileInfo.getUsername());
profileInfo.setEmail('Pushok@mail.ru');
console.log(profileInfo.getEmail());
profileInfo.setAddress('Afrika');
console.log(profileInfo.getAddress());









function  User() {
    this.setName = function (userName){
        this.userName = userName

    }

    this.getName = function (){

        return    this.userName
    }

    this.setAge = function (userAge){
        this.userAge = userAge

    }

    this.getAge = function (){

        return  this.userAge
    }


    this.setProfileInfo = function (profilInfo ){
        this.profilInfo = profilInfo

    }

    this.getProfileInfo = function (){

        return   this.profilInfo
    }

}





const user = new User();
user.setName('Serxio');
user.getName();
user.setAge(63);
user.getAge();
user.setProfileInfo(new ProfileInfo());
console.log(user.getProfileInfo());





