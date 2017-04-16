$(document).ready(function()
{
  var board = new Board();
  var ball = new Ball(500, 500);

  $(document).on('keydown', moveListeners);
  $('#start').on('click', function(){
    board.start();
    setInterval(function () {ball.move(); ball.collisions();activatePaddle2();
},10);
    activatePaddle2();
    renderGame();
  });
});


function updateState(){
}


function activatePaddle2() {
  var ballPositionY =parseInt($("#ball").css("top").replace('px', ''));
  var computerPositionY = parseInt($("#paddle2").css("top").replace('px', ''));


    $("#paddle2").css("top", ballPositionY-50+"px");
}

function renderGame(){
}

function renderScore(){
}

function renderBall(){
}


//paddle 1 moves with keys
function moveListeners (event) {
  var keys = [38, 40];
  var playerPositionY = parseInt($("#paddle1").css("top").replace('px', ''));


  if (keys.indexOf(event.keyCode) < 0)
    return;
  switch (event.keyCode) {
    case 38:
    if (0 < playerPositionY) {
      playerPositionY -= 10;
      $("#paddle1").css("top", playerPositionY+"px");
    }
      break;
    case 40:
    if ( playerPositionY < 400) {
      playerPositionY += 10;
      $("#paddle1").css("top", playerPositionY+"px");
    }
     break;
  }
}
