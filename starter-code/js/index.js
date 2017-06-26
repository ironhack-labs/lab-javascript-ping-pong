var board = new Board();
var paddle1;
var paddle2;
var ball;
var keyUpPressed = false;
var keyDownPressed = false;
var game;

var gameProperties = {
	height : 0,
	width : 0,
	intervalTime : 33,
	paddleHeight : 0,
	paddleWidth : 0
}

$('#start').on('click', startGame);

function startGame(){
	getGameProperties();
  	paddle1 = new Paddle(0,0, gameProperties);
	paddle2 = new Paddle(0,0, gameProperties);
  	ball = new Ball(gameProperties.width/2 - gameProperties.ballWidth/2 , gameProperties.height/2 - gameProperties.ballHeight, paddle1, paddle2, gameProperties);
	ball.restart();
	board.start();
	activatePaddle2();
	if (game != 1) game = setInterval(updateState, gameProperties.intervalTime);
	renderGame();
}

function updateState(){
	if (keyUpPressed) {
		paddle1.move('up')
		paddle2.move('up')
	}
	if (keyDownPressed) {
		paddle1.move('down')
		paddle2.move('down')
	}
	ball.move()

	switch(ball.checkVerticalCollision()){
		case "left":
			startGame();
			break;
		case "right":
			startGame();
			break;
		case "none":
			break;
	}
	renderBall()
	renderPaddle()
}

$(document).on('keydown', function(e){
	switch(e.key){
		case "ArrowUp":
			keyUpPressed = true;
			break;
		case "ArrowDown":
			keyDownPressed = true;
			break;
	}
});

$(document).on('keyup', function(e){
	switch(e.key){
		case "ArrowUp":
			keyUpPressed = false;
			break;
		case "ArrowDown":
			keyDownPressed = false;
			break;
	}
});

function getGameProperties(){
	gameProperties.height = parseInt($("#board").css("height"));
	gameProperties.width = parseInt($("#board").css("width"));
	gameProperties.paddleHeight = parseInt($(".paddle").css("height"));
	gameProperties.paddleWidth = parseInt($(".paddle").css("width") + $(".paddle").css("margin-left") + $(".paddle").css("margin-right"));
	gameProperties.ballHeight =  parseInt($("#ball").css("height"));
	gameProperties.ballWidth =  parseInt($("#ball").css("width"));
}

function activatePaddle2() {
}

function renderGame(){
}

function renderScore(){
}

function renderBall(){
	$("#ball").css("top", ball.y);
	$("#ball").css("left", ball.x);
}

function renderPaddle(){
	$("#paddle1").css("top", paddle1.y);
	$("#paddle2").css("top", paddle2.y);
}
