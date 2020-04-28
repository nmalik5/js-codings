let BinarySearch = function (arr, element) {

    let len = arr.length;
    let low = 0;
    let high = len - 1;

    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        if (arr[mid] === element) {
            return mid;
        } else if (element < arr[mid]) {
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }

    return -1;

}

console.log(BinarySearch([1, 5, 10, 20, 30], 10));
console.log(BinarySearch([1, 5, 10, 20, 30], 1));
console.log(BinarySearch([1, 5, 10, 20, 30], 30));