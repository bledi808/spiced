const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const myPath = `${__dirname}/projects`;
const { generateHtml } = require("./portfolio-items");

//adding middleware/ goes before the routes
app.use(
    express.urlencoded({
        extended: false,
    })
); // checks for POST requests and parses it (only applies to parsing POST body)

//cookie middleware required before the below to ascertain who user is before granting them permissions
app.use(cookieParser());

//built in express middleware: makes static files available to public
app.use(express.static(myPath));

//generates list of portfolio projects on root page
app.get("/", (req, res) => {
    res.send(generateHtml());
});

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
        res.send("cookie policy aknowledged");

        res.redirect(req.cookies.url);
    } else {
        res.send(
            "<h2>access denied, to continue please confirm you have read our policy and click submit</h2>"
        );
        // res.redirect("/cookie"); ??
    }
    console.log("req.cookies: ", req.cookies);
});

app.use((req, res, next) => {
    // console.log("middleware running");
    // handle cookie cases
    /////If users attempt to access any route without having assented to the cookie policy, redirect to /cookie (unless the route is the GET or POST to /cookie - it is expected that they do not have the cookie when they hit those routes).
    /////Before redirecting, stick the url that the user was attempting to navigate to in a cookie so you can read it later.
    next();
});

app.listen(8080, () =>
    console.log("::::::::::::::::::server listening::::::::::::::::::")
);

//////////////////////// below - from the encounter

//rerouting from /about to serve index.html file
app.get("/about", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

// //dynamic routing
// app.get("/:project", (req, res) => {
//     console.log("req.params: ", req.params); // req params dynamically stores the value entered after the colon into porpoerty "username" - this can be leveraged to route dynamically, i.e:
//     const { project } = req.params;
//     res.send(`<h1>this is page is all about ${project} </h1>`);
//     res.sendFile(`__dirname/${project}/index.html`);
// });

//GET request to the "/register" route; response sends us back a form
// app.get("/register", (req, res) => {
//     res.send(`<h2>warning - this site uses cookies!</h2>
//         <form method='POST' style="display: flex; flex-direction: column; justify-content: space-between; width: 40%; height: 50%;">
//             <div>
//                 <span>to continue, please confirm you have read our policy and click submit:
//             </div>
//             <div>
//                 <input type="checkbox" name="acknowledge"><span>i have read the cookie policy</span>
//             </div>
//             <button> submit </submit>
//         </form>`);
// });

// //post request to the "/register" route
// app.post("/register", (req, res) => {
//     // console.log("req.body: ", req.body); // name attribute in the html provides the object properties/keys returned by req.body
//     const { firstname, lastname, age, subscribe } = req.body;
//     res.cookie("authenticated", true);
//     console.log("a POST request was made to the /register route");

//     if (subscribe) {
//         res.send(`<h3>thank you ${firstname} ${lastname} for subscribing</h3>`);
//     } else {
//         res.send(
//             `<h3>we are sorry you didn't subscribe ${firstname}, at ${age} years old, you are still too young to know what's good for you</h3>`
//         );
//     }
// });

// app.get("/private", (req, res) => {
//     console.log("req.cookies:", req.cookies);
//     if (res.cookie.authenticated) {
//         res.send(`<h2>top sercret, only authenticated users allowed</h2>`);
//     } else {
//         res.redirect("/");
//     }
// });

// app.listen(8080, () =>
//     console.log("::::::::::::::::::server listening::::::::::::::::::")
// );
