

function countTimeDown(deciseconds = 0) {
    
    if(document.getElementById("ifShouldWorks").innerText.includes('true')){
    var ds = deciseconds;
    ds++;
    document.getElementById("timer").innerHTML = createNotation(deciseconds);

    setTimeout(function(){countTimeDown(ds)}, 100);
    }
}
 function createNotation(deciseconds) {
    var sek = Math.floor(deciseconds/10);
    deciseconds %= 10;
    var min = 0;

    if(sek >= 60) {
        min = Math.floor(sek/60);
        sek %= 60;
    } 
    return min + ':' + sek + ':' + deciseconds;
 }

 function stop() {
    var temp = document.getElementById('timer').innerText;
    document.getElementById("ifShouldWorks").innerText = 'false';
    console.log('stop');
}

 function reset() {
    document.getElementById('timer').innerHTML = '00:00:00';
    console.log('reset');
 }

