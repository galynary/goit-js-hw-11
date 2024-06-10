const number =1234567;
const str =String(number)
console.log(str)
for (let i = str.length - 1; i >= 0; i--) {
if(i %2 ===0) {
    const num = str.charAt(i);
    console.log(num);
}

}