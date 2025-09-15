document.getElementById("sunny").onclick = (event) => {
    const showSun = document.getElementById("sunny");
    showSun.classList.remove("hide-small");
}

document.getElementById("color-picker").onchange = (event) => {
    const selectedColor = event.target.value;
    const colorSample = document.getElementById("color-sample");
    const colorCode = document.getElementById("color-code");
    colorSample.style.color = selectedColor;
    colorCode.textContent = selectedColor;
    colorCode.style.color = selectedColor;
}

document.getElementById("sunny-btn").onclick = (event) => {
    const weatherImg = document.getElementById("weather");
    weatherImg.src = "images/sun.webp";
}