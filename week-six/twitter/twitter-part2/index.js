const express = require("express");
const app = express();
const { getToken, getTweets, filterTweets } = require("./ticker.js");

////////////////////////////////////////////////// middleware
app.use(express.static("ticker"));

////////////////////////////////////////////////// routes
app.get("/data.json", (req, res) => {
    // 1. first, ask the twitter API for a token
    getToken()
        .then((token) => {
            return Promise.all([
                getTweets(token, "frankieboyle"),
                getTweets(token, "theOnion"),
                getTweets(token, "DougStanhope"),
            ]);
        })
        .then((results) => {
            const mergedResults = [...results[0], ...results[1], ...results[2]];
            const sortedTweets = mergedResults.sort((a, b) => {
                return new Date(b.created_at) - new Date(a.created_at);
            });
            const filteredTweets = filterTweets(sortedTweets);
            res.json(filteredTweets);
        })
        .catch((err) => {
            console.log("error in Promise.all", err);
        })
        .catch((err) => {
            console.log("error in catch", err);
        });
});

app.listen(8080, () =>
    console.log(
        "8080808080808080808080808080808080 twitter 8080808080808080808080808080808080"
    )
);
