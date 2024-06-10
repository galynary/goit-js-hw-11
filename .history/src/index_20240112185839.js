
function changeEven(numbers, value) {
  const newNumbers = [];
  numbers.filter((number) => {
    if (number % 2 === 0) {
      newNumbers.push((number += value));
    } else {
      newNumbers.push(number);
    }
  });
  return newNumbers;
}

const numbers = [2, 4, 5, 7, 8, 1];