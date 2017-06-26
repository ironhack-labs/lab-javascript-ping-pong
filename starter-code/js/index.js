
var board = new Board();
var ball = new Ball();


$('.btn-start').on('click', function(){
  board.start();
  //setInterval(function () {

  //},40);
  ball.move();
  activatePaddle2();
  //var game = setInterval(updateState, intervalTime);
  renderGame();
});

function updateState(){
}

$(document).on('keydown', function(e){
  var x = $("#paddle1").position().top;
 //alert(x);
   console.log($("#paddle1").position());
   if(e.keyCode === 38){
    if(x <= 0){
      return;
    }
    $("#paddle1").css({top: x-=14});
      }else if(e.keyCode === 40){
    if(x >= 296){
      return;
    }
    $("#paddle1").css({top: x+=14});
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
