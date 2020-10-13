const express = require("express");
const app = express();
const { getToken, getTweets, filterTweets } = require("./ticker.js");

////////////////////////////////////////////////// middleware
app.use(express.static("ticker"));

////////////////////////////////////////////////// routes
app.get("/data.json", (req, res) => {
    // console.log("JSOOOOON");
    // we want to do 4 things...
    // 1. ask the twitter API for a token
    getToken(function (err, bearerToken) {
        if (err) {
            console.log("error in getToken", err);
            return;
        }
        // console.log("bearerToken: ", bearerToken);
        // 2. use the token to make a request for tweets
        getTweets(bearerToken, function (err, tweets) {
            if (err) {
                console.log("error in getTweets", err);
                return;
            }
            // 3. tidy up the tweets
            const filteredTweets = filterTweets(tweets);
            // 4. send back the "filtered tweets" as a response - send JSON file
            res.json(filteredTweets);
        });
    });
});

app.listen(8080, () =>
    console.log(
        "8080808080808080808080808080808080 twitter 8080808080808080808080808080808080"
    )
);
