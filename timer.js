

function countTimeDown(minutes = 0, seconds = 0, miliseconds = 0) {
    minutes++;
    seconds++;
    miliseconds++;
    
    var time = minutes + ":" + seconds + ":" + milliseconds;
    document.getElementById("1234").innerHTML = time;
    setTimeout("countTimeDown(minutes, seconds, miliseconds)", 10);
}