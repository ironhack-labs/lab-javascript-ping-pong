var board = new Board();
var ball = new Ball();
var paddle = new Paddle();


$('.button').on('click', function(){
  console.log('lol');
  board.start();
  ball.move();
  activatePaddle2();
  var game = setInterval(updateState, intervalTime);
  renderGame();
});

function updateState(){
}

$(document).on('keydown', function(e){
     var x = $('.paddle-red').position().top;
     console.log($('.paddle-red').position());

    if(event.keyCode === 38){
       if(x <= 0){
         return;
       }
       $('.paddle-red').css({top: x-=15});
     }else if(event.keyCode === 40){
       if(x >= 350){
         return;
       }
       $('.paddle-red').css({top: x+=15});
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
