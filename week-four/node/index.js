const url = require("url");
let myUrl = url.parse(process.argv[2]);

const queryString = require("querystring");
let myQueryString = queryString.parse(process.argv[2]);
// console.log("myQS is:", myQueryString);

console.log(`The protocol is ${myUrl.protocol}`);
console.log(`The host is ${myUrl.host}`);
console.log(`The hostname is ${myUrl.hostname}`);
console.log(`The port is ${myUrl.port}`);
console.log(`The pathname is ${myUrl.pathname}`);
console.log(`The query is ${myUrl.search}`);
console.log(`The value of the a parameter is ${myQueryString.a}`);
console.log(`The value of the b parameter is ${myQueryString.b}`);
