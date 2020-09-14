// Question 1

function changeElements(str) {
    var elements = document.querySelectorAll(str);
    for (var i = 0; i < elements.length; i++) {
        elements[i].style.fontStyle = "italic";
        elements[i].style.textDecoration = "underline";
        elements[i].style.fontStyle = "bold";
    }
    return elements;
}

changeElements("");

//Question 2

function returnClasses(str) {
    var classesArray = document.getElementsByClassName(str);
    return classesArray;
}

returnClasses("");

// Question 3

function insertElement(str) {
    var newElement = document.createElement(str);
    var content = document.createTextNode("AwSoMe");

    document.body.append(newElement);
    newElement.appendChild(content);

    newElement.style.position = "fixed";
    newElement.style.zIndex = "2147483647";
    newElement.style.left = "20px";
    newElement.style.top = "100px";
    newElement.style.fontSize = "200px";
}

insertElement("h1");
