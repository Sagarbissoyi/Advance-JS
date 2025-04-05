
/////////Reduce Method:-


--> reduce() is a JavaScript array method that processes elements and returns a single accumulated result.

--> When you need to aggregate or combine all elements of an array into a single value.

-->Example: Summing all numbers in an array, finding the maximum value, or flattening an array of arrays.


const numbers = [1, 2, 3, 4]; 
const sum = numbers.reduce((accumulator, currentValue) => { return accumulator + currentValue; }); 
console.log(sum); // Output: 10









////////////  Filter Method:-

--> The filter() method of Array instances creates a shallow copy of a portion of a given array, filtered down to just the elements from the given array that pass the test implemented by the provided function (callback).



/////////// ex:-
const words = ['spray', 'elite', 'exuberant', 'destruction', 'present'];

const result = words.filter((word) => word.length > 6);

console.log(result);
// Expected output: Array ["exuberant", "destruction", "present"]














////////////   Filter Method:-



--> The filter() method of Array instances creates a shallow copy of a portion of a given array, filtered down to just the elements from the given array that pass the test implemented by the provided function (callback).


ex:-

const words = ['spray', 'elite', 'exuberant', 'destruction', 'present'];

const result = words.filter((word) => word.length > 6);

console.log(result);
// Expected output: Array ["exuberant", "destruction", "present"]




















