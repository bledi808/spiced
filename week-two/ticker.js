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
//
function tickerTape() {
    left--;
    headlines.style.left = left + "px";
    if (left <= -links[0].offsetWidth) {
        left += links[0].offsetWidth;
        headlines.appendChild(links[0]);
    }
    requestAnimationFrame(tickerTape);
}

tickerTape();

// (function () {
//     var headlines = document.getElementById("headlines");

//     var left = headlines.offset.AnimationEffect;

//     // moveHeadlines();

//     function moveHeadlines() {
//         left--;
//         // console.log(left);
//         //set the left of headlines to the new left - this line of code will make the animation work

//         if (left <= -links[0].offsetWidth) {

//             left+=links[0].offsetWidth // avoids jumping by movung whole header box to the left by the width of the element gping offscreen
//              append childChild to the bottom list of links
//             // -linksLength = a[i].offsetWidth;
//         }
//         // call this function agauin after a pause
//         requestAnimationFrame(moveHeadlines);
//     }
// })();

// // when left = the negative of the width of the first element, move the link to the bottom of the list of <a>s in html list

// var links = document.getElementById("a");
// a[i].offsetWidth; // tells you the width of an element
