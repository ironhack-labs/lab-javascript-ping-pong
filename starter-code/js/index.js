
$( document ).ready(function() {

  var playOn = false;
  var board = new Board(400,800);

  var paddle1 = document.getElementById('paddle1');
  var paddle2 = document.getElementById('paddle2');
  //var paddle1 = $('paddle1');
  //var paddle2 = $('paddle2');
  //paddle1.css("top","90px");
  paddle1.style.top = "182px";
  paddle1.style.left = "20px";
  paddle1.style.height = "38px";
  paddle1.style.width = "18px";

  paddle2.style.top = "182px";
  paddle2.style.left = "760px";
  paddle2.style.height = "38px";
  paddle2.style.width = "18px";
  document.getElementById('player1').innerHTML=0;
  document.getElementById('player2').innerHTML=0;

  var ball = new Ball(0,0,paddle1, paddle2, board);

  $('#start').on('click', function(){
    if (playOn) {
      playOn=false;
      document.getElementById('start').innerHTML = "Start";
      document.getElementById('player1').innerHTML = "0";
      document.getElementById('player2').innerHTML = "0";

      clearInterval(game);
      clearInterval(paddleIA);
    } else {
      playOn=true;
      ball.restart();
      document.getElementById('start').innerHTML = "Stop"
      game = setInterval(updateState, 33);
      paddleIA = setInterval(autoPaddle, 250);

    }
    //board.start();
    activatePaddle2();

    renderGame();
  });

  $(document).on('keydown', function(e){
    if (e.keyCode == 38 || e.keyCode == 40) {
      movePaddleTop(paddle1, e.keyCode);
    } else {
      ball.move();
    }
  });

  function updateState(){
    ball.move();
  }

  function autoPaddle(){
    paddle2Move(ball, paddle2);
  }

});


function movePaddleTop (paddle1,keycode){
  //var style = window.getComputedStyle(paddle1);
  var top = parseInt(paddle1.style.top);
  var height = parseInt(paddle1.style.height);
  console.log(height);
  if (keycode == 38) {
    if (top - 20 >= 0) {
      paddle1.style.top = (top - 20) + "px";
    }
  } else if (keycode == 40) {
    if (top + height + 20 <= 400) {
      paddle1.style.top = (top + 20) + "px";
    }
  }
}


function paddle2Move(ball, paddle2) {

  var inc;
  var top = parseInt(paddle2.style.top);
  var height = parseInt(paddle2.style.height);

  if (ball.direction =="NE") {
    inc = -1;
  } else if ((ball.direction =="SE")) {
    inc = +1;
  } else {
     inc = [0,1,-1][Math.floor(Math.random() * 3)];
  }

  if (inc == -1) {
    if (top - 20 >= 0) {
      paddle2.style.top = (top - 20) + "px";
    }
  } else if (inc == +1) {
    if (top + height + 20 <= 400) {
      paddle2.style.top = (top + 20) + "px";
    }
  }

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
