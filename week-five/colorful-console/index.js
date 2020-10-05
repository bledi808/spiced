const chalk = require("chalk");
const http = require("http");
const querystring = require("querystring");

// console.log("boring console log");
// console.log(chalk.green("green log"));
// console.log(chalk.red("red log"));

const server = http.createServer((req, res) => {
    req.on("error", (err) => console.log("error in request", err));
    res.on("error", (err) => console.log("error in response", err));

    // console.log("req.method:", req.method);
    // console.log("status code", res.statusCode);

    if (req.method === "GET") {
        //send some html as a response
        res.setHeader("content-type", "text/html");
        res.statusCode = 200;
        res.end(`<!doctype html>
<html>
<title>Colors</title>
<form method="POST">
  <input type="text" name="text">
  <select name="color">
    <option value="red">red</option>
    <option value="blue">blue</option>
    <option value="green">green</option>
    <option value="yellow">yellow</option>
    <option value="gray">gray</option>
    <option value="magenta">magenta</option>
    <option value="cyan">cyan</option>
  </select>
  <button type="submit">Go</button>
</form>
</html>`);
    }
    if (req.method === "POST") {
        let body = "";
        req.on("data", (chunk) => {
            body += chunk;
        });
        req.on("end", () => {
            res.setHeader("content-type", "text/html");
            res.statusCode = 200;
            // console.log("body", body);
            // console.log("qs.parse", querystring.parse(body));
            const userText = querystring.parse(body).text;
            let userColor = querystring.parse(body).color;
            // console.log("userText: ", userText);
            // console.log("userColor: ", userColor);

            res.end(
                `<p><a href="http://localhost:8080/" style="color:${userColor}">${userText}</a></p>`
            );
            console.log(
                chalk.bold.underline.bgWhite.keyword(`${userColor}`)(
                    `${userText}`
                )
            );
        });
    }
});

server.listen(8080, () => console.log(chalk.yellow("server is listening...")));
