//DOM Events Exercise 4

var parentEl = document.querySelector(".parent-square"); //console.log("parent element: ", parentEl);
var childEl = document.querySelector("#child-square"); // console.log("child element: ", childEl);

parentEl.style.width = "200px";
parentEl.style.height = "200px";
parentEl.style.backgroundColor = "tomato";

childEl.style.width = "50px";
childEl.style.height = "50px";
childEl.style.backgroundColor = "lightgrey";

parentEl.addEventListener("click", function (e) {
    var red = Math.floor(Math.random() * 256);
    var blue = Math.floor(Math.random() * 256);
    var green = Math.floor(Math.random() * 256);
    e.target.style.backgroundColor =
        "rgb(" + red + ", " + green + ", " + blue + ")";
});

childEl.addEventListener("click", function (e) {
    var red = Math.floor(Math.random() * 256);
    var blue = Math.floor(Math.random() * 256);
    var green = Math.floor(Math.random() * 256);
    e.target.style.backgroundColor =
        "rgb(" + red + ", " + green + ", " + blue + ")";
});
