




///////////////  Copying Arrays

// numbers = [1, 2, 3, 4, 5];
// numbersCopy = [...numbers];
// console.log(numbersCopy);




/////////// ex-2
// names = ["John", "Jane", "Doe"];
// namesCopy = Object.assign([], names);
// console.log(namesCopy);














   2) Array.slice() method (Shallow Copy)

--> The slice() method returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included) where start and end represent the index of items in that array. The original array will not be modified.    











   3) Concat

--> Array.concat() method (Shallow Copy)

--> The concat() method is used to merge two or more arrays. This method does not change the existing arrays, but instead returns a new array.












///////////  Call Method

--> Call is a function that helps you change the context of the invoking function. In layperson's terms, it helps you replace the value of this inside a function with whatever value you want.









--> Apply method - Only difference we pass arguments in arrayList/array that's it.

--> (Function borrowing and directly invoking)


let name = {
  firstname : "Paul",
  lastname : "Phoenix",
}

let printfullname = function(place){
  console.log(this.firstname + " " + this.lastname + " " + place);
}

printfullname.apply(name,["haryana"]); //haryana passed in arrayList.
























///////////What is this?

--> In JavaScript, the this keyword refers to an object.

--> The this keyword refers to different objects depending on how it is used:

--> In an object method, this refers to the object.
Alone, this refers to the global object.


--> In a function, this refers to the global object.

--> In a function, in strict mode, this is undefined.

--> In an event, this refers to the element that received the event.


--> Methods like call(), apply(), and bind() can refer this to any object.


 ////////   Note
--> this is not a variable. It is a keyword. You cannot change the value of this.



--> this in a Method
--> When used in an object method, this refers to the object.


--> In the example on top of this page, this refers to the person object.


--> Because the fullName method is a method of the person object.






















///////////////////   2.00.00 hr