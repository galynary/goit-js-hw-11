
const numbers = [2, 4, 8, 6, 3];
// Змінюємо код нижче цього рядка

const pureMultiply = (numbers) => {
  const newArray = [];

  numbers.map(element => {
    newArray.push(element * 2);
  });

  return console.log(newArray);
};

console.log(pureMultiply(numbers));