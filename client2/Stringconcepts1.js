//lastindexof()

//length()
const str = 'whats up dude how are,you how was your day Answer:';

console.log(`${str} ${str.length}`);
//local compare()

const a = 'marriage'; // With accents, lowercase
const b = 'MARRIAGE'; // No accents, uppercase

console.log(a.localeCompare(b));

console.log(a.localeCompare(b, 'en', { sensitivity: 'base' }));

//match()
const paragraph = 'The quick brown fox jumps over the lazy dog. It barked.';
const regex = /[A-Z]/g;
const found = paragraph.match(regex);

console.log(found);
//padEnd()
const str2 = 'Breaded Mushrooms';

console.log(str2.padEnd(30, '.'));

const str3 ='200';

console.log(str3.padEnd(5));

//padStart()
const str1 = '5';

console.log(str1.padStart(2, '0'));
// Expected output: "05"

const fullNumber = '6304427090';
const last3Digits = fullNumber.slice(-3);
const maskedNumber = last3Digits.padStart(fullNumber.length, '*');

console.log(maskedNumber);

