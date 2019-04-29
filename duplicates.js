let arr = [2, 5, 1, 5, 10, 33, 22, 1, 2];
let len = arr.length;

//Method 1 using set
let set = new Set(arr);
let uniqArr1 = [...set];
console.log('Using set', uniqArr1);

//brute force method
let uniqArr2 = []
for (let i = 0; i < len; i++) {
    if (uniqArr2.indexOf(arr[i]) === -1) {
        uniqArr2.push(arr[i]);
    }
}
console.log('Brute force', uniqArr2);

//Using key-value method
let uniqObj = {};
for (let i = 0; i < len; i++) {
    uniqObj[arr[i]] = true;
}
console.log('using keys', Object.keys(uniqObj));

