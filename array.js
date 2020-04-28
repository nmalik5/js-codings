let flatArray = function (arr) {
    let result = arr.reduce(function (acc, curr) {
        console.log('acc', acc);
        console.log('curr', curr);
        if (Array.isArray(curr)) {

            result = flatArray(arr);
        }
        return acc.concat(curr);

    }, []);


    return result;
}
//console.log(flatArray([1, 2, [3, 4, [5, 6]]]));

function flatten(arr) {
    var array = [];
    while (arr.length) {
        var value = arr.shift();
        //console.log('val',value);
        //console.log('arr', arr);
        if (Array.isArray(value)) {
            // this line preserve the order
            console.log('value', value)
            console.log('arr', arr);
            arr = value.concat(arr);
        } else {
            array.push(value);
        }
    }
    return array;
}
console.log(flatten([1, 2, [3, 4, [5, 6]]]));