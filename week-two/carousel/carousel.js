(function () {
    var kitties = document.querySelectorAll(".container img");
    console.log("kitties: ", kitties);

    function swapKitties() {
        // remove a kitty from the screen
        kitties[0].classList.remove("onscreen");
        kitties[0].classList.add("offscreen-left");

        // pull next kitty in the queue onscreen
        kitties[1].classList.add("onscreen");

        // kitties[1].classList.remove("onscreen");
        // kitties[1].classList.add("offscreen");
        // kitties[2].classList.add("onscreen");
        // kitties[1].classList.remove("onscreen"); you could do this manually for each kitty transition
        // kitties[1].classList.add("offscreen"); ie. a function for each transition
        // kitties[2].classList.add("onscreen"); dont do this - do not use loops but find away to achieve thsi within
        // the single existing function swapKitties

        // kitties[2].classList.add("offscreen");
        // kitties[3].classList.add("onscreen");
        // kitties[3].classList.add("offscreen");
    }

    setTimeout(swapKitties, 1000);

    // *FIGURE OUT WHERE TO CALL swapKitties again to ensure the courousel goes on... *

    document.addEventListener("transitionend", function (e) {
        console.log(.target); //to check which transition ended/ use the event object
        if (e.target.property === "offscreen-left") {
            // e.target.removeClass("offscreen-class");
            console.log("offscreen transition, do something");
        } else {
            console.log("onscreen transition, do nothing"); // for onscreen transition, ignore
        }

        // for offscreen transition, remove offscreen class - this will place the kitties back in the queue
    });
})();

//define i and call teh function for 1++

// remove offscreen adds the kitty back to the queue; but this can only be done after the offscreen transition is
// complete (i.e. the kitty is fully offscreen)

document.addEventListener("transitionend", function () {
    // this event fires when a transition ends
    //we have 2 transitions that may end -
    // 1: queue > onscreen;
    //- this event listener does not care about the
    // 2: onscreen > offscreen
    // - the event listener cares about this transition
    // when this transition ends, remove offscreen class
    //so what the transitioned event event listener will have to do is:
    // - if the transition that ended is the transition to onscreen - do nothing
    // - if the transition that ended is the transition to offscreen, remove the offscreen class
});
