// Question 1

function Rectangle(width, height) {
    this.getArea = function () {
        return width * height;
    };
}

function Square(num) {
    this.getArea = function () {
        return num * num;
    };
}

var rect = new Rectangle(4, 5);
console.log(rect.getArea());

var square = new Square(4);
console.log(square.getArea());

// Question 2
function invertCase(str) {
    var newString = "";
    for (var i of str) {
        if (i == i.toUpperCase()) {
            newString = newString.concat(i.toLowerCase());
        } else {
            newString = newString.concat(i.toUpperCase());
        }
    }
    return newString;
}

var name = invertCase("rAmBo");
console.log("result: " + name);
