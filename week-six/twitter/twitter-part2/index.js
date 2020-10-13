const express = require("express");
const app = express();
const { getToken, getTweets, filterTweets } = require("./ticker.js");

////////////////////////////////////////////////// middleware
app.use(express.static("ticker"));

////////////////////////////////////////////////// routes
app.get("/data.json", (req, res) => {
    // 1. first, ask the twitter API for a token
    getToken()
        .then((bledi) => {
            //then pass the token as an arg on getTweets to get the tweets
            return getTweets(bledi);
        })
        .then((results) => {
            //tidy up the tweets
            const filteredTweets = filterTweets(results);
            // 4. send back the "filtered tweets" as a response
            res.json(filteredTweets);
        })
        .catch((err) => {
            console.log("error in catch", err);
            res.sendStatus(500);
        });
});

app.listen(8080, () =>
    console.log(
        "8080808080808080808080808080808080 twitter 8080808080808080808080808080808080"
    )
);
