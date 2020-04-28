// Finding max sum in  a sub array
// [-2,3,2,-1]
let kadaneAlgoMaxSum = function (arr) {
    let len = arr.length;
    let curruntSum = arr[0];
    let globalSum = arr[0];

    for (let i = 1; i < len; i++) {
        curruntSum = Math.max(arr[i], arr[i] + curruntSum);
        if (curruntSum > globalSum) {
            globalSum = curruntSum;
        }
    }

    return globalSum;
}

console.log(kadaneAlgoMaxSum([-2, 3, 2, -1]));

// finding an sub array given the sum
//arr = [3,2,7,1,6]
// sum = 10

let kadaneSubArray = function (arr, sum) {
    let len = arr.length;
    let curruntSum = 0;
    let sumMap = {};

    for (let i = 0; i < len; i++) {
        curruntSum = arr[i] + curruntSum;
        if (curruntSum === sum) {
            return arr.splice(0, i + 1);
        } else if (sumMap.hasOwnProperty(curruntSum - sum)) {
            let index = sumMap[curruntSum - sum] + 1;
            return arr.splice(index, i);
        } else {

            sumMap[curruntSum] = i;
        }
    }

    return 'no match found'

}

console.log(kadaneSubArray([3, 2, 7, 1, 6], 10));