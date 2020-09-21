var container = $("#container");
// console.log("conatiner:", container);

var slider = $("#slider");
// console.log("slider:", slider);

var resizableImage = $("#resizable-image");
// console.log("resizeable:", resizableImage);

//main slider function

slider.on("mousedown", function () {
    container.on("mousemove", function moveSlider(e) {
        $(document).on("mouseup", function () {
            container.off("mousemove", moveSlider);
        });
        var x = e.offsetX;
        console.log("left:", x);
        slider.css({
            left: x,
            cursor: "col-resize",
            transform: "translateX(-50%)",
        });
        if (x < 777) {
            resizableImage.css({
                width: x - 8, //slider.outerWidth(),
            });
        }
    });
});

// slider.on("mousemove", function (e) {
//     e.stopPropogation();
// });
