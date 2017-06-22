var board = new Board();


$('.btn-start').on('click', function(){
  board.start();
  activatePaddle2();
  var game = setInterval(updateState, intervalTime);
  renderGame();
  });
function updateState(){
}


$(document).on('keydown', function(e){
    var x = $("#paddle1").position().top;
    console.log($("#paddle1").position());
  if(e.keyCode === 38){
      if(x <= 3){
        return;
      }
      $("#paddle1").css({top: x-=15});
    }else if(e.keyCode === 40){
      if(x >= 90){
        return;
      }
      $("#paddle1").css({top: x+=15});
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
