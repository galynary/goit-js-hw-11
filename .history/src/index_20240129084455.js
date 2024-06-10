let number = 123456;
let numberString = number.toString();
let sum = 0;

for (let i = 0; i < numberString.length; i += 2) {
  let pair = numberString.slice(i, i + 2);
  console.log(pair)
  sum += parseInt(pair);
}

console.log(sum);

 
const productName = "Repair droid";
for (let i = 0; i < productName.length; i += 2) {
console.log(productName.slice(i, i+2));
}