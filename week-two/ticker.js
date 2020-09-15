// Store a reference to the element containing the links in a variable
var headlines = document.getElementById("headlines");
// console.log(headlines);

// Store the current left position in a variable
var left = headlines.offsetLeft;
// console.log(left);

//Store the list of links in a variable
var links = document.getElementsByTagName("a");
// console.log("links: ", links);

// main animation function
tickerTape();

function tickerTape() {
    left--;
    headlines.style.left = left + "px";
    if (left <= -links[0].offsetWidth) {
        left += links[0].offsetWidth;
        headlines.appendChild(links[0]);
    }
    animId = requestAnimationFrame(tickerTape);
}

//Part 2

for (var i = 0; i < links.length; i++) {
    links[i].addEventListener("mouseenter", function (e) {
        cancelAnimationFrame(animId);
        e.target.style.color = "blue";
        e.target.style.textDecoration = "underline";
    });
    links[i].addEventListener("mouseleave", function (e) {
        requestAnimationFrame(tickerTape);
        e.target.style = "window.getComputedStyle(links[0])";
    });
}
