var saved = localStorage.getItem('savedTime');
var logTime = document.querySelector("#logTimeButton");
var logArea = document.querySelector("#logArea");
var clear = document.querySelector("#clear");
var moonbound = document.querySelector("#moonboundArea");
var xbtn = document.querySelector("#xbtn");

if (saved) {
    logArea.innerHTML += saved;
};

/*
logTime.addEventListener("click", function() {
    logArea.innerHTML += hours + ":" + minutes + ":" + seconds + " // " + date + "-" + month + "-" + year +
    '<button class="btn btn-danger xbtn" id="xbtn"><i class="fas fa-times"></i></button>' + '<br>';
});
*/

$(document).ready(function() {
let maxFields = 99999999;
let x = 1;

    $(logTime).click(function(e) {
        let monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        let dateNew = new Date();
        let year = dateNew.getFullYear();
        let month = monthNames[dateNew.getMonth()];
        let date = dateNew.getDate();
        let hours = dateNew.getHours() < 10 ? "0" + dateNew.getHours() : "" + dateNew.getHours();
        let minutes = dateNew.getMinutes() < 10 ? "0" + dateNew.getMinutes() : "" + dateNew.getMinutes();
        let seconds = dateNew.getSeconds() < 10 ? "0" + dateNew.getSeconds() : "" + dateNew.getSeconds();
        e.preventDefault();
        if (x < maxFields) {
            x++;
            $(logArea).append('<div>' + hours + ":" + minutes + ":" + seconds + " | " + date + "-" + month + "-" + year + '<button class="btn btn-danger xbtn remove_field" id="xbtn"><i class="fas fa-times"></i></button>' + '</div>');
            localStorage.setItem('savedTime', logArea.innerHTML);
        };
    });

    $(logArea).on("click", ".remove_field", function(e) {
        e.preventDefault();
        $(this).parent('div').remove();
        x--;
        localStorage.setItem('savedTime', logArea.innerHTML);
    });
});

clear.addEventListener("click", function() {
    logArea.innerHTML = "";
});

moonbound.addEventListener("click", function() {
    document.body.classList.toggle("light-mode");
});