let str = '023m0df0dfg0';
let zeroPositions = [];

for (let i = 0; i < str.length; i++) {
    if (i % 3 === '0') {
        zeroPositions.push(i);
    }
}

console.log(zeroPositions);
 
