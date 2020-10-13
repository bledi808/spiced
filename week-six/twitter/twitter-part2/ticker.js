const { Key, Secret } = require("./secrets.json");
const https = require("https");

module.exports.getToken = function () {
    //this functon will get the token from twitter
    let creds = `${Key}:${Secret}`;
    let encodedCreds = Buffer.from(creds).toString("base64");
    const options = {
        method: "POST",
        host: "api.twitter.com",
        path: "/oauth2/token",
        headers: {
            Authorization: `Basic  ${encodedCreds}`,
            "Content-Type": "application/x-www-form-urlencoded;charset=UTF-2",
        },
    };

    return new Promise((resolve, reject) => {
        function cb(response) {
            if (response.statusCode != 200) {
                reject(response.statusCode);
                return;
            }
            let body = "";
            response.on("data", (chunk) => {
                body += chunk;
            });
            response.on("end", () => {
                let parsedBody = JSON.parse(body);
                resolve(parsedBody.access_token);
            });
            // return;
        }
        const req = https.request(options, cb);
        req.end("grant_type=client_credentials");
    });
};

module.exports.getTweets = function (token, screenName) {
    //this functon will get the tweets from twitter
    const options = {
        method: "GET",
        host: "api.twitter.com",
        path: `/1.1/statuses/user_timeline.json?screen_name=${screenName}&tweet_mode=extended`,
        headers: {
            Authorization: `Bearer ${token}`,
        },
    };

    return new Promise((resolve, reject) => {
        function cb(response) {
            if (response.statusCode != 200) {
                reject(response.statusCode);
                return;
            }
            let body = "";
            response.on("data", (chunk) => {
                body += chunk;
            });
            response.on("end", () => {
                let parsedBody = JSON.parse(body);
                // console.log("getTweets: parsedBody", parsedBody);
                resolve(parsedBody); // null = falsie; required to pass the if block that cataches error
            });
        }
        const req = https.request(options, cb);
        req.end();
    });
};

module.exports.filterTweets = function (tweets) {
    //this functon will tidy up the tweets
    let returnedArray = [];
    let newArray = tweets.filter((tweet) => tweet.entities.urls.length === 1);
    // console.log("newArray:", newArray);
    for (let i = 0; i < newArray.length; i++) {
        let myObj = {};
        let userHandle = newArray[i].user.name;
        let timestamp = newArray[i].created_at;
        myObj.headline = `[${userHandle}] [${timestamp.split(" +")[0]}] ${
            newArray[i].full_text.split(" http")[0]
        }`;
        myObj.href = newArray[i].entities.urls[0].url;
        returnedArray.push(myObj);
    }
    console.log("returnedArr:", returnedArray);
    return returnedArray;
};
