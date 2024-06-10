let str = 'abcdefg';
let result = '';

for (let i = 0; i < str.length; i++) {
    if ((i+1) % 3 !== 0) {
        result += str[i];
    }
}

console.log(result);
 
