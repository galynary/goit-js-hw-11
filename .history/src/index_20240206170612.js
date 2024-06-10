let num ="Настунь";
console.log(num[num.length-1])
function getLastLetter (num) {
    if(num[num.length-1]=== ь) {
return num[num.length-2]
    }
    else {
        return num[num.length-1]  
    }
}