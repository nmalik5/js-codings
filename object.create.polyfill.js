(function () {
    //if(Object.create !== 'function'){
    Object.NavinCreateObj = function (o, props) {
        if (typeof o !== 'object') {
            throw new Error('This is not a valid object');
        }

        function F() {}
        F.prototype = o;

        if (typeof props === 'object') {
            for (prop in props) {
                if (props.hasOwnProperty(prop)) {
                    F[prop] = prop;
                }
            }
        }

        return new F();

    }
    //}
})()

const person = {
    isHuman: false,
    printIntroduction: function () {
        console.log(`My name is ${this.name}. Am I human? ${this.isHuman}`);
    }
};

const me = Object.NavinCreateObj(person);

me.name = "Matthew"; // "name" is a property set on "me", but not on "person"
me.isHuman = true; // inherited properties can be overwritten

console.dir(me);
me.printIntroduction();


const me1 = Object.create(person);
me1.name = 'Navin';
me1.isHuman = false;
me1.printIntroduction();

// expected output: "My name is Matthew. Am I human? true"