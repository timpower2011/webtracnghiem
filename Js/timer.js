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


$(function(){
    let i = 0;
    $('input[type="radio"]').click(function(){
        i++;
      if ($(this).is(':checked'))
      {
        // alert($(this).val());
        console.log($("input[name='optradio1']:checked").val())

      }
    });
  });
function clickTest() {
    // console.log("ssdsdsd")
    // document.getElementById("test1").submit();
    
}
