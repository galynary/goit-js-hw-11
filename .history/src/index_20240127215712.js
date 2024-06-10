let str = 'aaa bbb ccc';
let result = str.replace(/\b\w/g, (match) => match.toUpperCase());

console.log(result);
 
