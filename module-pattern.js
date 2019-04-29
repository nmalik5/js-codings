const myModule = (function() {
    let privateVar = 0,
        publicModule = {};

     function privateMethod() {
         privateVar++;
         console.log('I am private method');
     }
     
     publicModule.publicVar = 'I am public var';
     publicModule.publicMethod = function() {
         console.log('I am public method and can access private var');
         privateMethod();
     }

     return publicModule;
}) ();

console.log(myModule.publicVar);
myModule.publicMethod();