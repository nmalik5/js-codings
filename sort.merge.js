let arr = [2, 4, 9, 1, 6, 8, 5, 3, 7];

const MergeSort = (arr) => {
    let len = arr.length;

    if (len < 2)
        return;

    mid = Math.floor(len / 2);

    let leftArr = arr.slice(0, mid);
    let rightArr = arr.slice(mid, len);


    MergeSort(leftArr);
    MergeSort(rightArr);

    Merge(leftArr, rightArr, arr);

}

const Merge = (lArr, rArr, A) => {
    let i = 0,
        j = 0,
        k = 0;
    while (i < lArr.length && j < rArr.length) {
        if (lArr[i] < rArr[j]) {
            A[k] = lArr[i];
            i++;
        } else {
            A[k] = rArr[j];
            j++;
        }
        k++;
    }

    while (i < lArr.length) {
        A[k] = lArr[i];
        i++;
        k++;
    }

    while (j < rArr.length) {
        A[k] = rArr[j];
        j++;
        k++;
    }
}

console.log('Array before sorting', arr);
MergeSort(arr);
console.log('Sorted Array', arr);