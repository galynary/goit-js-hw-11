let num ="Настунь";

function getLastLetter (num) {
    if(num[num.length-1]=== "ь") {
return console.log(num[num.length-2])
    }
    else {
        return console.log(num[num.length-1])
    }
}
getLastLetter (num)