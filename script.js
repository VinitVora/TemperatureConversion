function convertTemperature(event) {
    event.preventDefault(); // Prevent the default form submission behavior
    const inputTemperature = parseFloat(document.getElementById("inputTemperature").value);
    const conversionType = document.getElementById("conversionType").value;
    let result = "";

    if (conversionType === "celsiusToFahrenheit") {
        result = `${inputTemperature}°C is ${(inputTemperature * 9/5 + 32).toFixed(2)}°F`;
    } 

    else if (conversionType === "fahrenheitToCelsius") {
        result = `${inputTemperature}°F is ${((inputTemperature - 32) * 5/9).toFixed(2)}°C`;
    } 

    else if (conversionType === "celsiusToKelvin") {
        result = `${inputTemperature}°C is ${(inputTemperature + 273.15).toFixed(2)}K`;
    }
    
    else if (conversionType === "kelvinToCelsius") {
        result = `${inputTemperature}K is ${(inputTemperature - 273.15).toFixed(2)}°C`;
    }

    document.getElementById("result").textContent = result;
}

// Add an event listener to the form element
document.querySelector("form").addEventListener("submit", convertTemperature);

