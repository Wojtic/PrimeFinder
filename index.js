var num = 4;
var isPrime = true;

document.write("1 <b>2 3 </b>");
function checkPrime() {
    for (let b = 1; b <= 10000; b++) {
        for (let i = 2; i <= num/2; i++) {
            if ((num % i) === 0) {
                isPrime = false;
            }
        }




        if (isPrime === true) {
            document.write("<b>"+num+"</b> ");
            num++;
            isPrime = true;
        } else {
            //document.write(num+" ");
            num++;
            isPrime = true;
        }
    }
    if (num > 1000000) {
        clearInterval(c);
    }

}

var c = setInterval(checkPrime,100);
