
//////////////  Polifill    (v v Important)

// Polyfill for Bind



//////  Example-1





// let name = {
//  firstname : "Paul",
//  lastname : "Phoenix",
// }


// let printfullname = function(){
//  console.log(this.firstname + " " + this.lastname );
// }


// let fun = printfullname.bind(name); //every function has access to bind
// fun(); //fun is the new function returned.

// ////Function.prototype-> gives access to bind & this is a
// Function.prototype.mybind = function(...args){ //Function.prototype gices access mybind to every function
//    let obj = this; //this is pointing to printfullname. obj is equal to printfullname fn
  
//    return function () {
//        obj.call(args[0]); //args[0] contains name(this keyword to object)
//    // 0 -> is always indicate the object
//     }
// }


// let fun2 = printfullname.mybind(name);
// fun2();







////////////        Example-2



////If you want to pass parameters you can use this:-



let name = {
    firstname : "Paul",
    lastname : "Phoenix",
   }
   
let printfullname = function(name){
console.log(this.firstname + " " + this.lastname +" "+name );
}


Function.prototype.mybind = function(...args){ //Function.prototype gices access mybind to every function
  let obj = this; //this is pointing to printfullname. obj is equal to printfullname fn
  params = args.slice(1); //slicing parameters from this.(name object)
  return function () {
      obj.apply(args[0],params); //args[0] contains name(this keyword to object)
  }
}



let fun2 = printfullname.mybind(name,"djas");
fun2();











