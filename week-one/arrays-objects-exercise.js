// Question 1

function each(objOrArray, hollaBack) {
    if (Array.isArray(objOrArray)) {
        for (var i = 0; i < objOrArray.length; i++) {
            hollaBack(objOrArray[i], i);
        }
    } else if (typeof objOrArray == "object") {
        for (var key in objOrArray) {
            hollaBack(objOrArray[key], key);
        }
    } else {
        console.log("aaaa");
    }
}

// Question 2

var array = [1, 2, 3, 4, 5];

function reverseArray() {
    var newArray = [];
    for (var i = array.length - 1; i >= 0; i--) {
        newArray.push(array[i]);
    }
    return newArray;
}

console.log(reverseArray(array)); // prints [ 5, 4, 3, 2, 1 ]
console.log(array); // prints [ 1, 2, 3, 4, 5 ]

// Question 3

function getLessThanZero(arr) {
    var newArray = arr.filter(function (num) {
        return num < 0;
    });
    return newArray;
}

var testArray = [1, 2, -1, -90, 10];
var testArrayTwo = [1, 2];

console.log(getLessThanZero(testArray)); // prints [ -1, -90 ]
console.log(getLessThanZero(testArrayTwo)); // prints []
