
const Mailbox = [12, 34, 5, 56, 38, 54];
const numbers = [12, 33, 5, 57, 39, 54];
 const sumNumbers = [];

 Mailbox.forEach(function(element){
  if(numbers.includes(element)) {
    sumNumbers.push(element)}
  }
 )