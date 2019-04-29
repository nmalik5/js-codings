/**
 * factorial brute force
 * 4! = 4 * 3 * 2 * 1 = 24
 * 0! = 1
 * 1! = 1
 * n! = n * (n-1) * (n-2) ... * 1
 * n! = n * (n-1)! {  n >= 2 }
 *                      
 */

let Fact_R = function (n) {
    if (n === 0 || n === 1) return 1;

    return n * Fact_R(n - 1);
}

console.log('4! =', Fact_R(4));
console.log('0! =', Fact_R(0));
console.log('1! =', Fact_R(1));
console.log('10! =', Fact_R(50));

//Factorail using dp bottom-up approach
let Fact_DP = function (n) {
    let a = [];
    a[0] = 1;

    for (let i = 1; i <= n; i++) {
        a[i] = i * a[i - 1];
    }
    return a[n];

}

console.log('Fact using dp 4!', Fact_DP(4));

/**
 * Fibonaci series, eg. 0, 1, 1, 2, 3, 5, 8
 * Find the nth number in the fibo series
 * Fn = Fn-1 + Fn-2;
 * Fo = 0; F1 = 1
 */

let Fibo = function (n) {
    if (n === 0) return 0;
    if (n === 1) return 1;

    return Fibo(n - 1) + Fibo(n - 2);
}

console.log("Recursive Fibo(9) ", Fibo(9));
console.log("Recursive Fibo(1000) ", Fibo(40));

//Fibo using DP bottom up approach
let Fibo_DP = function (n) {
    let a = [];
    a[0] = 0;
    a[1] = 1;

    for (let i = 2; i <= n; i++) {
        a[i] = a[i - 1] + a[i - 2];
    }

    return a[n];
}

console.log("DP Fibo(9) ", Fibo_DP(9));
console.log("DP Fibo(40) ", Fibo_DP(100));