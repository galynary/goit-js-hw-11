let str = 'abcde';
let result = '';

for (let i = 0; i < str.length; i++) {
    if (str[i] % 2 !== 0) {
        result += str[i].toUpperCase();
    } else {
        result += str[i];
    }
}

console.log(result);
 
