123456
Найдите сумму пар цифр этого числа. В нашем случае имеется ввиду следующее:  12 + 34 + 56

let number = 123456;
let numberString = number.toString();
let sum = 0;

for (let i = 0; i < numberString.length; i += 2) {
  let pair = numberString.slice(i, i + 2);
  console.log(pair)
  sum += parseInt(pair);
}