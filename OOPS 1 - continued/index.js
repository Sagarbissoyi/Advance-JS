//// filter method 

// const words = ["spices","elite","exuberant","destruction"]


// const result = words.filter((words) =>words.length > 6)


// console.log(result)




//////////////////////////


////    QS
//// filter out the element which are odd in a different shallow copy using filter method.

// arr= [1,2,55,56,78,43,21,99];




////////////  no answer///////////







// Array.prototype.myFilter = function(callback) {
//     var arr = [];
 
 
//     for (let i = 0; i < this.length; i++) {
//         if (callback.call(this,this[i])) {
//             arr.push(this[i]);
//         }
//     }
//     return arr;
//  }
 
 
//  const arrData = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
 
 
//  const filteredData = arrData.myFilter((element) => {
//     return (element % 2 === 0);
//  });
 
 
//  console.log(filteredData); // Should print: [0, 2, 4, 6, 8]
 




//////////////   filter always give true/boolean




//// QS:- 
// animals=[elephant,tiger,bear,lion,peacock,vulture,monkey];
//you have to filter the elements based on their length . If the length is even only then consider.





// Array.prototype.myFilter = function(callback) {
//     var arr = [];
 
 
//     for (let i = 0; i < this.length; i++) {
//         if (callback.call(this,this[i])) {
//             arr.push(this[i]);
//         }
//     }
//     return arr;
//  }
 
 
//  const arr=["elephant","tiger","bear","lion","peacock","vulture","monkey"];
 
 
//  const ans = arr.myFilter((ele) => {
//     return (ele.length % 2 === 0);///even
//  });
 
 
// const ans1 =arr.myFilter((ele)=>{
//     return(ele.length %2 ===1) //odd
// })

// console.log(`Even ---> ${ans}
//     ODD --> ${ans1}`)









///////////////////   2.00.00 hr  all plloyfil reviseion must be watch 















////////////////    OOPS START ///////////////









///  ex:-


// const alien1 = {
//     name: "Ali",
//     species: "alien",
//     phrase: () => console.log("I'm Ali the alien!"),
//     fly: () => console.log("Zzzzzziiiiiinnnnnggggg!!")
// }
// const alien2 = {
//     name: "Lien",
//     species: "alien",
//     sayPhrase: () => console.log("Run for your lives!"),
//     fly: () => console.log("Zzzzzziiiiiinnnnnggggg!!")
// }
// const bug1 = {
//     name: "Buggy",
//     species: "bug",
//     sayPhrase: () => console.log("Your debugger doesn't work with me!"),
//     hide: () => console.log("You can't catch me now!")
// }


// const bug2 = {
//     name: "Erik",
//     species: "bug",
//     sayPhrase: () => console.log("I drink decaf!"),
//     hide: () => console.log("You can't catch me now!")
// }
// const Robot1 = {
//     name: "Tito",
//     species: "robot",
//     sayPhrase: () => console.log("I can cook, swim and dance!"),
//     transform: () => console.log("Optimus prime!")
// }
// const Robot2 = {
//     name: "Terminator",
//     species: "robot",
//     sayPhrase: () => console.log("Hasta la vista, baby!"),
//     transform: () => console.log("Optimus prime!")
// }























class Alien { // Name of the class
    // The constructor method will take a number of parameters and assign those parameters as properties to the created object.
    constructor (name, phrase) {
        this.name = name
        this.phrase = phrase
        this.species = "alien"
    }
    // These will be the object's methods.
    fly = () => console.log("Zzzzzziiiiiinnnnnggggg!!")
    sayPhrase = () => console.log(this.phrase)
}




class Bug {
    constructor (name, phrase) {
        this.name = name
        this.phrase = phrase
        this.species = "bug"
    }
    hide = () => console.log("You can't catch me now!")
    sayPhrase = () => console.log(this.phrase)
}





class Robot {
    constructor (name, phrase) {
        this.name = name
        this.phrase = phrase
        this.species = "robot"
    }
    transform = () => console.log("Optimus prime!")
    sayPhrase = () => console.log(this.phrase)
}
//a constructor is a function which is used to initialize an object












//////////   complete /////////

