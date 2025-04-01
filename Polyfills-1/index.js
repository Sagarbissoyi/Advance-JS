/////////////step-1
// let name ={
//     firstname : "Paul",
//     lastname : "Phoenix",
// }

// let printfullname = function(){
//     console.log(this.firstname + " " + this.lastname)
// }

////////////////////////////// seap-3

// ////// Polyfill for Bind (custom bind function) line-15 to line-20 

// Function.prototype.mybind= function(...args){
//     let fullnamefn = this; 
//     return function(){
//         fullnamefn.call(args[0])
//     }
// }






///////////////// step-2
// let fun2=printfullname.mybind(name);
// fun2()







//////  Q) Make an Object , make a fn of your choices do anything in it.
///// and then make a polifill for bind and call fn that you just made 



//////////  Ans :-


// let cars = {
//     brand : "BMW",
//     series : "i5",
//     prices : 15000000
//   }
  
//   let carsname = function(){
//     console.log(this.brand  + " " + this.series + " " + "cars is above " + " "+this.prices)
//   }
  
  
  
//   Function.prototype.mybind=function(...sagar){
//     let fnsagar=this;
//     return function(){
//      fnsagar.call(sagar[0])
//     }
//   }
  
  
  
  
//   let carfn = carsname.mybind(cars);
//   carfn()
  
  
//////////////////////// end ///////////////








 

///////////   Ex-2 (v v important)

// let cars={
//     suzuki:"swift",
//     honda:"city",
//     tata:"nano",
//     maruti:"alto"
// }


// let allcars=function(cars){
//     console.log(this.suzuki + " " + this.honda + " " + this.tata + " " + this.maruti+ cars)
// }

// Function.prototype.mybind=function(...sagar){
//     let carscopy=this;
// params=sagar.slice(1);
// return function(){
//     carscopy.apply(sagar[0],params)
// }
// }




// let carfn = allcars.mybind(cars,"safari")

// carfn()


///////////////////////////////////////////











///////////////////    Map method:-
////The map method is used to create a new array by applying a provided function to each element in the original array.
// let arr = [2, 5, 6, 3, 8, 9];


// // Using map to transform elements
// let newArr = arr.map(function (val, index) {
//    return val*index;
// })


// // Display output
// console.log(newArr)









///////////   Polyfill for array.map();


const arr = [1, 2, 3, 4];
Array.prototype.map = function (fn) { // fn -> callback fn
   const resultArray = [];

    for (let i = 0; i < this.length; i++) {  // this-> arr
       resultArray.push(fn(this[i], i));
   }

   return resultArray;

}
// fn(currentelement, index of currentelement)

// this[i] -> currentelement

// i ->index of currentelement



 // Multiply each element with its index
// and return a new array
const result = arr.map((item, index) => item * index)
console.log(result);




















////////////   Practices ///////////////////



// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


// let newarr = arr.map(function(value,index){
//     return value * index ;

// })


// console.log(newarr);








// let cars = [
//     {
//         name : "BMW",
//         price : 1000000
//     },
//     {
//         name : "Audi",
//         price : 2000000
//     },
//     {
//         name : "Mercedes",
//         price : 3000000
//     },
//     {
//         name : "Ferrari",
//         price : 4000000
//     },
//     {
//         name : "Lamborghini",
//         price : 5000000
//     }
// ]



// let allcars =cars.map(function(val, index){
//     return val.price - val.price * 0.1;
// })
// ////////  val = each object in the array (e.g., { name: "BMW", price: 1000000 })

// console.log(allcars);




///////////////////////////  Polyfill for map

// const arr = [1, 2, 3, 4, 5];

// ///polyfill for map
// Array.prototype.map = function(fn){
//     const resultArray=[];
//     for(let i=0;i<this.length;i++){
//         resultArray.push(fn(this[i],i))
//     }
//     return resultArray
// }
// //////////


// const result=arr.map((item,index)=> item+index)


// console.log(result)


















