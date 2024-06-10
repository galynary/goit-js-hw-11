const arr = [];

function addArray(arr) {
    for (let i = 1; i <= 100; i += 1) {
        if(i % 2 ===0) {
            arr.push(i);
        }
       
    }

    console.log(arr);
}

addArray(arr);