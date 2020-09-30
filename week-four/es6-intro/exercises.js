//////////////////////////////////////////////////////////Question 1

function reverseArray(arg) {
    return [...arg].reverse();
}
reverseArr([1, 2, 3]); // returns [3,2,1]

//or using arrow functions
let reverseArr = (arg) => {
    return [...arg].reverse();
};

reverseArray([1, 2, 3]); // returns [3,2,1]

//////////////////////////////////////////////////////////Question 2
let compileArrays = (arr1, arr2) => {
    return [...arr1, ...arr2];
};

compileArrays([1, 2, 3], [4, 5, 6]);

////////////////////////////////////////////////////////// Question 3
const city = {
    name: "Berlin",
    country: "Germany",
    population: 100,
};

function logInfo(arg) {
    const { name, country, population: numPeople } = arg;
    console.log(`${name} is in ${country} and has ${numPeople} in it.`);
}

logInfo(city);

////////////////////////////////////////////////////////// Question 4

//part 1 // finished
function getNameAndCountry(obj) {
    return [obj.name, obj.country];
}

var place = {
    name: "tirana",
    country: "albania",
};

getNameAndCountry(place); // returns ["tirana", "albania"]

//part 2 // unfinished
let getRelocatedCity = (city1, city2 = { country: "Germany" }) => {
    let [, country] = getNameAndCountry(city2);
    return {
        ...city1,
        country,
    };
};

function getRelocatedCity(arg1, arg2) {
    if (arg2) {
        if ((city1.country = [city2.name, city2.country]));
    } else {
    }
}

getNameAndCountry(city2);
{
    return [city2.name, city2.country];
}
