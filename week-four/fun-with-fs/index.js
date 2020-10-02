const fs = require("fs");
var myPath = `${__dirname}/files`;

// PART 1: uses readdir and stat

console.log(myPath);

function logSizes(fullPath) {
    fs.readdir(fullPath, { withFileTypes: true }, (err, content) => {
        if (err) {
            console.log("error");
        }
        for (let i = 0; i < content.length; i++) {
            if (content[i].isFile()) {
                fs.stat(`${fullPath}/${content[i].name}`, (err, data) => {
                    console.log(`${fullPath}/${content[i].name}:`, data.size);
                });
            }
            if (content[i].isDirectory()) {
                logSizes(`${fullPath}/${content[i].name}`);
            }
        }
    });
}

logSizes(myPath);

// PART 2: uses readdirSync and statSync and writeFileSync

console.log(myPath);

function mapSizes(fullPath) {
    const myDir = fs.readdirSync(fullPath, { withFileTypes: true });
    var myObject = {};
    for (let i = 0; i < myDir.length; i++) {
        // console.log(`name of item is ${myDir[i].name}`); // prints names of items in directory - "files" and "index.js"
        myObject[myDir[i].name] = "";
        if (myDir[i].isFile()) {
            const myStat = fs.statSync(`${fullPath}/${myDir[i].name}`);
            // console.log("my stat is:", myStat);
            myObject[`${myDir[i].name}`] = myStat.size;
        } else if (myDir[i].isDirectory()) {
            // the name of the property should be the item's name
            myObject[`${myDir[i].name}`] = mapSizes(
                `${fullPath}/${myDir[i].name}`
            );
        }
    }
    return myObject;
}

var myObj = mapSizes(myPath);
// console.log(myObj);

fs.writeFileSync(`${__dirname}/files.json`, JSON.stringify(myObj, null, 4));
