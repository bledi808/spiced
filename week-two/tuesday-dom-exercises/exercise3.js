//DOM Events Exercise 3

var element = document.querySelector(".square"); //console.log("element: ", element);

element.style.width = "100px";
element.style.height = "100px";
element.style.border = "2px black solid";

function changeColor() {
    var red = Math.floor(Math.random() * 256);
    var blue = Math.floor(Math.random() * 256);
    var green = Math.floor(Math.random() * 256);
    element.style.backgroundColor =
        "rgb(" + red + ", " + green + ", " + blue + ")";
}

element.addEventListener("mousedown", changeColor);
element.addEventListener("mouseup", changeColor);
