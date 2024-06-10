let numberOne = 12345;
let numberTwo = 22355;

function checkFirstDigitsMatch(numberOne, numberTwo) {
    // Преобразуем числа в строки и берем первые цифры

    let firstDigitOne = String(numberOne)[0];
    let firstDigitTwo = String(numberTwo)[0];

    let result = firstDigitOne === firstDigitTwo
    if (result) {
        console.log("Первые цифры чисел совпадают");
    } else {
        console.log("Первые цифры чисел не совпадают");

    // Проверяем совпадение первых цифр и возвращаем результат
    return result;
}
}

checkFirstDigitsMatch(numberOne, numberTwo);

