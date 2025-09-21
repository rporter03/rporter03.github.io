/* Toggle Nav */
document.getElementById("toggle-nav").onclick = () => {
    const navItems = document.getElementById("nav-items");
    const toggleNav = document.getElementById("toggle-nav");
    if(navItems.classList.contains("show")) {
        navItems.classList.remove("show");
        toggleNav.innerHTML = "▼"
    }
    else {
        navItems.classList.add("show");
        toggleNav.innerHTML = "▲"
    }
}

/* Exercise 1 */
document.getElementById("exercise-1").onclick = () => {
    document.getElementById("exercise-1-content").classList.remove("hide-small");
    document.getElementById("exercise-2-content").classList.add("hide-small");
}

document.getElementById("slider").oninput = () => {
    const days = document.getElementById("slider").value;
    const daysDisplay = document.getElementById("days-display");
    const plantStatus = document.getElementById("plant-status");
    const plantImg = document.getElementById("plant-img");
    daysDisplay.innerHTML = "It's been " + days + " days since watering your plant";

    if(days <= 2) {
        plantStatus.innerHTML = "Your plant is healthy and happy";
        plantImg.src = "images/plant-healthy.png";
    }
    else if(days >= 3 && days <= 5) {
        plantStatus.innerHTML = "Your plant needs watering";
        plantImg.src = "images/plant-thirsty.png";
    }
    else if(days >= 6 && days <= 9) {
        plantStatus.innerHTML = "Leaves are dropping and the color is changing. Water soon";
        plantImg.src = "images/plant-wilting.png";
    }
    else if(days >= 10 && days <= 12) {
        plantStatus.innerHTML = "Sorry, your plant is no longer with us";
        plantImg.src = "images/plant-dead.png";
    }
}

/* Exercise 2 */
document.getElementById("exercise-2").onclick = () => {
    document.getElementById("exercise-2-content").classList.remove("hide-small");
    document.getElementById("exercise-1-content").classList.add("hide-small");
}

setInterval(() => {
    const time = new Date();
    let hour = time.getHours();
    let minute = time.getMinutes();
    let ampm = "am";
    if(hour >= 12) {
        ampm = "pm";
    }
    if(hour > 12) {
        hour = hour - 12;
    }
    if(hour == 0) {
        hour = 12;
    }
    if(minute < 10) {
        minute = "0" + minute;
    }
    document.getElementById("clock").innerHTML = hour + ":" + minute + " " + ampm;
}, 1000);