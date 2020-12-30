var saved = localStorage.getItem('savedTime');

    if (saved) {
    document.body.innerHTML = saved;
}

var logTime = document.querySelector("#logTimeButton")

logTime.addEventListener('click', function (event) {
    
    document.body.innerHTML += Date() + '<br>';

    localStorage.setItem('savedTime', document.body.innerHTML);
    
});