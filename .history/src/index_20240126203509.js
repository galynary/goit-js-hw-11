const str ="fd0e0q0";
function findThirdZeroPosition(str) {
    let count = 0;

    for (let i = 0; i < str.length; i++) {
        if (str[i] === '0') {
            count++;

            if (count === 3) {
                return i; // Возвращаем позицию третьего нуля
            }
        }
    }
}