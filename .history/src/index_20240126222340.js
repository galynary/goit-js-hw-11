const dateString = '2025-12-31';

const dateArray = dateString.split('-');
console.log(dateArray);

const dateObject = {
    year: dateArray[0],
    month: dateArray[1],
    day: dateArray[2]
};

console.log(dateObject);
const str ="12, 23, 56"
const str1 = str.split(" ")
console.log(str1)