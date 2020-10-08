const express = require("express");
const app = express();
const handlebars = require("express-handlebars");
const projectList = require("./data.json");

app.engine("handlebars", handlebars());
app.set("view engine", "handlebars");

app.use(express.static("./projects"));
app.use(express.static("./public"));

//welcome/root page

app.get("/", (req, res) => {
    res.render("welcome", {
        projectList,
    });
});

// app.get("/about", (req, res) => {
//     res.render("about", {
//         layout: "main",
//         emojis: ["🍔", "🏝", "🚵🏻‍♀️", "🥊", "🏓", "🦷"],
//     });
// });

app.listen(8080, () =>
    console.log("8080808080808080808080listening8080808080808080808080")
);
