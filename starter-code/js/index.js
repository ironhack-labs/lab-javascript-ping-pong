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
  switch(e.keyCode){
      case 38://up
        $("#paddle1").css("top","-=10");

      break;
      case 40://down
        $("#paddle1").css("top","+=10");

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
