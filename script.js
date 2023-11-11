document.getElementById("convert").addEventListener("click", function() {
    const temperature = parseFloat(document.getElementById("temperature").value);
    const unit = document.getElementById("unit").value;
    let result = 0;

    if (unit === "celsius") {
        result = (temperature * 9/5) + 32;
    } else if (unit === "fahrenheit") {
        result = (temperature - 32) * 5/9;
    }

    document.getElementById("result").textContent = result.toFixed(2);
});

document.getElementById("reset").addEventListener("click", function() {
    document.getElementById("temperature").value = "";
    document.getElementById("unit").value = "celsius";
    document.getElementById("result").textContent = "0";
});