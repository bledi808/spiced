const { Key, Secret } = require("./secrets.json");
const https = require("https");

module.exports.getToken = function (callback) {
    //this functon will get the token from twitter

    let creds = `${Key}:${Secret}`;
    let encodedCreds = Buffer.from(creds).toString("base64");
    const options = {
        method: "POST",
        host: "api.twitter.com",
        path: "/oauth2/token",
        headers: {
            Authorization: `Basic  ${encodedCreds}`,
            "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
        },
    };
    function cb(response) {
        if (response.statusCode != 200) {
            console.log(
                "getToken: smth went wrong with response",
                response.statusCode
            );
            callback(response.statusCode);
            return;
        }
        let body = "";
        response.on("data", (chunk) => {
            body += chunk;
        });
        response.on("end", () => {
            // console.log("getToken: body", body);
            let parsedBody = JSON.parse(body);
            // console.log(parsedBody);
            callback(null, parsedBody.access_token); // null = falsie; required to pass the if block that cataches error
        });
    }

    const req = https.request(options, cb);
    req.end("grant_type=client_credentials");
};

module.exports.getTweets = function (bearerToken, callback) {
    //this functon will get the tweets from twitter
    // let creds = `${Key}:${Secret}`;
    // let encodedCreds = Buffer.from(creds).toString("base64");
    const options = {
        method: "GET",
        host: "api.twitter.com",
        path:
            "/1.1/statuses/user_timeline.json?screen_name=nytimes&tweet_mode=extended",
        headers: {
            Authorization: `Bearer ${bearerToken}`,
        },
    };
    function cb(response) {
        if (response.statusCode != 200) {
            console.log(
                "getTweets: smth went wrong with response",
                response.statusCode
            );
            callback(response.statusCode);
            return;
        }
        let body = "";
        response.on("data", (chunk) => {
            body += chunk;
        });
        response.on("end", () => {
            // console.log("getTweets: body", body);
            let parsedBody = JSON.parse(body);
            // console.log("getTweets: parsedBody", parsedBody);
            callback(null, parsedBody); // null = falsie; required to pass the if block that cataches error
        });
    }
    const req = https.request(options, cb);
    req.end("grant_type=client_credentials");
};

module.exports.filterTweets = function (tweets) {
    //this functon will tidy up the tweets
    let returnedArray = [];
    let newArray = tweets.filter((tweet) => tweet.entities.urls.length === 1);
    // console.log("newArray:", newArray);
    for (let i = 0; i < newArray.length; i++) {
        let myObj = {};
        myObj.headline = newArray[i].full_text.split(" http")[0];
        myObj.url = newArray[i].entities.urls[0].url;
        returnedArray.push(myObj);
    }
    console.log("returnedArr:", returnedArray);
    return returnedArray;
};
