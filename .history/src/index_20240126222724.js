const dateString = '2025-12-31';

const dateArray = dateString.split('-').map(Number);
console.log(dateArray);

const dateObject = {
    year: dateArray[0],
    month: dateArray[1],
    day: dateArray[2]
};

console.log(dateObject);

