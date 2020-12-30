var saved = localStorage.getItem('savedTime');
var logTime = document.querySelector("#logTimeButton");
var logArea = document.querySelector("#logArea");
var clear = document.querySelector("#clear")

if (saved) {
    logArea.innerHTML += saved;
}

logTime.addEventListener("click", function() {;
    logArea.innerHTML += Date() + '<br>';
    localStorage.setItem('savedTime', logArea.innerHTML);  
});

clear.addEventListener("click", function() {
    logArea.innerHTML = "";
});