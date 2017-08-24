var board = new Board();
var paddle = new Paddle();
var ball = new Ball();
var keys = {};



function updateState(){
}


function activatePaddle2() {
}

function renderGame(){
}

function renderScore(){
}

function renderBall(){
}

function renderPaddle(){
}

function movePaddle(){
  if (keys[81]) {
    paddle.moveUp();
  }else if (keys[65]){
    paddle.moveDown();
  }
}





$( document ).ready(function() {

  $('#start').on('click', function(){
    // board.start();
    // activatePaddle2();

    //Set initial position for the ball
    ball.x = parseInt($("#ball").css('left'));
    ball.y = parseInt($("#ball").css('top'));

    //Set a random direction for the ball
    ball.randomDirection();

    // Function to running the code in intervals
    var game = setInterval(function(){

      if (ball.end === true){
        clearInterval(game);
      }
      movePaddle();
      ball.move();
    }, 30);

  });


  // Save ?????????
  $(document).on('keydown', function(e){
    keys[e.keyCode] = true;
    }).keyup(function(e){
    delete keys[e.keyCode];
  });
  /*****************/

  //renderGame();



});
