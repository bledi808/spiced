(function () {
    var openNav = document.getElementById("menuicon");
    // console.log("menu:", openNav);

    var closeNav = document.getElementById("close");
    // console.log("closeButton:", closeNav);

    var overlay = document.querySelector(".overlay");
    // console.log("overlay:", overlay);

    openNav.addEventListener("click", function () {
        // add class .on to the overlay element ()
        overlay.classList.add("on");
    });

    closeNav.addEventListener("click", function () {
        // e.stopPropagation();
        overlay.classList.remove("on");
    });
})();
