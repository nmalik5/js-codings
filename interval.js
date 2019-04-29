let printNos = (n, interval) => {

    let i = 1;

    let sid = setInterval(function () {
        if (i === n) {
            clearInterval(sid);
        }
        console.log(i);
        i++;
    }, interval);

}

printNos(10, 1000);