//--------> JS is Dynamic <----------(bcz we don't need to declare datatypes ) 

//Primitive

//7 types:String,Number,Boolean , Null,undeifned,Symbol,BigInt

const score=100
const scoreValue=100.2

const isLoggedIn=false
const outsideTemp=null
let userEmail;

const id=Symbol('123')
const anotherId=Symbol('123')
console.log(id===anotherId);//FALSE


//Reference (Non primitive)

//Array,Objects,Functions

const heros=["shaktiman","naagraj","doga"];
let myObj={
    name:"Sagar",
    age:22,
}

const myFun=function(){
    console.log("Hello");
}

console.log(typeof(myFun));//function
console.log(typeof(myObj));//object
console.log(typeof(heros));//object
