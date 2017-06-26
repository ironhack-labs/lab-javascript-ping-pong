var board = new Board();


$('#start').on('click', function(){
  board.start();
  activatePaddle2();
  renderGame();
});

function updateState(){
}

$(document).on('keydown', function(e) {
  switch (e.keyCode) {
    case 38:
      board.paddle1.up();
      break;
    case 40:
      board.paddle1.down();
      break;
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
