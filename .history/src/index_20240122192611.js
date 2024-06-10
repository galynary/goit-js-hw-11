let numbers = [1, 4, 9, -16, -25]; 

let sumNumbers = 0;

for (let i = 0; i < numbers.length; i++) {
   if(numbers[i]>0) {
    sumNumbers+= numbers[i]
   }
}

console.log(sumNumbers);
  