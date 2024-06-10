

const dirtyMultiply = (array, value) => {
  for (const item of array) {
    item * value
  }
  };


const numbers = [1, 2, 3, 4, 5];
dirtyMultiply(numbers, 2);
console.log(numbers)