let number = 12345; ----число


let firstDigit = String(number); ----число перетворили на рядок
let Digit = firstDigit[0].Number; -----перший індекс
let lastDigit= firstDigit[firstDigit.length-1].Number
let sum = Digit + lastDigit/*; ------- останній індекс
let numberOne = Number(Digit); ----- перетворили на число
let numberTwo = Number(lastDigit);  ----- перетворили на число
let sum =  numberOne + numberTwo; ----- додали*/

console.log(sum);