
//// Spread operator(...)






///////////////////       Shallow Copy
A shallow copy of an object creates a new object with a new reference, but it doesn’t create copies of nested objects within the original object. Instead, it retains references to those nested objects. As a result, changes made to the properties of the nested objects in the shallow copy will also affect the original object and vice versa.



/////////////////          Deep Copy
A deep copy of an object creates a completely independent copy of the object, including all nested objects. In other words, it duplicates the entire object hierarchy, ensuring that changes made to the copied object do not affect the original object and vice versa.




✅ Deep copy ka matlab hota hai ki original data bilkul bhi change nahi hoga, chahe aap copied data me kuch bhi modify karein.
✅ Shallow copy ka matlab hota hai ki agar copied object ke andar koi nested object hai, toh uska reference same rehega, aur original bhi change ho sakta hai. 🚀











 ///////////////     Object.assign() Method-shallow copy


--> An alternative to the spread operators is the object.assign() method. You see this method to copy the values and properties from one or more source object to a target object.
























//////  V V IMP
/////////   JSON.parse() Method-deep copy

let clone = JSON.parse(JSON.stringify(userDetails))


--> the final method is JSON.parse(). You will use this method alongside JSON.stringify().


-->stringify() method converts a JavaScript object or value to a JSON string, while parse() method parses a JSON string and constructs the JavaScript value or object described by the string.













Q) what is shallow copy ?

--> Asuming there is a deep object and you do make changes in deep object/ nested object , now if you try to access the original object it will get changes .




















/////////////Shallow Copy
-->A shallow copy is a copy of an object where only the first level of properties is duplicated, while nested objects (or arrays) are still referenced rather than copied.

Example in JavaScript:
javascript
Copy
Edit
const obj1 = {
    name: "Alice",
    age: 25,
    address: {
        city: "New York",
        country: "USA"
    }
};

// Creating a shallow copy using Object.assign
const obj2 = Object.assign({}, obj1);

// Modifying the nested object
obj2.address.city = "Los Angeles";

console.log(obj1.address.city); // "Los Angeles" (also changed in obj1)
console.log(obj2.address.city); // "Los Angeles"
Why does this happen?
The address object inside obj1 is not deeply copied.

-->Both obj1 and obj2 share the same reference for address, so modifying obj2.address.city also affects obj1.address.city.

Methods to Create a Shallow Copy in JavaScript
Object.assign({}, obj)

Spread operator { ...obj }

Array.prototype.slice() (for arrays)

Array.prototype.concat() (for arrays)









When to Use a Shallow Copy?
->When you only need to copy primitive values at the top level.

->When nested objects don't need to be separated from the original reference.









If you need a true copy where nested objects are also duplicated, you need a deep copy (e.g., using structuredClone(obj) or JSON.parse(JSON.stringify(obj))). 















///////////////   Complete    ////////////////////