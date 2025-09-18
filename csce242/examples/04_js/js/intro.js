/* var, let, const  -   variables 
var is obsolete 
const by default, let if need be
*/

/* functions come first
function sayHello() {
    console.log("hello world");
} */

/* const sayHello = () => {
    console.log("hello world");
} 
document.getElementById("btn-click-me").onclick = sayHello; // if sayHello(), the function would be called immediately. remove parantheses to make it call upon click
*/

document.getElementById("btn-click-me").onclick = (event) => {
    document.getElementById("p-welcome").innerHTML = "Hello World";
    event.currentTarget.classList.add("clicked"); // current target is the button that was clicked
};

document.getElementById("btn-happy").onclick = () => {
    const pFeeling = document.getElementById("p-feeling");
    pFeeling.innerHTML = "yay";
    pFeeling.classList.add("happy");
    pFeeling.classList.remove("sad");
};

document.getElementById("btn-sad").onclick = () => {
    const pFeeling = document.getElementById("p-feeling");
    pFeeling.innerHTML = "nay";
    pFeeling.classList.add("sad");
    pFeeling.classList.remove("happy");
};

document.getElementById("btn-clear").onclick = () => {
    const pFeeling = document.getElementById("p-feeling");
    pFeeling.innerHTML = "";
    pFeeling.classList.remove("sad");
    pFeeling.classList.remove("happy");
};

document.getElementById("txt-emotion").onkeyup = (event) => {
    const userInput = event.currentTarget.value;
    document.getElementById("p-emotion").innerHTML = `You are feeling ${userInput}.`;
    document.getElementById("img-emotion").classList.remove("hidden");
};

document.getElementById("btn-mood-ring").onclick = () => {
    const color = document.getElementById("txt-color").value.trim().toLowerCase();
    const p = document.getElementById("p-mood-result");
    const error = document.getElementById("error-color");
    error.innerHTML = ""; //reset error
    let mood = "";
    
    if(color == "") {
        document.getElementById("error-color").innerHTML = "*blank";
        return;
    }

    /*if(color == "red") {
        p.innerHTML = "you are ANGRY";
        return;
    }

    else if(color == "blue") {
        p.innerHTML = "you are SAD";
        return;
    }

    else {
        p.innerHTML = "that is NOT a color!!!"
    }*/

    if(color == "red") {
        mood = "angry";
    }

    else if(color == "yellow") {
        mood = "mellow";
    }

    if(mood == "") {
        error.innerHTML = "*Invalid Color"
        return;
    }

    p.innerHTML = `You chose ${color}, so you are feeling ${mood}`;
};

document.getElementById("btn-bounce").onclick = (event) => {
    const ball = document.getElementById("ball");
    if(ball.classList.contains("bounce")) {
        event.currentTarget.innnerHTML = "Start";
    }
    else {
        event.currentTarget.innerHTML = "Stop";
    }
    ball.classList.toggle("bounce"); 
}