// Question 1

function sumArguments() {
    var sum = 0;
    for (var i = 0; i < arguments.length; i++) {
        sum += arguments[i];
    }
    return sum;
}

var getSum = sumArguments(5, 10);
console.log(getSum);

// Question 2

setTimeout(function () {
    console.log("Hello!");
    setTimeout(function () {
        console.log("Goodbye!");
    }, 1500);
}, 1500);

// Question 3

function checkNumber(num) {
    if (num <= 0 || isNaN(num) == true) {
        // console.log("ERROR");
        return "ERROR";
    } else if (num >= 1000000) {
        // console.log(num);
        return num;
    } else {
        return checkNumber(num * 10);
    }
}

var result = checkNumber(15);
console.log(result);
