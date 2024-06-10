const str = 'abc123def';

const firstDigitPosition = str.search(/\d/);

console.log(firstDigitPosition);
let str1 = "Я люблю JavaScript";
let regexp = /люблю/i;

console.log( regexp.test(str1) ); // true