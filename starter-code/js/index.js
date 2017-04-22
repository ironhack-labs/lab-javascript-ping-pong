var board = new Board();

$('#start').on('click', function(){
  board.start();
  activatePaddle2();
  Ball.prototype.move();
  var game = setInterval(updateState, intervalTime);
  renderGame();
});

function updateState(){
}

$(document).on('keypress', function(e){
    if(e.which == 77){//letra M
     $("#paddle1").css("top","+=30");
    }
        //FALTA CONTROL QUE NO SE SALGA DEL CAMPO 
    if(e.which== 79){//letra O

        $("#paddle1").css("top","-=30");}
});

var checkUpDown= true;
function activatePaddle2() {
  var movePaddle=0;
  setInterval(function() {
  if(movePaddle===20){
      checkUpDown=true;
  }
  if(movePaddle===900){
    checkUpDown=false;
  }
  if(checkUpDown===false){
    --movePaddle;
  }else{
    ++movePaddle;
  }
  $("#paddle2").css("top",movePaddle);
},1);
}

function renderGame(){
}

function renderScore(){
}

function renderBall(){
}

function renderPaddle(){
}
