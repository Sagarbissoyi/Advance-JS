///////////////   interiview questions 



// const cars = {
//  barand: "BMW",
//     model: "X5",
//     year: 2020,
//     color: "black",
//     prices:1000000000,
//     owner : "Sagar "
// }


// console.log(cars.model)



// const userDetails ={
//     name : "John Doe",
//     age : 25,
//     verified : false
// }

// console.log("1",userDetails.name)

// const newObj = userDetails // these is not a correct way to clone on object
// console.log("2",newObj.name)

// newObj.name = "Sagar"
// console.log( "3",newObj.name)


// console.log("4", userDetails.name)  // The original object is affected because object are refreance types. This means any value you store either in the clone or original object points to the same object.











//   very imp

////////////          Spread operator   syntax-> (...)

// And it's a shallow copy








// const userDetails ={
//     name : "John Doe",
//     age : 25,
//     verified : false
// }


// const newObj = {...userDetails} // these is a correct way to clone on object.


// newObj.name = "Sagar";

// console.log("1", newObj.name)

// console.log("2",userDetails.name)







// const mobiles ={
//     brand : "Samsung",
//     model : "Galaxy S21",
//     price : 100000,
//     colors : ["black", "white", "blue"],
    
// }


// const mobile = {...mobiles}

// mobile.price= 200000;
// console.log(mobiles.price)
// console.log(mobile.price)











//////////////////// Object asign method

////////       Object.assign() Method-shallow copy



//////////  It's a shallow copy
//////////  It copies properties from one or more source objects to a target object. The target object is returned.
//////////  It does not copy properties from prototype chain. It only copies own properties.



///////// example-1


// const userDetails ={
//          name : "John Doe",
//          age : 25,
//         verified : false
//     };  // Object creations

// const cloneUser = Object.assign({}, userDetails) // shallow copy using Object.assign().


// console.log("1", cloneUser.name)
// cloneUser.name = "Sagar"; // change the name of cloneUser

// console.log("2", cloneUser.name) // printeing changed clone name
// console.log("3", userDetails.name) //printing original name










/// example-2 
//  const laptop ={
//     brand: "Dell",
//     model : "i5 13 generation",
//     price : 100000,
//     colors : ["black", "white", "blue"],
//  }

// console.log("1", laptop.brand)

// const cloneLaptop = Object.assign({}, laptop) // shallow copy using Object.assign().



// cloneLaptop.brand = "HP";
// console.log("2", cloneLaptop.brand) // printeing changed clone name
// console.log("3", laptop.brand) //printing original name














////////////JSON.parse() Method-deep copy







// const userDetails ={
//     name : "John Doe",
//     age : 25,
//     verified : false
// };

// const cloneUser = JSON.parse(JSON.stringify(userDetails))

// ////////---> stringify() make it a string
// //////// //---> parse() - read it traverse it
// //////---> JSON.parse() and JSON.stringify() are used to deep copy an object.


// console.log("1", cloneUser.name)
// cloneUser.name = "Vivek";

// console.log("2", cloneUser.name) 
// console.log("3", userDetails.name)








// Question-1  make an object of your choices . clone that object using deep copy . make some changes in cloned 
//  version . verify the same by printing the change in original as well as in cloned version.




// Answer:-



// const books={
//     name : "DSA",
//     author : "Sagar",
//     price : 1000,
//     pages : 1000,
//     colors : ["black", "white", "blue"],
// }


// const bookcopy= JSON.parse(JSON.stringify(books))



// bookcopy.name = "Javascript"
// console.log("1", bookcopy.name) // printeing changed clone name
// console.log("2", books.name) //printing original name










//////  2.30.20 hr





  
////////////////// Shallow object
// const userDetails1 = {
//     name: "John Doe",
//     age: 14,
//     verified: false
//   };
  



/////////// Deep object (object inside object)
//   //////////// (2 levels deep)
// const userDetails = {
//     name: "John Doe",
//     age: 14,
//     status: {         // another object inside object 2 levels
//       verified: false,
//     }
//   };
  


















//shallow copy with spread operator proof


// const userDetails = {
//     name: "John Doe",
//     age: 14,
//     status: {         // another object inside object 2 levels
//       verified: false,
//     }
//    };
   
   
//    const copy1 = {...userDetails};
//    copy1.name = "Sagar";
//    console.log(userDetails.name)
//    copy1.status.verified = true;
   
   
//    console.log(userDetails.status.verified);//there's a change in original obj 
   
   
// console.log(copy1.status.verified) //true-> it's a shallow copy.




///////////   spread operator only does seperate cloneing at level 1 key value pairs only . not on nested object .







const userDetails = {
    name: "John Doe",
    age: 14,
    status: {  
           
      verified: false,
      origin : {
country: "India",
      }
    }
   
}

console.log("1", userDetails.status.verified);
const copylevel2=Object.assign({},userDetails)
copylevel2.status.verified = "true";
console.log("2", copylevel2.status.verified);
console.log("3", userDetails.status.verified);
















































































/// PRACTICES Sallow and deep copy


// const cars= {
//     brsnk : "BMW",
//     model : "X5",
//     year : 2020,
//     color : "black",
//     price : 1000000000,
//     owner : "Sagar"
// }



// const copycar = JSON.parse(JSON.stringify(cars))

// console.log("1", copycar.model)
// console.log("2", cars.model)
// copycar.model = "X8";
// console.log("3", copycar.model)
// console.log("4", cars.model)
// console.log("5", copycar.model)





// const mobile = {
//     brand : "Samsung",
//     model : "Galaxy S21",
//     price : 100000,
//     colors : ["black", "white", "blue"],
//     owner : "Sagar"
// }

// console.log("1", mobile.brand)

// const mobilecopy = Object.assign({},mobile)
// mobilecopy.brand = "Iphone";
// console.log("2", mobilecopy.brand)
// console.log("3", mobile.brand)






// const laptop = {
//     brand : "Dell",
//     model : "i5 13 generation",
//     price : 100000,
//     colors : ["black", "white", "blue"],
//     owner : "Sagar"
// }

// console.log("1", laptop.brand)
// const laptopcopy = {...laptop}
// laptopcopy.brand = "HP";
// console.log("2", laptopcopy.brand)
// console.log("3", laptop.brand)








