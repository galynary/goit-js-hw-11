let number = 10;

function addArray(number) {
    const arr = [];
    const newArr = String(number).split("").map(Number);
    console.log(newArr);

    for (let i = 0; i < newArr.length; i += 1) {
        arr.push(newArr[i]);
    }

    console.log(arr);
}

addArray(number);і