/**
 * Bind function
 */
let BindFn = {
    value: 20,
    getVal: function () {
        return this.value;
    }
}
// this should print 20
console.log(BindFn.getVal());

let unboundGetVal = BindFn.getVal;
console.log(unboundGetVal());

let boundFnc = unboundGetVal.bind(BindFn);
console.log(boundFnc());