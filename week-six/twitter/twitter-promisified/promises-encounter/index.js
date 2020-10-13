const fs = require("fs");
const path = __dirname;

//////////////////// CONSTRUCTING PROMISES

// 1. via a CONSTRUCTOR
function require(path) {
    return new Promise((resolve, reject) => {
        fs.readdir(path, (err, files) => {
            if (err) {
                console.log(err);
                reject(err);
            } else {
                // console.log(files);
                resolve(files);
            }
        });
    });
}

fs.readdir(path).then((files) => console.log(files));

// 2. via UTIL PROMISIFY
////need node version 8+
////must take a node style call function  (i.e. which takes err as its first arg)

const fs = require("fs");
const { promisify } = require("util");

const readdir = promisify(fsreaddir);

readdir(__dirname).then((content) => console.log("content: ", content));

// 3. via EXPERIMENTAL PROMISES
////works only for promisifying fs methods

const fs = require("fs").promises;

function getFirstFileName() {
    return fs.readdir(__dirname).then((files) => {
        console.log(files(0));
    });
}

getFirstFileName();

// Promise.all
// returns multiple functions that return promises at once
// waits for the function that needs the longest to return a promise then executes
// returns values in array in the order of the listed functions

Promise.all([double(10), double(20), double(30)])
    .then((results) => {
        console.log("results from Promise.all", results);
    })
    .catch((err) => {
        console.log("err: ", err);
    });
