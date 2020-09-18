(function () {
    var kitties = document.querySelectorAll(".container img"); //console.log("kitties: ", kitties);
    var dots = document.querySelectorAll(".dot"); //console.log("dots:", dots);
    var i = 0;
    // var timer;
    var isCurrentlyAnimating;
    var j = 0;

    var timer = setTimeout(swapKitties, 5000);

    // event listener on "transition end" event
    document.addEventListener("transitionend", function (e) {
        isCurrentlyAnimating = false;
        if (e.target.classList.contains("offscreen-left")) {
            e.target.classList.remove("offscreen-left");

            setTimeout(swapKitties, 5000);
            console.log("animating?", isCurrentlyAnimating);
        }
    });

    // how to grab which dot the user clicked on
    for (j = 0; j < dots.length; j++) {
        dots[j].addEventListener("click", function (e) {
            // clearTimeout(timer);
            if (j === i) {
                console.log("same j and i");
                console.log("j: ", j);
                console.log("i: ", i);
                return; // problem 1: if user clicks on dot of the image that is currently displayed, do nothing
            }

            if (isCurrentlyAnimating) {
                console.log("hello"); // problem 2: if user clicks dot while images are animating/transitioning, do nothing
            } else {
                for (j = 0; j < dots.length; j++) {
                    if (dots[j] == e.target) {
                        // dots[j].classList.add("on");

                        // swapKitties(j);
                        break;
                    }
                }
            }
        });
    }

    function swapKitties(nextIndex) {
        isCurrentlyAnimating = true;
        console.log("animating?", isCurrentlyAnimating);
        kitties[i].classList.remove("onscreen");
        kitties[i].classList.add("offscreen-left");
        dots[i].classList.remove("on");

        if (typeof nextIndex != "undefined") {
            i = nextIndex;
        } else {
            i++;
            console.log[i];

            if (i === kitties.length) {
                i = 0;
            }

            kitties[i].classList.add("onscreen");
            dots[i].classList.add("on");
        }
    }
})();
