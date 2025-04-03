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





Array.prototype.myFilter = function(callback) {
    var arr = [];
 
 
    for (let i = 0; i < this.length; i++) {
        if (callback.call(this,this[i])) {
            arr.push(this[i]);
        }
    }
    return arr;
 }
 
 
 const arr=["elephant","tiger","bear","lion","peacock","vulture","monkey"];
 
 
 const ans = arr.myFilter((ele) => {
    return (ele.length % 2 === 0);///even
 });
 
 
const ans1 =arr.myFilter((ele)=>{
    return(ele.length %2 ===1) //odd
})

console.log(`Even ---> ${ans}
    ODD --> ${ans1}`)



















