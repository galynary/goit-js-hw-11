let number =234567;
let newNumber = String(number).split("").map(Number);
console.log(newNumber)
const count =[];
for(let i =0; i<newNumber.length; i+=1) {
    if(newNumber[i]% 2 ===0) {
        count.push(newNumber[i])
    }
    return console.log(count.length)
}