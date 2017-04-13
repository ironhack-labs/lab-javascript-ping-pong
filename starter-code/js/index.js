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

  switch (e.keyCode) {
    case 38:
      paddleTop();
    break;
    case 40:
      paddleDown();
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


var percent = 50;
function paddleTop(){
  var elemTop = $('#paddle1').position().top;
  if(elemTop <= 0){
    $('#paddle1').css('top',0+'%');
  }else{
    percent -= 10;
    $('#paddle1').css('top',percent+'%');
  }
}

function paddleDown(){
  var elem = $('#paddle1').position().top;
  if(elem >= 100){
    $('#paddle1').css('top',100+'%');
  }else{
    percent += 10;
    $('#paddle1').css('top',percent+'%');
  }

}
