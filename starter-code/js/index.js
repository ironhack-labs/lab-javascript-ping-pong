var board = new Board();


$('#start').on('click', function(){
  board.start();
  activatePaddle2();
  var game = setInterval(updateState, intervalTime);
  renderGame();
});

function updateState(){
}

$(document).on('keydown', function(e){
  var x = $("#paddle2").position().top;

  console.log(x);
  if (e.keyCode == 38) {
    $("#paddle2").css({
      top: x -= 5
    });
  } else if (e.keyCode == 40) {
    $("#paddle2").css({
      top: x += 5
    });
  }
});

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
