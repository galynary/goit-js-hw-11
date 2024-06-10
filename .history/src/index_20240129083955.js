let number = 123456;
let numberString = number.toString();
let sum = 0;

for (let i = 0; i < numberString.length - 1; i += 2) {
  let pair = numberString.slice(i, i + 2);
  console.log(pair)
  sum += parseInt(pair);
}

console.log(sum);

 
