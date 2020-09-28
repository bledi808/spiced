(function () {
    // console.log($);

    var moreButton = $("#more");

    $("#submit-button").on("click", function () {
        // console.log("search worked");
        var userInput = $("input[name=user-input]").val();
        // console.log("userInput", userInput.val());
        var artistOrAlbum = $("select").val();
        // console.log("select:", artistOrAlbum);
        var resultsDiv = $("#results-container");
        // console.log("results div:", resultsDiv);
        var resultsMsg = $(".results-message");
        // console.log("results-message:", resultsMsg);

        $.ajax({
            url: "https://spicedify.herokuapp.com/spotify",
            method: "GET",
            data: {
                query: userInput,
                type: artistOrAlbum,
            },
            success: function baseUrl(response) {
                console.log("response:", response);
                var response = response.artists || response.albums; // helps to avoid a layer of the nestedness
                //of the object that the API returns; both artists and albums returned bejcts have exact structure so this can be done here

                // response.next property indicates there is more than 20 results
                var nextUrl = response.next;
                response.next &&
                    response.next.replace(
                        "https://api.spotify.com/v1/search",
                        "https://spicedify.herokuapp.com/spotify"
                    );

                console.log("next Url to make the request to:", nextUrl);

                //composes my HTML
                var myHtml = "";
                for (var i = 0; i < response.items.length; i++) {
                    var imgUrl = "./default-image.jpg";
                    // console.log("item(i)", response.items[i].name);
                    //check if result you are looping over has an image - by checking that image property array is empy or not
                    if (response.items[i].images.length > 0) {
                        // greater than 0 because our default image takes case of images.length = 0 case
                        imgUrl = response.items[i].images[0].url;
                    }
                    myHtml +=
                        "<div class='item-separator'><p class='item-name'><a href='" +
                        response.items[i].external_urls.spotify +
                        "'>" +
                        response.items[i].name +
                        "</a><a href='" +
                        response.items[i].external_urls.spotify +
                        "'><div class='item-image'><img src='" +
                        imgUrl +
                        "'></a></p></div></div>";
                }

                resultsDiv.html(myHtml);

                if (response.next !== null) {
                    moreButton.css({
                        visibility: "visible",
                    });
                } else {
                    moreButton.css({
                        visibility: "hidden",
                    });
                }
                //WHEN YOU HAVE TIME: DO THIS VIA CLASSES (Visibility) - both messages should occupy same spot
                if (response.items.length === 0 && userInput.length !== 0) {
                    resultsMsg.html(
                        "<p id='no-results'>" +
                            "no matching " +
                            artistOrAlbum +
                            "s</p>"
                    );
                } else if (response.items.length !== 0) {
                    resultsMsg.html(
                        "<div id='results-text'>" +
                            "we found the following " +
                            artistOrAlbum +
                            "(s) for your search:" +
                            "</div>"
                    );
                }
            }, // closes ajax success property
        });
        moreButton.on("click", function () {
            $.ajax({
                url: nextUrl, // declare within this click event?
                method: "GET",
                success: function () {
                    console.log("second response:");
                },
            });
        });
    });
})();
