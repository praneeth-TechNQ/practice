//at() method 
const sentence = 'This is the good day to start the work.';

let index = 5;

console.log(`Using an index of ${index} the character returned is ${sentence.at(index)}`);

index = -4;

console.log(`Using an index of ${index} the character returned is ${sentence.at(index)}`);


alert("JS IS WORKING");


//Charat() method

const Sent='This is the good day .';
let num = 4;
console.log(`using number of ${num} is ${Sent.charAt(num)}`);






//charcodeat
const sente = 'The quick brown fox jumps over the lazy dog.';

let ind = 4;

console.log(`The character code ${sentence.charCodeAt(ind)} is equal to ${sente.charAt(ind)}`);


//concat

const Str1='hello';
const Str2='all';

console.log(Str1.concat('',Str2));
console.log(Str2.concat('',Str1));


//endswith()--it returns true or false

const Str3='there is a heavy traffic on roads.'

console.log(Str3.endsWith('roads.'));
// true

console.log(Str3.endsWith('roas,'));
//false

   


//includes()

const word='lots of people are waiting for buses';
const letter='are';
console.log(`The word "${letter}" ${word.includes(letter) ? 'is' : 'is not'} in the sentence`);
//$ is used to indicate the variable or object what ever it may be 




//index of

const words='there are lots of cars in the  streets and the entire streets are with full of crowd';
const searchterm='streets';
console.log(`the index of the frist ${searchterm} ${words.indexOf(searchterm)}`);

// code point at
const icons = '*';

console.log(icons.codePointAt(1));

// from char code

console.log(String.fromCharCode(123,127,3838));
// console.log(String.fromCharCode(189, 43, 190, 61));


// constructor
const sum = new Function('a', 'b', 'return a + b');

console.log(sum(122, 6));








 
