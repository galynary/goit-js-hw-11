


const arrNew = [];
const arr = ["http://dfd", "http://dfeee", "https://dfd"];

for (let i = 0; i < arr.length; i++) {
    if (arr[i].startsWith("http://")) {
        arrNew.push(arr[i]);
    }
}

console.log(arrNew);