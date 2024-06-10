const str ='12,34,56';
const arr = str.split(",").map(Number)
console.log(arr) 
const sum =arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(sum)