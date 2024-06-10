let number =10;
function addArray (number ) {
    const arr =[];
    const newArr =String(number).split("").map(Number);
    console.log(newArr)
    for(let i = 1; i < newArr.length; i+=1 )
    arr= newArr.push(newArr[i])
console.log (arr)
}
addArray(number)