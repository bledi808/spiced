const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const myPath = `${__dirname}/projects`;
const basicAuth = require("basic-auth");
const { generateHtml } = require("./portfolio-items");

const auth = function (req, res, next) {
    const creds = basicAuth(req);
    if (!creds || creds.name != "discoduck" || creds.pass != "opensesame") {
        res.setHeader(
            "WWW-Authenticate",
            'Basic realm="Enter your credentials to see this stuff."'
        );
        res.sendStatus(401);
    } else {
        next();
    }
};

//////////////////////////////////////////////MIDDLEWARE//////////////////////////////////////////////

//
app.use("/connect-four", auth);

// checks for POST requests and parses it (only applies to parsing POST body)
app.use(
    express.urlencoded({
        extended: false,
    })
);

//cookie middleware required before the below to ascertain who user is before granting them permissions
app.use(cookieParser());

//custom middleware
app.use((req, res, next) => {
    if (!req.cookies.acknowledged && req.url != "/cookie") {
        res.cookie("userUrl", req.originalUrl);
        res.redirect("/cookie");
    } else {
        next();
    }
});

//built in express middleware: makes static files available to public
app.use(express.static(myPath));

//generates list of portfolio projects on root page
app.get("/", (req, res) => {
    res.send(generateHtml());
});

//////////////////////////////////////////////ROUTES//////////////////////////////////////////////

//get request on /cookie route
app.get("/cookie", (req, res) => {
    res.send(`<h2>warning-this site uses cookies!</h2>
        <form method='POST' style="display: flex; flex-direction: column; justify-content: space-between; width: 40%; height: 50%;">
            <div>
                <span>to continue, please confirm you have read our policy and click submit:
            </div>
            <div>
                <input type="checkbox" name="acknowledge"><span>i have read the cookie policy</span>
            </div>
            <button> submit </submit>
        </form>`);
});

//post request on /cookie route
app.post("/cookie", (req, res) => {
    const { acknowledge } = req.body;
    if (acknowledge) {
        res.cookie("acknowledged", true);
        // console.log("req.cookies.inside: ", req.cookies);
        res.redirect(req.cookies.userUrl);
    } else {
        res.send(
            "<h2>access denied, to continue please confirm you have read our policy and click submit</h2>"
        );
    }
});

app.listen(8080, () =>
    console.log("::::::::::::::::::server listening::::::::::::::::::")
);
