




////////////// Copying Arrays

// numbers = [1, 2, 3, 4, 5];
// numbersCopy = [...numbers];
// console.log(numbersCopy);




/////////// ex-2
// names = ["John", "Jane", "Doe"];
// namesCopy = Object.assign([], names);
// console.log(namesCopy);







//////        2) Array.slice() method (Shallow Copy)
// The slice() method returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included) where start and end represent the index of items in that array. The original array will not be modified.    


///// ex-1
// numbers =[1,2,3,4,5,6,7,8,9,10];
// numbercopy=numbers.slice(2,6)


// console.log(numbercopy);


///////  ex-2
// string="hello world"
// copy=string.substring(2,7)

// console.log(copy);





/////// ex-3
/// q) clone a subarray from starting index to endingindex, clone the whole array using slice method?




// phones=["Iphone","samsung","viveo","realme","nokia","oppo"];

// phonesCopy = phones.slice(1,5);
// console.log(phonesCopy);
// phonesCopy =  phones.slice();

// console.log(phonesCopy)






//////////////////////              3) Concat
///////////// Array.concat() method (Shallow Copy)
//// The concat() method is used to merge two or more arrays. This method does not change the existing arrays, but instead returns a new array.


// ex-1
// numbers = [1, 2, 3, 4, 5];
// numbersCopy = numbers.concat(7,8,9);

// console.log(numbersCopy);
// console.log(numbers);





/////ex-2

// const marvel = ["Ironman", "Thor", "Hulk"];
// const dc=["superman","batman","flash"];

// const allheros = marvel.concat(dc);
// console.log(allheros);

// allheros[0]="spiderman";
// console.log(allheros);




//////////EX-2

// const arr=[1,3,4]

// const arr1=[1,3,...arr]

// console.log(arr1)


// const copy2=[...arr1,...arr,2,4,5]


// console.log(copy2)







/////////////   CALL METHOD


////// --> With arrow functions the this keyword always represents the object that defined the arrow function.




/////EX-1

// let obj = {
//     firstname : "Paul",
//     lastname : "Phoenix",
//  }
 
//  let printfullname = function(){
//     console.log(this.firstname + " " + this.lastname);
//  }
 
//  printfullname.call(obj); // name is this pointer to name
 
//  let name2 = {
//     firstname : "Jin",
//     lastname : "Kazama",
//  }
 
//  printfullname.call(name2) // name2 is this pointer to name
 






////////// First argument will always be this* referenced. 2nd argument onwards will be parameters passed to the function.
////////// (Function borrowing and directly invoking)



// let name = {
//   firstname : "Paul",
//   lastname : "Phoenix",
// }

// let printfullname = function(place){
//   console.log(this.firstname + " " + this.lastname + " " + place);
// }

// printfullname.call(name,"Jammu"); // name is this pointer to name

















////////////EX-2


// let car={
//     brand:"BMW",
//     model:"X5",
//     year:2020
// }

// let printcarbrand=function(){
//     console.log(this.brand+" "+this.model+" "+this.year);
// }

// printcarbrand.call(car);







//////////EX-3



// let clothes={
//     brand:"Nike",
//     model:"Airmax",
//     year:2020

// }
// let copycloth=function(){
//     console.log(this.brand+" "+this.model+" "+this.year);
// }


// copycloth.call(clothes)








/////////////////////////  BIND METHOD

////// --> With arrow functions the this keyword always represents the object that defined the arrow function.




/////EX-1

// let name = {
//     firstname : "Paul",
//     lastname : "Phoenix",
//   }
  
//   let printfullname = function(place){
//     console.log(this.firstname + " " + this.lastname + " " + place);
//   }
  
//   let fun = printfullname.bind(name,"haryana"); 
//   fun(); //fun is the new function returned.
  

























