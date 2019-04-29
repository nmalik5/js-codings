let flatArray = function (arr) {
    let result = arr.reduce(function (acc, curr) {
        console.log('acc', acc);
        console.log('curr', curr);
        if(Array.isArray(curr)){
           
            result = flatArray(arr);
        }   
        return acc.concat(curr);

    },[]);


    return result;
}

function flatten(arr) {
    var array = [];
    while (arr.length) {
        var value = arr.shift();
        console.log('val',value);
        console.log('arr', arr);
        if (Array.isArray(value)) {
            // this line preserve the order
            arr = value.concat(arr);
        } else {
            array.push(value);
        }
    }
    return array;
}
console.log(flatten([1, 2, [3, 4, [5, 6]]]));