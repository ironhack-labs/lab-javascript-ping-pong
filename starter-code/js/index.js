var PADDLE1_SPEED = 20;
var PADDLE2_SPEED = 4;
var BOARD_HEIGHT = 500; // should keep track of styles values
var BOARD_WIDTH = 900; // should keep track of styles values
var PADDLE_HEIGHT = 100; // should keep track of styles values
var PADDLE_WIDTH = 20;
var BALL_DIAMETER = 20; // ''
var INTERVAL_TIME = 25;

var board = new Board();


$('#start').on('click', function(){
  board.start();
  //activatePaddle2();
  //what is intervalTime?
  var game = setInterval(updateState, 50);
  renderGame();
});

//change ball position, change paddle2 positions.
//then call renderGame;
function updateState(){
  //  update paddle2 position;

  /*  We'll actually call activatePaddle2 because it has differetn speed than
      those we are using in moveUp moveDown from ball class

  if (ball.yPos > paddle2.yPos){
    //paddle2 must go down
    paddle2.moveDown();
  } else {
    //paddle2 must go up
    paddle2.moveUp();
  }
  */

  activatePaddle2(board.ball.xPos, board.ball.yPos);

  //  update ball position;
  board.ball.move();

  // then check if someone scored.
  if (board.ball.pointScored() && board.ball.winner()){
    var winner = board.ball.winner();
    if (winner === board.paddle1){
      board.homeScore += 1;
    } else {
      board.awayScore += 1;
    }

    board.restart();
  }

  // check if game is over?           //render score before this?
  if (board.gameOver()) board.stop();

  //render all
  //paddle1, paddle2, ball, score   --- Maybe we shouldn't render paddle1 twice...
  renderGame();

}

//change paddle1 positions. update coordinates for paddle1 here. Also render it!
$(document).on('keydown', function(e){

  var key = e.which;  //key38 is up, key 40 is down
  var paddle1 = board.paddle1;

  //console.log(typeof e.which);
  //console.log(e.which);

  if (key === 38){
    e.preventDefault();
    //move paddle1 up
    paddle1.moveUp();
    //paddle1.yPos = (paddle1.yPos - 20 < 0) ? 0 : paddle1.yPos - 20;
  } else if (key === 40){
    e.preventDefault();
    //move paddle1 down
    paddle1.moveDown();
    //paddle1.yPos = (paddle1.yPos + 20 > BOARD_HEIGHT - PADDLE_HEIGHT) ?
    //  BOARD_HEIGHT - PADDLE_HEIGHT : paddle1.yPos + 20;
  }

  //render paddle
  $('#paddle1').css('top', paddle1.yPos);
});

//
function activatePaddle2(x, y) {
  if (y + BALL_DIAMETER/2 > board.paddle2.yPos + PADDLE_HEIGHT/2){
    //paddle2 must go down
    board.paddle2.yPos = (board.paddle2.yPos + PADDLE2_SPEED >= BOARD_HEIGHT - PADDLE_HEIGHT) ?
      BOARD_HEIGHT - PADDLE_HEIGHT : board.paddle2.yPos + PADDLE2_SPEED;

  } else {
    //paddle2 must go up
    board.paddle2.yPos = (board.paddle2.yPos - PADDLE2_SPEED < 0) ?
      0 : board.paddle2.yPos - PADDLE2_SPEED;

  }
}

function renderGame(){
  renderScore();
  renderPaddle();
  renderBall();
}

//paint score
function renderScore(){
  var homeScoreSpan = $('#home-score');
  var awayScoreSpan = $('#away-score');
  homeScoreSpan.html(board.homeScore);
  awayScoreSpan.html(board.awayScore);
}

//paint ball
function renderBall(){
  var ballDiv = $('#ball');
  ballDiv.css('left', board.ball.xPos + 'px');
  ballDiv.css('top', board.ball.yPos + 'px');
}

//paint paddle2
function renderPaddle(){
  var paddle2Div = $('#paddle2');
  paddle2Div.css('left', board.paddle2.xPos + 'px');
  paddle2Div.css('top', board.paddle2.yPos + 'px');
}
