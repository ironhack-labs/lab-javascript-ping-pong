//function Paddle(x,y) {
//}
//Paddle.prototype.restart = function(){
//};

//Paddle.prototype.hitBall = function(ball_y){
//};


//var paddle1 = document.getElementById("player1");

//function moveDown(){

//}
window.onload = function() {

    var player1 = document.getElementById('player-paddle');

    window.onkeydown = function(e) {
        var keycode;
        if (e.which) {
            keycode = e.which;
        } else {
            keycode = e.keyCode;
        }
        var speed = 2;
        if (keycode === 40) {
            debugger
            player1.style.top = (parseInt(player1.style.top)) - speed + "px";
        } else if(keycode === 38) {
            player1.style.top = (parseInt(player1.style.top)) + speed + "px";
        }

    };
    window.onkeyup = function(e) {

        var player1 = document.getElementById('player-paddle');
        var keycode;
        if (e.which) {
            keycode = e.which;
        } else {
            keycode = e.keyCode;
        }
        var speed = 2;
        if (keycode == 40) {
            player1.style.top = (parseInt(player1.style.top)) - speed + "px";
        } else if(keycode == 38) {
            player1.style.top = (parseInt(player1.style.top)) + speed + "px";
        }

    };
};
