let p1 = new Promise((resolve, reject)=> {
    setTimeout(function(){
        console.log('Call returned with some data');
        resolve({
            name: 'navin'
        });
    }, 3000);
});
console.log(p1);
p1.then((data)=>{
    console.log('then called');
    console.log(data);
});

console.log(p1);

console.log('This should exec before promise');

