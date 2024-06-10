let num =45678;
let num1 =43456;

let array = String(num).split("").map(Number)
let array1 = String(num1).split("").map(Number)
if (array[0]=== array1[0]) {
    console.log("елементи одинакові")
}
else {
    console.log("елементи різні")
}