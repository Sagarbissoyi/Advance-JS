

///// OOPS Practices


////// ex-1

// class food {
//     static type = "fast food";
//     constructor(name,cuisine){
//         this.name - name
//         this.cuisine = cuisine
//     }
//     static fn = () => {
//         return "This is a static method which is property of class not related with the object"
//     }
// }

// let foodDetails = new food("biriany","mughlai")
// console.log(foodDetails) 
// console.log("every thing in the details" ,foodDetails)  //
// console.log(food.type, food.fn()) // static method and property can be called with class name not with object name





//////////ex-2

// class Holiday{
//     static destination = "goa"
//     constructor(lang,climate){
//         this.language = lang   
//         this.climate = climate
        
//     }
//     static fns = () => {
//         return "Holiday is fun"
//     }
//     details = () => {
//         return `The language is ${this.language} and the climate is ${this.climate}`
//     }
// }


// const holidayDetails = new Holiday("Hindi","hot")
// console.log(holidayDetails) // object of class
// console.log(holidayDetails.language + holidayDetails.climate) // calling the method of class with object

// console.log(Holiday.destination, Holiday.fns()) // static method and property can be called with class name not with object name
// console.log(holidayDetails.details()) // instance method can be called with object name not with class name

// holidayDetails.details();















///////////////  ex-2

// class Car {    //present class
//     constructor(brand){
//         this.carname = brand
//     }
//     present(){
//         return "I have a " + this.carname
//     }
// }

// class Model extends Car {  //child class of car
// constructor(brand, mod){
//     super(brand); // it's calling theconstructor of Car class
//     this.model = mod

//  }
//  show(){
//     return this.present() + ", it is a " + this.model
//  }
// }









// mycar = new Model("ford" , "mustang");
// // console.log(mycar) // Model { carname: 'ford', model: 'mustang' }
// console.log(mycar.show()) // ford


//   console.log(mycar.present())    ///// the child object is calling the present method of parent class
// /////// console.log(mycar.constructor) // car { carname: 'ford' }

// console.log(mycar.carname)














////////////////  ex-3



// class Bike {
//   constructor(brand,price){
//     this.bikename = brand;
//     this.bikeprice=price
//   }
//   present(){
//     return 'I have a'+' ' + this.bikename + ' '+'and price of RS'+' ' + this.bikeprice;
//   }
// }


// class Model extends Bike {
//   constructor (brand,price,mod){
//     super(brand,price)
//     this.model = mod;
//   }
//   show(){
//     return this.present() + ',it is a ' +this.model
//   }
// }


// mybike = new Model ("Bajaj Bike","170311","N160") 

// console.log(mybike.show()) ;
// console.log(mybike.present());
// console.log(mybike.bikename)







////////////// EX-4

class Person {
    constructor(name){
        this.name = name;
    }
intro(){
    return 'Hello, my name is ' + this.name;
}
}

class Student extends Person {
    constructor(name,gender){
        super(name); // calling the constructor of parent
    this.gender=gender
    }
    hello(){
        return this.intro() + ' I am a ' + this.gender

    }
}
  class Teacher extends Person {
    constructor(name,gender){
        super(name);
        this.gender;
    }
    hello(){
        return this.intro() + ' I am a ' + this.gender
    }
  }
 let s1 = new Student('Ravi','Male');
 let t1 = new Teacher('tray', 'Male')
    console.log(s1.hello());






















//////////////////  COMPLETE Concepts
