


const arrNew = [];
const arr = ["index.html", "users.html", "users.js"];

for (let i = 0; i < arr.length; i++) {
    if (arr[i].endsWith("html")) {
        arrNew.push(arr[i]);
    }
}

console.log(arrNew);