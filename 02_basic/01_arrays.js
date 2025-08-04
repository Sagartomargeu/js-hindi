//Array

//JS me jo array hota hai vo "Shallow copy" bnata hai

const myArr=[1,2,3,4,5,6]
const myHero=["shaktiman","naagraj"]

const arr2=new Array(1,2,34,5)

// console.log(myHero[0]);

//Array Method

// myArr.push(8)
// myArr.push(20)
// myArr.pop()

// myArr.unshift(9)

// console.log(myArr.includes(9));//False
// console.log(myArr.indexOf());//-1

const newArr=myArr.join()//convert into string

// console.log(myArr);
// console.log(newArr);


//Slice and Splice

console.log("A",myArr)
const myn1=myArr.slice(1,3)

console.log(myn1)
console.log("B",myArr);

//splice orginal array ko chge kr deta hai
const mny2=myArr.splice(1,3)
console.log("C",myArr);
console.log(mny2);
