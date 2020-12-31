var saved = localStorage.getItem('savedTime');
var logTime = document.querySelector("#logTimeButton");
var logArea = document.querySelector("#logArea");
var clear = document.querySelector("#clear");
var moonbound = document.querySelector("#moonboundArea");
var xbtn = document.querySelector("#xbtn");

if (saved) {
    logArea.innerHTML += saved;
};

let monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
let dateNew = new Date();
let year = dateNew.getFullYear();
let month = monthNames[dateNew.getMonth()];
let date = dateNew.getDate();
let hours = dateNew.getHours() < 10 ? "0" + dateNew.getHours() : "" + dateNew.getHours();
let minutes = dateNew.getMinutes() < 10 ? "0" + dateNew.getMinutes() : "" + dateNew.getMinutes();
let seconds = dateNew.getSeconds() < 10 ? "0" + dateNew.getSeconds() : "" + dateNew.getSeconds();

/*
logTime.addEventListener("click", function() {
    logArea.innerHTML += hours + ":" + minutes + ":" + seconds + " // " + date + "-" + month + "-" + year +
    '<button class="btn btn-danger xbtn" id="xbtn"><i class="fas fa-times"></i></button>' + '<br>';
    
});
*/

$(document).ready(function() {
    let maxFields = 99999999; //Maximum allowed input fields
    let x = 1; //Initial input field is set to 1

    //When user click on add input button
    $(logTime).click(function(e) {
        e.preventDefault();
        //Check maximum allowed input fields
        if (x < maxFields) {
            x++; //input field increment
            //add input field
            $(logArea).append('<div>' + hours + ":" + minutes + ":" + seconds + " // " + date + "-" + month + "-" + year + '<button class="btn btn-danger xbtn remove_field" id="xbtn"><i class="fas fa-times"></i></button>' + '</div><br>');
            localStorage.setItem('savedTime', logArea.innerHTML);
        }
    });

    //when user click on remove button
    $(logArea).on("click", ".remove_field", function(e) {
        e.preventDefault();
        $(this).parent('div').remove(); //remove inout field
        x--; //input field decrement
        localStorage.setItem('savedTime', logArea.innerHTML);
    })
});

clear.addEventListener("click", function() {
    logArea.innerHTML = "";
});

moonbound.addEventListener("click", function() {
    document.body.classList.toggle("light-mode");
});