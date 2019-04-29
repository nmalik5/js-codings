let add = function (...n) {
    let total = n.reduce((acc, curr) => {
        return acc + curr;
    });
    return total;
}

let subtract = function (...n) {
    let total = n.reduce((acc, curr) => {
        return acc - curr;
    });
    return total;
}

let calc = function (fn, ...n) {
    return function (...m) {
        return fn.apply(this, n.concat(m));
    }
}

let calSum = calc(add, 1, 2, 3);

let calDiff = calc(subtract, 3, 2, 1);

console.log('add', calSum(1, 1));
console.log('subtract', calDiff(1));