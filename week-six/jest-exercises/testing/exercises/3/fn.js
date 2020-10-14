function fn(arg) {
    if (typeof arg != "string" && !Array.isArray(arg)) {
        return null;
    } else if (typeof arg === "string") {
        return arg.split("").reverse().join("");
    } else if (Array.isArray(arg)) {
        //INCOMPLETE
        // const newArray = arg.map((arg, num) => arg[0].reverse().join(""));
        // return newArray;
        return arg.reverse().join("");
    }
}

// console.log("number:", fn(45));
// console.log("string:", fn("bledi"));
console.log("array:", fn(["Funky Chicken", 90320]));
