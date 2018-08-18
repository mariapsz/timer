var shouldWork = false;
var ds = 0;
var s = 0;
var min = 0;

function countTimeDown() {
    
    if (shouldWork) {
        ds++;
        document.getElementById("timer").innerText = createNotation();
        setTimeout(function(){countTimeDown(ds)}, 100);
    }
}

function createNotation() {
    if (ds == 10) {
        s++;
        ds = 0;
    }
    if (s == 60) {
        min++;
        s = 0;
    }
    if (min == 59) {
        shouldWork = false;
    }
    //add '0' before if number < 10
    if (min < 10) {
        if (s < 10){
            if (ds < 10)
                return '0' + min + ':' + '0' + s + ':' + '0' + ds;
            
            return '0' + min + ':' + '0' + s + ':' + ds;
        }
        if (ds < 10)
            return '0' + min + ':' + s + ':' + '0' + ds;
            
        return '0' + min + ':' + s + ':' + ds;
    }
    return min + ':' + s + ':' + ds;
 }

function stop() {
   shouldWork = false;
}

function start() {
   if (shouldWork == false) {
       shouldWork = true;
       countTimeDown();
    }
}

function reset() {
    shouldWork = false;
    min = 0;
    s = 0;
    ds = 0;
    document.getElementById('timer').innerHTML = createNotation();
    document.getElementById('placeForSplittedTime').innerText = '';
}

function split() {
    var currentTime = document.getElementById('timer').innerText;
    document.getElementById('placeForSplittedTime').innerText += '\n\r'+ currentTime;
}