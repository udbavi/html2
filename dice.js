var dice;
var dices = [1,3,5,7,9,];
var stopped = true;
var t;

function change(){
    var random = Math.floor(Math.random()*6);
    dice.innerHTML = dices[random];
}

function stopstart(){
if (stopped ){
stopped = false;
t = setInterval(change,100);

} else {
    clearInterval(t);
    stopped = true;
}
}
window.onload = function(){
    dice = document.getElementById("dice");
    stopstart();
}