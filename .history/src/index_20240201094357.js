let inputString = 'abcde abcde abcde';

// Разбиваем строку на массив слов
let words = inputString.split(' ');
console.log(words)

// Заменяем первый символ каждого слова на '!'
let resultString = words.map(word => '!' + word.slice(1)).join(' ');

console.log(resultString);