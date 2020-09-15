//DOM Events Exercise 1

var element = document.getElementById("element");

element.style.width = "100px";
element.style.height = "100px";
element.style.position = "absolute";
element.style.backgroundColor = "dimgrey";

document.addEventListener("mousemove", function (e) {
    // centres box directly under the mouse's pointer
    // approach: determine how to read screen coordinates property of mouse pointer and set these coordinates = element...
    var x = e.offsetX; // console.log("x: ", x);
    var y = e.offsetY; // console.log("y: ", y);
    element.style.left = x - 50 + "px"; //console.log("element x: ", element.style.left);
    element.style.top = y + "px"; // console.log("element y: ", element.style.top);
});
