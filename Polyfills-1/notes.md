






////////   MAP METHOD


//How to Create a Map
 -->You can create a JavaScript Map by:

--> Passing an Array to new Map()
--> Create a Map and use Map.set()








/////////The new Map() Method


--> You can create a Map by passing an Array to the new Map() constructor:

// Create a Map
const fruits = new Map([
  ["apples", 500],
  ["bananas", 300],
  ["oranges", 200]
]);




///////////////////The set() Method
-->You can add elements to a Map with the set() method:




// Create a Map
const fruits = new Map();

// Set Map Values
fruits.set("apples", 500);
fruits.set("bananas", 300);
fruits.set("oranges", 200);















--> The get() method gets the value of a key in a Map:

  fruits.get("apples");    // Returns 500






-->Maps are Objects
typeof returns object:

   // Returns object:
typeof fruits;





-->instanceof Map returns true:

// Returns true:
fruits instanceof Map;







                
         Object                                 	Map
Not directly iterable	                  Directly iterable
Do not have a size property	              Have a size property
Keys must be Strings (or Symbols)	      Keys can be any datatype
Keys are not well ordered	              Keys are ordered by insertion
Have default keys	                      Do not have default keys














///////////    Map Methods and Properties
   Method	           Description
new Map()	             Creates a new Map object
clear()              	 Removes all the elements from a Map
delete()	             Removes a Map element specified by a key
entries()           	 Returns an iterator object with the [key, value] pairs in a Map
forEach()	             Invokes a callback for each key/value pair in a Map
get()           	     Gets the value for a key in a Map
groupBy()	             Groups object elements according to returned callback values
has()	                 Returns true if a key exists in a Map
keys()           	    Returns an iterator object with the keys in a Map
set()           	    Sets the value for a key in a Map
size	                Returns the number of Map elements
values()	           Returns an iterator object of the values in a Map




















(////)Detalis in map:-https://www.w3schools.com/jsref/jsref_obj_map.asp














///////////Polyfill for array.map();

--> In JavaScript, Array.prototype refers to the prototype object of the Array constructor. Every array in JavaScript inherits properties and methods from Array.prototype. When you add a method to Array.prototype, it becomes available to all arrays.



const arr = [1, 2, 3, 4];
Array.prototype.map = function (fn) {
   const resultArray = [];
    for (let i = 0; i < this.length; i++) {
       resultArray.push(fn(this[i], i));
   }
   return resultArray;
}
 // Multiply each element with its index
// and return a new array
const result = arr.map((item, index) => item * index)
console.log(result);




















//////////  complete