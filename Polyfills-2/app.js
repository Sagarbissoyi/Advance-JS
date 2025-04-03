
//////////   Previous class practices


// const arr = [1,2,3,4,5,6]



// Array.prototype.map=function(fn){
//     const resultArray=[];
//     for(let i=0 ; i<arr.length; i++){
//         resultArray.push(fn(this[i],i))
//     }
//     return resultArray
// }

// const result = arr.map((item,index) => item *index) 


// console.log(result)











////////////////  end //////////////



/////////Reduce Method:-

////The accumulator is a variable that stores the running total (or accumulated value) during the execution of the reduce() method.



/////  Ex-1

// const numbers =[2,3,4,5,6]

// const sum = numbers.reduce((accumulator,currentvalue)=>{
//     return accumulator + currentvalue
// })


// console.log(sum)




///// EX-2


// const num =[10,20,30,40,50];
// const sum = num.reduce((accumulator,currentvalue)=>{
//     return accumulator + currentvalue
// })

// console.log(sum)






////////////// EX-3

////////////  my own Inbuild reduce function




Array.prototype.myReduce = function (callback, initialValue) {
    // Variable that accumulates the result
   // after performing operation one-by-one
   // on the array elements
   let accumulator = initialValue;  // undefined.
    for (let i = 0; i < this.length; i++) {
        
       // If the initialValue exists, we call
       // the callback function on the existing
       // element and store in accumulator
       if (accumulator) {
           accumulator = callback.call(this, 
               accumulator, this[i]);
            
           // If initialValue does not exist, 
           // we assign accumulator to the
           // current element of the array
       }
       else {
           accumulator = this[i];
       }
   }
    // We return the overall accumulated response
   return accumulator;
}
// Code to calculate sum of array elements
// using our own reduce method
const arr = [1, 2, 3, 4];
console.log(arr.myReduce((total, elem) => total + elem));
//total is accumulator
//elem is current element








/////////////////////////////////








/////////////////  Filter Method:-



// const words = ['spray', 'elite', 'exuberant', 'destruction', 'present'];

// const result = words.filter((word) => word.length > 6);

// console.log(result);
////// Expected output: Array ["exuberant", "destruction", "present"]







/////////////// Filter Prototype:-

// Array.prototype.myFilter = function(callback) {
//    var arr = [];


//    for (let i = 0; i < this.length; i++) {
//        if (callback.call(this,this[i])) {
//            arr.push(this[i]);
//        }
//    }
//    return arr;
// }


// const arrData = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];


// const filteredData = arrData.myFilter((element) => {
//    return (element % 2 === 0);
// });


// console.log(filteredData); // Should print: [0, 2, 4, 6, 8]












//////////////////  Filter Method:-



/// Filter Prototype:-



Array.prototype.myFilter = function(callback) {
    var arr = [];
 
 
    for (let i = 0; i < this.length; i++) {
        if (callback.call(this,this[i])) {
                    arr.push(this[i]);
        }
    }
    return arr;
 }
 
 
 const arrData = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
 
 
 const filteredData = arrData.myFilter((element) => {
    return (element % 2 === 0);
 });
 
 
 console.log(filteredData); // Should print: [0, 2, 4, 6, 8]
 
 
 
