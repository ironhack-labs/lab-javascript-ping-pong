var PADDLE_SPEED = 20;
var BOARD_HEIGHT = 500; // should keep track of styles values
var BOARD_WIDTH = 900; // should keep track of styles values
var PADDLE_HEIGHT = 100; // should keep track of styles values

var board = new Board();


$('#start').on('click', function(){
  board.start();
  //activatePaddle2();
  var game = setInterval(updateState, intervalTime);
  renderGame();
});

//change ball position, change paddle2 positions.
//then call renderGame;
function updateState(){
}

//change paddle1 positions. update coordinates for paddle1 here. Also render it!
$(document).on('keydown', function(e){

  var key = e.which;  //key38 is up, key 40 is down
  var paddle1 = board.paddle1;

  console.log(typeof e.which);
  console.log(e.which);

  if (key === 38){
    e.preventDefault();
    paddle1.yPos = (paddle1.yPos - 20 < 0) ? 0 : paddle1.yPos - 20;
  } else if (key === 40){
    e.preventDefault();
    paddle1.yPos = (paddle1.yPos + 20 > BOARD_HEIGHT - PADDLE_HEIGHT) ?
      BOARD_HEIGHT - PADDLE_HEIGHT : paddle1.yPos + 20;
  }

  //render paddle;  does have to pass astinrg?
  $('#paddle1').css('top', paddle1.yPos);
});

//
function activatePaddle2() {

}

function renderGame(){
}

//paint score
function renderScore(){
}

//paint ball
function renderBall(){
}

//paint paddle2
function renderPaddle(){
}
