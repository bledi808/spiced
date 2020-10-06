const fs = require("fs");
const myPath = `${__dirname}/projects`;

function generateHtml() {
    const myDirectory = fs.readdirSync(myPath, { withFileTypes: true });
    let myHtml = `<!doctype html><html><h1>>>my portfolio<<</h1>`;
    for (let i = 0; i < myDirectory.length; i++) {
        if (myDirectory[i].isDirectory()) {
            console.log("myDirectory[i]:", myDirectory[i].name);
            myHtml += `<a href="/${myDirectory[i].name}"><p>${myDirectory[i].name}</p></a>`;
        }
    }
    myHtml += `</html>`;
    return myHtml;
}

module.exports.generateHtml = generateHtml;
