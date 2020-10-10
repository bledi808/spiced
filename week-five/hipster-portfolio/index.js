const express = require("express");
const app = express();
const handlebars = require("express-handlebars");
const projectList = require("./data.json");
// const selectedProject = projectList.find((item) => item.title === project);

const basicAuth = require("basic-auth");

const auth = function (req, res, next) {
    const creds = basicAuth(req);
    if (!creds || creds.who != "catsordogs" || creds.pass != "cat") {
        res.setHeader(
            "WWW-Authenticate",
            'Basic realm="Enter your credentials to see this stuff."'
        );
        res.sendStatus(401);
    } else {
        next();
    }
};

// app.use("/projects/carousel", auth);

const setHandlebars = handlebars.create({
    helpers: {
        globalHello() {
            // return "hello back";declare global helpers here
        },
    },
});

app.engine("handlebars", setHandlebars.engine);
app.set("view engine", "handlebars");

app.use(express.static("./projects"));
app.use(express.static("./public"));

//welcome/root page

app.get("/", (req, res) => {
    res.render("welcome", {
        projectList,
    });
});

app.get("/projects/:project", (req, res) => {
    const { project } = req.params;
    const selectedProject = projectList.find(
        (item) => item.directory === project
    );
    if (!selectedProject) {
        return res.sendStatus(404);
    } else {
        res.render("desc", {
            layout: "main",
            selectedProject,
            projectList,
        });
    }
});

app.listen(8080, () =>
    console.log("8080808080808080808080listening8080808080808080808080")
);
