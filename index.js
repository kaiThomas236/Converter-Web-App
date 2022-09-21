
// sections
var base = document.getElementById("base");
var temperature = document.getElementById("temperature");
var mass = document.getElementById("mass");
var planet = document.getElementById("planet");
var length = document.getElementById("length");
var currency = document.getElementById("currency");


// results boxes (edit the innerHTML)
var baseResult = base.querySelectorAll("output")[0];
var temperatureResult = temperature.querySelectorAll("output")[0];
var massResult = mass.querySelectorAll("output")[0];
var planetResult = planet.querySelectorAll("output")[0];
var lengthResult = length.querySelectorAll("output")[0];
var currencyResult = currency.querySelectorAll("output")[0];


//click listeners
temperature.getElementsByClassName("convert")[0].addEventListener("click", () => { handleTemperature() });
length.getElementsByClassName("convert")[0].addEventListener("click", () => { handleLength() });
base.getElementsByClassName("convert")[0].addEventListener("click", () => { handleBase() });
mass.getElementsByClassName("convert")[0].addEventListener("click", () => { handleMass() });
planet.getElementsByClassName("convert")[0].addEventListener("click", () => { handlePlanet() });




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
        temperatureResult.innerHTML = Math.round((conversionFormulas[conversion]) * 1000) / 1000;
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


function handleBase() {
    var baseFrom = base.querySelectorAll(".dropdown")[0].value;
    var baseTo = base.querySelectorAll(".dropdown")[1].value;
    var input = base.querySelectorAll("input")[0].value;
    var dec;
    
    if ((baseFrom === "-- select unit --") || (baseTo === "-- select unit --")) {
        baseResult.innerHTML = "Please select bases and try again."
    }
    else if (baseFrom === baseTo) {
        baseResult.innerHTML = input;
    }
    else {
        
        dec = parseInt(String(input), baseFrom);
        output = dec.toString(baseTo);
        baseResult.innerHTML = (output.toUpperCase());
    }
}

function handleMass() {
    var unitFrom = mass.querySelectorAll(".dropdown")[0].value;
    var unitTo = mass.querySelectorAll(".dropdown")[1].value;
    var input = mass.querySelectorAll("input")[0].value;
    var conversionFormulas = {
        "gram-gram": input, "gram-kilogram": input / 1000, "gram-pound": input / 453.6, "gram-milligram": input * 1000, "gram-ounce": input / 28.35, "gram-stone": input / 6350, "gram-tonne": input / 1000000, "gram-UK Ton": input / 1016046.91, "gram-US Ton": input / 907185,
        "kilogram-gram": input * 1000, "kilogram-kilogram": input, "kilogram-pound": input * 2.20462, "kilogram-milligram": input * 1000000, "kilogram-ounce": input * 35.274, "kilogram-stone": input / 6.35, "kilogram-tonne": input / 1000, "kilogram-UK Ton": input / 1016, "kilogram-US Ton": input / 907.2,
        "pound-gram": input * 453.592, "pound-kilogram": input * 0.453592, "pound-pound": input, "pound-milligram": input * 453592, "pound-ounce": input * 16, "pound-stone": input / 14, "pound-tonne": input * 0.000453592, "pound-UK Ton": input / 2240, "pound-US Ton": input / 2000,
        "milligram-gram": input / 1000, "milligram-kilogram": input / 1000000, "milligram-pound": input / 453600, "milligram-milligram": input, "milligram-ounce": input / 28350, "milligram-stone": input / 6350293.18, "milligram-tonne": input * 0.000000001, "milligram-UK Ton": input * 0.00000000098, "milligram-US Ton": input / 907184740,
        "ounce-gram": input * 28.3495, "ounce-kilogram": input / 35.274, "ounce-pound": input / 16, "ounce-milligram": input * 28349.5, "ounce-ounce": input, "ounce-stone": input / 224, "ounce-tonne": input / 35270, "ounce-UK Ton": input / 35840, "ounce-US Ton": input / 32000,
        "stone-gram": input * 6350.29, "stone-kilogram": input * 6.35, "stone-pound": input * 14, "stone-milligram": input * 6350293.18, "stone-ounce": input * 224, "stone-stone": input, "stone-tonne": input / 157.5, "stone-UK Ton": input / 160, "stone-US Ton": input / 142.9,
        "tonne-gram": input * 1000000, "tonne-kilogram": input * 1000, "tonne-pound": input * 2204.62, "tonne-milligram": input * 1000000000, "tonne-ounce": input * 35274, "tonne-stone": input * 157.473, "tonne-tonne": input, "tonne-UK Ton": input / 1.016, "tonne-US Ton": input * 1.102,
        "UK Ton-gram": input *  1016046.91, "UK Ton-kilogram": input * 1016.05, "UK Ton-pound": input * 2240, "UK Ton-milligram": input * 1016046909, "UK Ton-ounce": input * 35840, "UK Ton-stone": input * 160, "UK Ton-tonne": input * 1.016, "UK Ton-UK Ton": input, "UK Ton-US Ton": input * 1.12,
        "US Ton-gram": input * 907185, "US Ton-kilogram": input * 907.185, "US Ton-pound": input * 2000, "US Ton-milligram": input * 907185003.0836, "US Ton-ounce": input * 32000, "US Ton-stone": input * 142.857, "US Ton-tonne": input * 1.102, "US Ton-UK Ton": input / 1.12, "US Ton-US Ton": input
    }

    if ((unitFrom === "-- select unit --") || (unitTo === "-- select unit --")) {
        massResult.innerHTML = "Please select units and try again.";
    }
    else {
        conversion = unitFrom + "-" + unitTo;
        massResult.innerHTML = Math.round((conversionFormulas[conversion]) * 1000000) / 1000000;
    }
}

function handlePlanet() {
    var unitFrom = planet.querySelectorAll(".dropdown")[0].value;
    var planetTo = planet.querySelectorAll(".dropdown")[1].value;
    var input = planet.querySelectorAll("input")[0].value;

    var conversionFormulas = {
        "Mercury": input * 0.38,
        "Venus": input * 0.91,
        "Earth": input,
        "Mars": input * 0.38,
        "Jupiter": input * 2.53,
        "Saturn": input * 1.07,
        "Uranus": input * 0.89,
        "Neptune": input * 1.14
    }
    if ((unitFrom === "") || (planetTo === "-- select planet --")) {
        planetResult.innerHTML = "Please select and try again.";
    }
    else {
        if ((conversionFormulas[planetTo] === 1) || (unitFrom === "stone")) {
            planetResult.innerHTML = ((Math.round((conversionFormulas[planetTo]) * 1000000) / 1000000), unitFrom);
            
        }
        else {
            planetResult.innerHTML = ((Math.round((conversionFormulas[planetTo]) * 1000000) / 1000000)+" "+unitFrom + "s");
        }
        
    }

}


