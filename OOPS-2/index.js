



// class Alien { // Name of the class
//     // The constructor method will take a number of parameters and assign those parameters as properties to the created object.
//     constructor (name, phrase) {
//         this.name = name
//         this.phrase = phrase
//         this.species = "alien"
//     }
//     // These will be the object's methods.
//     fly = () => console.log("Zzzzzziiiiiinnnnnggggg!!")
//     sayPhrase = () => console.log(this.phrase)
// }


// // a constructor is a function which is used to initialization on object 
// const superman = new Alien("DC", "I'm DC alien!") //1st object
// const batman = new Alien("BAT ", "Nolan") //2nd object



// console.log(superman.name) 

// console.log(superman.phrase) 
// superman.fly() 
// superman.sayPhrase() 

// batman.fly() 
















// class Alien { // Name of the class
//     // The constructor method will take a number of parameters and assign those parameters as properties to the created object.
//     constructor (name, phrase) {
//         this.name = name
//         this.phrase = phrase
//         this.species = "alien"
//     }
//     // These will be the object's methods.
//     fly = () => console.log("Zzzzzziiiiiinnnnnggggg!!")
//     sayPhrase = () => console.log(this.phrase)
// }



// const superhero = new Alien("Ali", "Ali the alien") //1st object


// console.log(superhero)

// superhero.fly()


















/// QS :-
 // Write a class of your choices . make a constructor inside it and pass some parameters
 // to initilaze the object .make object using that class
// try to print all the properties using back ticks with string interpolation




// class nolan{
//     constructor (teddy,statement,verdict,superhero,pow){
//         this.name= teddy;
//         this.phase = statement;
//         this.species = "Superhero";
//         this.power = "100";
//         this.fly = verdict;
//     }
//     printAll = () => {
//         console.log(`${this.name} ${this.phase} ${this.species} ${this.power} ${this.fly}`)
//     }


// }


// const superman = new nolan ("DC","SRK","Yes");

// const batman = new nolan("Bat","Nolan","No");

// const ironman = new nolan("Iron","Steve","Yes")



// superman.printAll()
// batman.printAll();
// ironman.printAll()











// class Car{

//     constructor(brand){
//         this.carname = brand;
//     }
//     static hello(){  /// static method are not property of object . They are property of class.

//         return "Hello!";
//     }

// }

// mycar = new Car("Ford");
// console.log(mycar.carname); // Ford
// // console.log(mycar.hello())    //OBJ /// error
// console.log(Car.hello())        //class





















