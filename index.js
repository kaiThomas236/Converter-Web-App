
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
length.getElementsByClassName("convert")[0].addEventListener("click", () => { handleLength() });



function handleTemperature () {
    var unitFrom = temperature.querySelectorAll(".dropdown")[0].value;
    var unitTo = temperature.querySelectorAll(".dropdown")[1].value;
    var input = temperature.querySelectorAll("input")[0].value;
    var conversionFormulas = { // did you know that dictionaries could have executable, variale dependent equations as their value? cause I did not :D
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


function handleLength() {
    var unitFrom = length.querySelectorAll(".dropdown")[0].value;
    var unitTo = length.querySelectorAll(".dropdown")[1].value;
    var input = length.querySelectorAll("input")[0].value;
    var conversionFormulas = {
        "mile-mile": input, "mile-yard": input * 1760, "mile-foot": input * 5280, "mile-inch": input * 63360, "mile-kilometer": input * 1.6093399999754900431, "mile-meter": input * 1609.3399999754899454, "mile-centimeter": input * 160933.999997549, "mile-millimeter": input * 1609339.9999754899181,
        "yard-mile": input / 1760, "yard-yard": input, "yard-foot": input * 3, "yard-inch": input * 36, "yard-kilometer": input * 0.000914400292608, "yard-meter": input * 0.91440029260800004263, "yard-centimeter": input * 91.44002926080000293, "yard-millimeter": input * 914.40029260799997246,
        "foot-mile": input / 5280, "foot-yard": input / 3, "foot-foot": input, "foot-inch": input * 12, "foot-kilometer": input * 0.0003048, "foot-meter": input * 0.3048, "foot-centimeter": input * 30.48, "foot-millimeter": input * 304.8,
        "inch-mile": input / 63360, "inch-yard": input / 36, "inch-foot": input / 12, "inch-inch": input, "inch-kilometer": input / 39370, "inch-meter": input / 39.37, "inch-centimeter": input * 2.54, "inch-millimeter": input * 25.4,
        "kilometer-mile": input / 1.609, "kilometer-yard": input * 1093.61, "kilometer-foot": input * 3280.83, "kilometer-inch": input * 39370.1, "kilometer-kilometer": input, "kilometer-meter": input * 1000, "kilometer-centimeter": input * 100000, "kilometer-millimeter": input * 1000000,
        "meter-mile": input * 0.000621371, "meter-yard": input * 1.09361296, "meter-foot": input * 3.2808388799999997, "meter-inch": input * 39.370066559999997935, "meter-kilometer": input / 1000, "meter-meter": input, "meter-centimeter": input * 100, "meter-millimeter": input * 1000,
        "centimeter-mile": input / 160900, "centimeter-yard": input / 91.44, "centimeter-foot": input * 0.0328084, "centimeter-inch": input * 0.393701, "centimeter-kilometer": input / 100000, "centimeter-meter": input / 100, "centimeter-centimeter": input, "centimeter-millimeter": input * 10,
        "millimeter-mile": input / 1609344, "millimeter-yard": input / 914.4, "millimeter-foot": input / 304.8, "millimeter-inch": input / 25.4, "millimeter-kilometer": input / 1000000, "millimeter-meter": input / 1000, "millimeter-centimeter": input / 10, "millimeter-millimeter": input
    }

    if ((unitFrom === "-- select unit --") || (unitTo === "-- select unit --")) {
        lengthResult.innerHTML = "Please select units and try again."
    }
    else {
        conversion = unitFrom + "-" + unitTo;
        lengthResult.innerHTML = Math.round((conversionFormulas[conversion]) * 1000000) / 1000000;
    }
}



