var paddle1 = new Paddle($('#paddle1').position().left, $('#paddle1').position().top, 80);
var paddle2 = new Paddle($('#paddle2').position().left, $('#paddle2').position().top, 80);
var ball = new Ball(500, 300);
var board = new Board(1000, 600, ball, paddle1, paddle2);
var keys = {};

function updateState() {
    checkMenuControls();
    
    if (!board.stopped) {
        board.doGameStep();
        checkPaddleControls();   
    } else {
        board.locateBallAtCenter();
    }
    
    renderGame();
}

function activatePaddle2() {
}

function renderGame() {
    renderBall();
    renderPaddle();
}

function renderScore() {
}

function renderBall() {
    $('#ball').css("left", ball.x);
    $('#ball').css("top",  ball.y);
}

function renderPaddle() {
    $('#paddle1').css("top", paddle1.y);
    $('#paddle2').css("top", paddle2.y);
}

function checkPaddleControls() {
    if (keys[38] && paddle1.y > 0)
        paddle1.y -= 20;
      
    if (keys[40] && paddle1.y < 600 - 80)
        paddle1.y += 20;    
}

function checkMenuControls(){
    if (keys[13]) {
        board.start();
    }
}

$(document).ready(function() {
    setInterval(updateState, 30);
        
    $(document).keydown(function(event){
        keys[event.which] = true;
    }).keyup(function(event){
        delete keys[event.which];
    });
});
