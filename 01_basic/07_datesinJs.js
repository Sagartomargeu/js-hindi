//Dates

let myDate=new Date()
// console.log(myDate);
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());

//console.log(typeof myDate);//object

// let myCreateDate=new Date(2025,0,23)
// let myCreateDate=new Date(2025,0,23,5,3)
// let myCreateDate=new Date("2025-08-4")
let myCreateDate=new Date("08-04-2025")
// console.log(myCreateDate.toLocaleString());

let myTimeStamp=Date.now()

// console.log(myTimeStamp);
// console.log(myCreateDate.getTime())

// console.log(Math.floor(Date.now()/1000))

let newDate=new Date()

newDate.toLocaleString('default',{
    weekday:'long',
})
