
function updateState(){
}

function activatePaddle2() {
  $(document).on('keydown', function(e){
    switch (e.which) {
    case 38:
        $div.css('top', $div.offset().top - 1);
        break;
    case 40:
        $div.css('top', $div.offset().top + 1);
        break;
    }
  });
}

function renderGame(){
}

function renderScore(){
}

function renderBall(){
}


function renderPaddle(){
}
//////////////////////////////
$(document).ready(function() {
  var board = new Board();
  var $paddle2= $('#paddle2');
  $('#start').on('click', function(){
    board.start();
    activatePaddle2();
    var game = setInterval(updateState, intervalTime);
    renderGame();
  });

});
