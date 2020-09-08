// exercise 1

function logType(a) {
    if (typeof a == "undefined") {
        console.log("undefined!");
    } else if (a === null) {
        console.log("null!");
    } else if (typeof a == "number") {
        console.log("number!");
    } else if (Number.isNaN(a) == true) {
        console.log("not a number!");
    } else if (typeof a == "string") {
        console.log("string!");
    } else if (typeof a == "boolean") {
        console.log("boolean!");
    } else if (typeof a == "bigint") {
        console.log("bigint!");
    } else if (typeof a == "function") {
        console.log("function!");
    } else if (typeof a == "object") {
        console.log("object!");
    } else if (Array.isArray(a) == true) {
        console.log("array!");
    } else {
        console.log("I have no idea!");
    }
}

// exercise 2

var a = {
    Berlin: "Germany",
    Paris: "France",
    "New York": "USA",
};

var b = {};

for (var i in a) {
    b[a[i]] = i;
}

console.log(b);

//exercise 3

for (var i = 10; i > 0; i--) {
    console.log(i);
}
