const score=400
// console.log(score);

const balance=new Number(100)
//console.log(balance);

//console.log(balance.toString().length);//3
//console.log(balance.toFixed(2));//100.00

const otherNumber=123.8966

//console.log(otherNumber.toPrecision(4));//123.9

const hunderds=1000000
//console.log(hunderds.toLocaleString('en-IN'));//10,00,000


//++++++++++++++++++MATH++++++++++++++++++++++

// console.log(Math);
// console.log(Math.abs(-4));//4
// console.log(Math.round(4.6));//5 
// console.log(Math.ceil(4.2));
// console.log(Math.floor(4.9));
// console.log(Math.min(4,3,5,2,1));
// console.log(Math.max(4,3,5,2,1));

console.log(Math.random());
console.log((Math.random()*10)+1);
console.log(Math.floor(Math.random()*10)+1);

//formula to print random no. b/w range
const min=10
const max=20

console.log(Math.floor(Math.random()*(max-min+1))+min);