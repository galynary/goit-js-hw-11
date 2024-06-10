const number = 1234567;
const str = String(number);

for (let i = str.length - 1; i >= 0; i--) {
  const digit = parseInt(str[i]);

  if (digit % 2 === 0) {
    console.log("Первая четная цифра с конца: " + digit);
    break; // Прерываем цикл, так как мы уже нашли первую четную цифру
  }
}