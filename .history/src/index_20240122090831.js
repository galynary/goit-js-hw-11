// Change code below this line
let number = 12345; // Замените это число на ваше

// Преобразуем число в строку и возьмем первый символ
let firstDigit = String(number);
let Digit = firstDigit[0];
let lastDigit= firstDigit[firstDigit.length-1];
let numberOne = Number(Digit);
let numberTwo = Number(lastDigit);
let sum =  numberOne + numberTwo;

console.log(sum);