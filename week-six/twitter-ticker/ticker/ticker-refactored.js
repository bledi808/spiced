(function () {
    // Store a reference to the element containing the links in a variable
    var jqHeadlines = $(".headlines"); // grabbing headlines using jQuery; console.log(jqHeadlines);

    // Store the current left position in a variable
    var jqLeft = jqHeadlines.offset().left; //jQuery; console.log(jqLeft);

    tickerTape();

    function tickerTape() {
        jqLeft--; // insert jqLeft version of var
        jqHeadlines.css({
            left: jqLeft + "px", // set the left position using of headlines using jQuery
        });
        if (jqLeft <= -$("a").eq(0).outerWidth()) {
            jqLeft += $("a").eq(0).outerWidth();
            $("a").eq(0).appendTo(jqHeadlines); // can also use $("a").eq(0).appendTo(jqHeadlines);
        }
        animId = requestAnimationFrame(tickerTape);
    }

    //stoping animation:
    $(".headlines").on("mouseenter", function (e) {
        cancelAnimationFrame(animId);
        $(e.target).addClass("hover");
    });

    $(".headlines").on("mouseleave", function () {
        requestAnimationFrame(tickerTape);
        $(".hover").removeClass("hover");
    });

    //ajax
    $.ajax({
        url: "data.json",
        success: function (response) {
            console.log("response:", response);
            //do something
            var myHtml = "";
            for (var i = 0; i < response.length; i++) {
                myHtml +=
                    "<a href='" +
                    response[i].href +
                    "'>" +
                    response[i].headline +
                    "</a>";
                // console.log(myHtml);
            }
            // var headlinesDiv = $(".headlines");
            jqHeadlines.html(myHtml);
        },
    });
})();
