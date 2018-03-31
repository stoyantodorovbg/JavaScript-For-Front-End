function timer() {
    let interval
    $('#start-timer').click(function () {
         interval = setInterval(function(){
             let seconds = $('#seconds').text();
             let minutes = $('#minutes').text();
             let hours = $('#hours').text();
             seconds = parseInt(seconds);
             minutes = parseInt(minutes);
             hours = parseInt(hours);
             let timeArr = step(hours, minutes, seconds)
             $('#hours').text(timeArr[0]);
             $('#minutes').text(timeArr[1]);
             $('#seconds').text(timeArr[2]);
             }, 0.000000001);
    });

    $('#stop-timer').click(function () {
        clearInterval(interval);
    })
}

function step(hours, minutes, seconds) {
    hours = parseInt(hours);
    minutes = parseInt(minutes);
    seconds = parseInt(seconds);

    if (seconds < 59) {
        seconds++;
    } else {
        seconds = 0;
        if (minutes < 59) {
            minutes++;
        } else {
            minutes = 0;
            if (hours < 24) {
                hours++;
            } else {
                hours = 0;
            }
        }
    }

    if (seconds < 10) {
        seconds = '0' + seconds;
    }

    if (minutes < 10) {
        minutes = '0' + minutes;
    }

    if (hours < 10) {
        hours = '0' + hours;
    }

    return [hours, minutes, seconds];
}

