const arr = [];

function addArray(arr) {
    for (let i = 1; i < 10; i += 1) {
        arr.push([i]);
    }

    console.log(arr);
}

addArray(arr);