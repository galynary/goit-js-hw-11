let sum;
let number =0;

for (let i = 1; i <= 100; i++) {
    number = i % 2===0;
    sum += number;
}
console.log(sum)
 