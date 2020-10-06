const http = require("http");
const fs = require("fs");
const path = require("path");
const { generateHtml } = require("./fun");

const extObject = {
    ".html": "text/html",
    ".css": "text/css",
    ".js": "text/javascript",
    ".json": "application/json",
    ".gif": "image/gif",
    ".jpg": "image/jpeg",
    ".png": "image/png",
    ".svg": "image/svg+xml",
};

http.createServer((req, res) => {
    if (req.method !== "GET") {
        res.statusCode = 405; // method not allowed
        return res.end();
    }

    // determining url and pathname
    console.log("url: ", req.url); // gives us the url entered
    const filePath = path.normalize(`${__dirname}/projects${req.url}`); // gives us full path after url typed; un the filepath through the normalize method path.normalize(filePath);

    // traversal attack (do not slash)
    if (!filePath.startsWith(`${__dirname}/projects/`)) {
        res.statusCode = 405; // forbidden
        console.log("WARNING INTRUDER ALERT!!!");
        return res.end();
    }

    console.log("we are good so far...");
    // console.log("filepath: ", filePath);

    fs.stat(filePath, (err, stats) => {
        if (err) {
            // file path doesnt exist so...
            res.statusCode = 404;
            return res.end();
        }
        if (stats.isFile()) {
            let pathExt = path.extname(filePath); // console.log("path extension name: ", pathExt);

            //setHeader correctly based on extname
            res.setHeader("Content-Type", extObject[pathExt]); // console.log("path path", extObject[pathExt]);

            //create a readable stream from the filepath
            const readStreamExt = fs.createReadStream(filePath);
            readStreamExt.pipe(res);
            readStreamExt.on("error", (err) => {
                console.log("error in readStreamExt", err);
                res.statusCode = 500; // server error
                res.end();
            });
            // console.log("readStreamExt:", readStreamExt);
        } else {
            if (req.url === "/") {
                res.end(generateHtml());
            } else if (req.url.endsWith("/")) {
                // console.log("filepath:", filePath);
                const readStreamHtml = fs.createReadStream(
                    `${filePath}/index.html`
                );
                res.setHeader("Content-Type", "text/html");
                readStreamHtml.pipe(res);
                readStreamHtml.on("error", (err) => {
                    console.log("error in readStreamHtml", err);
                    res.statusCode = 500; // server error
                    res.end();
                });
            } else {
                //redirect user to a url with a trailing /
                res.setHeader("Location", req.url + "/");
                res.statusCode = 302;
                res.end();
            }
        }
    });
}).listen(8080, () =>
    console.log("::::::::::potfolio up and running::::::::::")
);
