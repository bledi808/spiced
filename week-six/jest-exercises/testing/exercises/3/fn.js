module.exports = function fn(arg) {
    if (typeof arg != "string" && !Array.isArray(arg)) {
        return null;
    } else if (typeof arg === "string") {
        return arg.split("").reverse().join("");
    } else if (Array.isArray(arg)) {
        //INCOMPLETE
        // const newArray = arg.map((arg, num) => arg[0].reverse().join(""));
        // return newArray;
        // return arg.reverse().join("");
        let returnedArray = [];
        for (let i = 0; i < arg.length; i++) {
            // if (typeof arg[i] === "string") {
            //     returnedArray.push(arg[i].split("").reverse().join(""));
            // } else if (typeof arg[i] === "number") {
            //     returnedArray.push((arg[i] = null));
            // }
            returnedArray.push(fn(arg[i])); // recursive/callback approach
        }
        return returnedArray;
    }
};

// console.log("number:", fn(45));
// console.log("string:", fn("bledi"));
// console.log("array:", fn(["Funky Chicken", 90320]));
