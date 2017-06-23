var board = new Board();


$('#start').on('click', function(){
  board.start();
  activatePaddle2();
  var game = setInterval(updateState, intervalTime);
  renderGame();
});

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
