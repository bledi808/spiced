(function (countries) {
    var searchField = $("input");
    var displayResults = $(".results");
    // var i = 0;

    // input
    searchField.on("input", function () {
        var userInput = searchField.val().toLowerCase();
        var results = [];
        for (var i = 0; i < countries.length; i++) {
            if (countries[i].toLowerCase().indexOf(userInput) == 0) {
                results.push(countries[i]);
            }
            if (results.length === 4) {
                break;
            }
        }
        var htmlForCountries = "";
        for (i = 0; i < results.length; i++) {
            htmlForCountries += "<p class='country'>" + results[i] + "</p>";
            displayResults.html(htmlForCountries);
            displayResults.css({
                width: "23vw",
                fontSize: "16px",
                cursorType: "default",
                color: "black",
                fontStyle: "Arial",
            });
        }
        //handles case for when input is cleared, results are cleared
        if (userInput.length == 0) {
            displayResults.hide();
        } else {
            displayResults.show();
        }
        //handles case of no matching results but there is user input
        var htmlForNoResults = "<p>" + "No countries found!" + "</p>";
        if (results.length === 0 && userInput.length !== 0) {
            displayResults.html(htmlForNoResults);
            displayResults.css({
                color: "slategrey",
            });
        }
    });

    searchField.on("input", function () {});

    // blur listener
    searchField.on("blur", function () {
        displayResults.hide();
    });

    //focus listener
    searchField.on("focus", function () {
        displayResults.show();
    });

    // mouseover, using event delegation
    displayResults.on("mouseover", ".country", function (e) {
        $(".highlight").removeClass("highlight");
        $(e.target).addClass("highlight");
    });

    // mousedown, using event delegation
    displayResults.on("mousedown", ".country", function () {
        searchField.val($(".highlight").text());
    });

    // searchField.on("keydown", function (e) {
    //     if (e.keyCode === 40) {
    //         $(".highlight").removeClass("highlight");
    //         $("p").eq(i).addClass("highlight");
    //         i++;
    //         console.log(i);
    //     }
    //     if (i === 4) {
    //         i = 0;
    //     }
    // });

    searchField.on("keydown", function (e) {
        var isHighlighted = $(".highlight");
        var country = $(".country");
        //when down arrow is pressed, navigate through the results downwards
        if (e.which === 40) {
            if (
                isHighlighted.length === 0 ||
                country.last().hasClass("highlight")
            ) {
                country.first().addClass("highlight");
            }
            if (isHighlighted.length != 0) {
                isHighlighted.next().addClass("highlight");
                isHighlighted.removeClass("highlight");
            }
        }
        //when up arrow is pressed, navigate through the results upwards
        if (e.which === 38) {
            if (
                isHighlighted.length === 0 ||
                country.first().hasClass("highlight")
            ) {
                country.last().addClass("highlight");
            }
            if (isHighlighted.length != 0) {
                isHighlighted.prev().addClass("highlight");
                isHighlighted.removeClass("highlight");
            }
        }
        //when enter key is pressed, populate input field with highlighted value unless it is "No countries found"
        if (e.keyCode === 13 && $("p").hasClass("country")) {
            searchField.val($(".highlight").text());
        }
    });
})([
    "Afghanistan",
    "Albania",
    "Algeria",
    "Andorra",
    "Angola",
    "Antigua and Barbuda",
    "Argentina",
    "Armenia",
    "Australia",
    "Austria",
    "Azerbaijan",
    "Bahamas",
    "Bahrain",
    "Bangladesh",
    "Barbados",
    "Belarus",
    "Belgium",
    "Belize",
    "Benin",
    "Bhutan",
    "Bolivia",
    "Bosnia and Herzegovina",
    "Botswana",
    "Brazil",
    "Brunei Darussalam",
    "Bulgaria",
    "Burkina Faso",
    "Burundi",
    "Cabo Verde",
    "Cambodia",
    "Cameroon",
    "Canada",
    "Central African Republic",
    "Chad",
    "Chile",
    "China",
    "Colombia",
    "Comoros",
    "Congo",
    "Costa Rica",
    "Côte D'Ivoire",
    "Croatia",
    "Cuba",
    "Cyprus",
    "Czech Republic",
    "Democratic People's Republic of Korea",
    "Democratic Republic of the Congo",
    "Denmark",
    "Djibouti",
    "Dominica",
    "Dominican Republic",
    "Ecuador",
    "Egypt",
    "El Salvador",
    "Equatorial Guinea",
    "Eritrea",
    "Estonia",
    "Eswatini",
    "Ethiopia",
    "Fiji",
    "Finland",
    "France",
    "Gabon",
    "Gambia",
    "Georgia",
    "Germany",
    "Ghana",
    "Greece",
    "Grenada",
    "Guatemala",
    "Guinea",
    "Guinea Bissau",
    "Guyana",
    "Haiti",
    "Honduras",
    "Hungary",
    "Iceland",
    "India",
    "Indonesia",
    "Iran",
    "Iraq",
    "Ireland",
    "Israel",
    "Italy",
    "Jamaica",
    "Japan",
    "Jordan",
    "Kazakhstan",
    "Kenya",
    "Kiribati",
    "Kuwait",
    "Kyrgyzstan",
    "Lao People’s Democratic Republic",
    "Latvia",
    "Lebanon",
    "Lesotho",
    "Liberia",
    "Libya",
    "Liechtenstein",
    "Lithuania",
    "Luxembourg",
    "Madagascar",
    "Malawi",
    "Malaysia",
    "Maldives",
    "Mali",
    "Malta",
    "Marshall Islands",
    "Mauritania",
    "Mauritius",
    "Mexico",
    "Micronesia",
    "Monaco",
    "Mongolia",
    "Montenegro",
    "Morocco",
    "Mozambique",
    "Myanmar",
    "Namibia",
    "Nauru",
    "Nepal",
    "Netherlands",
    "New Zealand",
    "Nicaragua",
    "Niger",
    "Nigeria",
    "North Macedonia",
    "Norway",
    "Oman",
    "Pakistan",
    "Palau",
    "Panama",
    "Papua New Guinea",
    "Paraguay",
    "Peru",
    "Philippines",
    "Poland",
    "Portugal",
    "Qatar",
    "Republic of Korea",
    "Republic of Moldova",
    "Romania",
    "Russian Federation",
    "Rwanda",
    "Saint Kitts and Nevis",
    "Saint Lucia",
    "Saint Vincent and the Grenadines",
    "Samoa",
    "San Marino",
    "Sao Tome and Principe",
    "Saudi Arabia",
    "Senegal",
    "Serbia",
    "Seychelles",
    "Sierra Leone",
    "Singapore",
    "Slovakia",
    "Slovenia",
    "Solomon Islands",
    "Somalia",
    "South Africa",
    "South Sudan",
    "Spain",
    "Sri Lanka",
    "Sudan",
    "Suriname",
    "Sweden",
    "Switzerland",
    "Syrian Arab Republic",
    "Tajikistan",
    "Thailand",
    "Timor-Leste",
    "Togo",
    "Tonga",
    "Trinidad and Tobago",
    "Tunisia",
    "Turkey",
    "Turkmenistan",
    "Tuvalu",
    "Uganda",
    "Ukraine",
    "United Arab Emirates",
    "United Kingdom",
    "United Republic of Tanzania",
    "United States of America",
    "Uruguay",
    "Uzbekistan",
    "Vanuatu",
    "Venezuela",
    "Viet Nam",
    "Yemen",
    "Zambia",
    "Zimbabwe",
]);
