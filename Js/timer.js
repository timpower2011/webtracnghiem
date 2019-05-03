// import { start } from "repl";

//const {start} = require('reql');

function startTimer(duration, display) {
	  var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            timer = duration;
        }
    }, 1000)
}

$(document).ready(function() {
    console.log( "ready!" );
    var fiveMinutes = 60 * 5,
    display = document.querySelector('#time1');
    startTimer(fiveMinutes, display);
});


// xử lí sự kiện 

function tinhtime() {
    window.location="../HTML/BatDauThi.html";
}


function clickTest() {
    let diem = 0;
    let anwser = [];
    for (let i=1; i<11; i++) {
        // anwser.push($('input[name="optradio'+i+'"]:checked').parent('label').text())
        anwser.push($('input[name="optradio'+i+'"]:checked').val())
    }
    for (let a of anwser) {
        if (a && a=="true") {
            diem++;
        }
    }
    // localStorage.setItem('mark', JSON.stringify(diem));
    var users = JSON.parse(localStorage.getItem('users'));
    var current_user = JSON.parse(localStorage.getItem('current_user'));
    for (let user of users) {
        if (current_user.stt == user.stt) {
            user.mark = diem;
        }
    }
    localStorage.setItem('users', JSON.stringify(users));
    var result = confirm(`Điểm của bạn là :${diem}`);
if (result == true) {
  window.location.href="../HTML/TrangChu.html";
}
 else {
   alert("Cảm ơn đã ở lại!");
   window.location.href="../HTML/TrangChu.html";
      //console.log("cau 1: ",anwser)
     // console.log("diem: ", diem)
 }
    

}
