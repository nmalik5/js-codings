/**
 * Quick Sort Algo
 * pindex = Partition()
 * Recursive QuickSortFn(arr, start, pIndex-1)
 * Recursive QuickSortFn(arr, pIndex + 1, end)
 */

let arr = [7, 2, 1, 6, 8, 5, 3, 4]

const QuickSort = (arr, startIndex, endIndex) => {

    if (startIndex < endIndex) {
        let pIndex = QSPartition(arr, startIndex, endIndex);
        console.log('Partion index', pIndex);
        QuickSort(arr, startIndex, pIndex - 1);
        QuickSort(arr, pIndex + 1, endIndex);

    }

    return;

}

const QSPartition = (arr, startIndex, endIndex) => {
    let pivot = arr[endIndex]; // select the last element as pivot
    let pIndex = startIndex;

    for (let i = startIndex; i < endIndex; i++) {
        if (arr[i] <= pivot) {
            let a = arr[i];
            let b = arr[pIndex];
            [a, b] = [b, a]
            arr[i] = a;
            arr[pIndex] = b;
            pIndex++;
        }
    }

    let a1 = arr[pIndex];
    let b1 = arr[endIndex];
    [a1, b1] = [b1, a1];
    arr[pIndex] = a1;
    arr[endIndex] = b1;

    return pIndex;

}

QuickSort(arr, 0, arr.length - 1);
console.log(arr);