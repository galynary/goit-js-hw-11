let array = [1, 2, 3, 3, 4, 5];
let hasDuplicates = false;

for (let i = 1; i < array.length; i++) {
    if (array[i] === array[i + 1]) {
        hasDuplicates = true;
        break;
    }
}

if (hasDuplicates) {
    console.log("В массиве есть два одинаковых элемента подряд.");
} else {
    console.log("В массиве нет двух одинаковых элементов подряд.");
}