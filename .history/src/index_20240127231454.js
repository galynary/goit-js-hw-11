let array = [1, 2, 3, 4, 5, 6];

let sumEven = 0;
let sumOdd = 0;

for (let i = 0; i < array.length; i++) {
    if (i % 2 === 0) {
        sumEven += array[i];
    } else {
        sumOdd += array[i];
    }
}

if (sumOdd !== 0) {
    let result = sumEven / sumOdd;
    console.log(result);
} else {
    console.log("Сумма элементов на нечетных позициях равна 0, деление невозможно.");
}
 
