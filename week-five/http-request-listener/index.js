// require core node http module
const http = require("http");
const qs = require("querystring");
const fs = require("fs");

//create server method takes 2 args
const server = http.createServer((request, response) => {
    //error event listeners for request and response
    request.on("error", (err) => console.log("error in request", err));
    response.on("error", (err) => console.log("error in response", err));

    // part 2
    let requestData = `${request.url},${request.method}'\t'${request.headers["user-agent"]}`;
    fs.appendFile("requests.txt", requestData, (err) => {
        if (err) {
            console.log("error");
        }
    });

    //we can get access to the following request info/accessed from the 'request' object properties
    console.log("request method: ", request.method);
    console.log("request url: ", request.url);
    console.log("request headers: ", request.headers);

    //building up our reponse and redirect
    if (request.method === "GET") {
        if (request.url === "/secret-page") {
            response.statusCode = 302;
            response.setHeader("location", "/");
            response.end();
        } else {
            let body = "";
            request.on("data", (chunk) => {
                body += chunk; //body = body+chunk
            });
            request.on("end", () => {
                response.setHeader("content-type", "text/html"); // set header method takes 2 args
                response.statusCode = 200;
                response.end(
                    `<!doctype html><html><title>Hello World!</title><p style="color:red">Hello World!</p></html>`
                );
            });
        }
    } else if (request.method === "PUT") {
        response.statusCode = 405;
        response.end(`<h1> you made a PUT request!</h1>`);
    } else if (request.method === "POST") {
        console.log(`you made a POST request!`);
        let body = "";
        request.on("data", (chunk) => {
            body += chunk; //body = body+chunk
        });
        request.on("end", () => {
            //this runs when data has stopped coming in
            response.setHeader("location", "/");
            response.statusCode = 302;
            console.log("body:", body);
            response.end();
        });
    } else if (request.method === "HEAD") {
        console.log("you made a HEAD request");
        let body = "";
        request.on("data", (chunk) => {
            body += chunk; //body = body+chunk
        });
        request.on("end", () => {
            //this runs when data has stopped coming in
            // console.log("body", body);
            response.setHeader("content-type", "text/html");
            response.statusCode = 200;
            response.end(
                `<h1 style="color:red">HEAD request has successfully completed</h1>`
            );
        });
    }
});

//If the request method is GET or HEAD, set the content type of the response to 'text/html' and the status code to 200. If the request method is HEAD, do not write a body before sending the response.

//server listening method takes 2 args - port it it listening to, and a callback which acts as a sanity check
server.listen(8081, () => console.log("server is listening..."));
