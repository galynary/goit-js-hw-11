let sum = 0;

for (let i = 1; i <= 100; i++) {
    if (i % 2 !== 0) {
        sum += i;
    }
}

console.log("Сумма всех целых нечетных чисел от 1 до 100:", sum);
  