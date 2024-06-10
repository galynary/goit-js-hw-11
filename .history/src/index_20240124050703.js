Получите массив цифр этого числа
let number =12345;
const array =  String(number).split('').map(Number);
console.log(array)