const mySingleton = (function () {
    let instance;

    function init() {
        let _var1 = 'I m private var';
        let _randomVar = Math.random();

        return {
            getPrivateNo: function () {
                return _randomVar;
            },
            getVar1: function () {
                return _var1;
            }
        }

    }

    return {
        getInstance: function () {
            if (instance === undefined) {
                instance = init();
            }

            return instance;
        }
    }
})();

let singletonA = mySingleton.getInstance();
let singletonB = mySingleton.getInstance();

console.log('SingletonA Random No', singletonA.getPrivateNo());
console.log('SingletonB Random No', singletonB.getPrivateNo());