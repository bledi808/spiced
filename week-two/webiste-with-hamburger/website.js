(function () {
    var openNav = document.getElementById("menuicon");
    // console.log("menu:", openNav);

    var closeNav = document.getElementById("close");
    // console.log("closeButton:", closeNav);

    var overlay = document.querySelector(".overlay");
    // console.log("overlay:", overlay);

    var sideNav = document.querySelector(".side-nav");
    // console.log("menu:", sideNav);

    openNav.addEventListener("click", function () {
        sideNav.classList.add("on");
        overlay.classList.add("on");
    });

    closeNav.addEventListener("click", function () {
        sideNav.classList.remove("on");
        overlay.classList.remove("on");
    });

    overlay.addEventListener("click", function () {
        sideNav.classList.remove("on");
        overlay.classList.remove("on");
    });

    sideNav.addEventListener("click", function (e) {
        e.stopPropagation();
    });
})();
