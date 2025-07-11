const name="sagar"
const repoCount=50

//console.log(name + repoCount + " value")

//console.log(`Hello my name is ${name} and my repocount is${repoCount}`);

const gameName=new String('sagar-hc')

// console.log(gameName[0]);
// console.log(gameName.__proto__);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('g'));

const newString=gameName.substring(0,5)
// console.log(newString);//sagar
const anotherString=gameName.slice(-8,4)
// console.log(anotherString);

const newStringOne="   Sagar   "
console.log(newStringOne);
console.log(newStringOne.trim());

const url="https://sagar.com/sagar%20tomar"
console.log(url.replace('%20','-'));
console.log(url.includes('sagar'));  //true

console.log(gameName.split('-'));