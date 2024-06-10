const number = 1234567;
const str = String(number);

for (let i = str.length - 1; i >= 0; i--) {
  const digit = parseInt(str[i]);

  if (digit % 2 === 0) {
    console.log("Первая четная цифра с конца: " + digit);
    break; 
  }
}
const number = 1234567;
const str = String(number);

let evenDigits = [];

for (let i = str.length - 1; i >= 0; i--) {
  const digit = parseInt(str.charAt(i));

  if (digit % 2 === 0) {
    evenDigits.push(digit);

    if (evenDigits.length === 2) {
      break; // Выходим из цикла, если уже нашли две четные цифры
    }
  }
}