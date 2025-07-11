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
//console.log(id===anotherId);//FALSE


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

// console.log(typeof(myFun));//function
// console.log(typeof(myObj));//object
// console.log(typeof(heros));//object



//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//Stack (Primitive) , Heap(Non-Primitive)

let myYoutubename="sagaryt"
let anotherName=myYoutubename
anotherName="sagarxyz"

console.log(myYoutubename);
console.log(anotherName);

 let userOne={
    email:"user@google.com",
    upi:"user@ybl"
 }

 let userTwo=userOne

 userTwo.email="sagar@google.com"

 console.log(userOne.email);
 console.log(userTwo.email);


 /* Stack ander jab koi chiz lega to uska EK COPY jaya ga.
    Heap ander jab koi chiz lega to usk REFRANCE(jo bhi change hoga vo orignal value me hoga)
     
  */