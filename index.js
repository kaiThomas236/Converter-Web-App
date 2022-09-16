
// sections
var base = document.getElementById("base");
var temperature = document.getElementById("temperature");
var mass = document.getElementById("mass");
var length = document.getElementById("length");
var currency = document.getElementById("currency");


// results boxes (edit the innerHTML)
var baseResult = base.querySelectorAll("output")[0];
var temperatureResult = temperature.querySelectorAll("output")[0];
var massResult = mass.querySelectorAll("output")[0];
var lengthResult = length.querySelectorAll("output")[0];
var currencyResult = currency.querySelectorAll("output")[0];


//click listeners
temperature.getElementsByClassName("convert")[0].addEventListener("click", () => { handleTemperature() });




function handleTemperature () {
    var unitFrom = temperature.querySelectorAll(".dropdown")[0].value;
    var unitTo = temperature.querySelectorAll(".dropdown")[1].value;
    var input = temperature.querySelectorAll("input")[0].value;
    var tempConversion = { // did you know that dictionaries could have executable, variale dependent equations as their value? cause I did not :D
        "Fahrenheit-Fahrenheit": input,
        "Fahrenheit-Celsius": (input - 32) * (5 / 9),
        "Fahrenheit-Kelvin": ((input - 32) * (5 / 9)) + 273.15,
        "Celsius-Celsius": input,
        "Celsius-Fahrenheit": (input * (9 / 5) + 32),
        "Celsius-Kelvin": input + 273.15,
        "Kelvin-Kelvin": input,
        "Kelvin-Fahrenheit": (input - 273.15) * (9 / 5) + 32,
        "Kelvin-Celsius": (input - 273.15)
    }

    if ((unitFrom === "-- select unit --") || (unitTo === "-- select unit --")) {
        temperatureResult.innerHTML = "Please select units and try again."
    }
    else {
        conversion = unitFrom+"-"+unitTo;
        temperatureResult.innerHTML = Math.round((tempConversion[conversion]) * 100) / 100;
    }
}



