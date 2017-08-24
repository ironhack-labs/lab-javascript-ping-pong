var board = new Board()
var paddle1Top
var paddleHeigth = parseInt($('.paddle').css('height'))
var paddleWidth = parseInt($('.paddle').css('width'))
var boardTop = parseInt($('#board').css('top'))
var boardLeft = parseInt($('#board').css('left'))
var boardHeight = parseInt($('#board').css('height'))

var intervalTime = 50

$('#start').on('click', function(){
  board.start()
  activatePaddle2()
  var game = setInterval(updateState, intervalTime)
  renderGame()
})

function updateState(){
  renderPaddle()
  renderBall()
  renderScore()
  renderGame()
}

$(document).on('keydown', function(e){
  if(e.keyCode == 40){ //Arrow down
    paddle1Top = parseInt($('#paddle1').css('top'))
    if(paddleHeigth + paddle1Top < boardHeight)
      board.paddle1.moveDown(paddle1Top)
  }
  if(e.keyCode == 38){ //Arrow up
    paddle1Top = parseInt($('#paddle1').css('top'))
    if(paddle1Top > 0)
      board.paddle1.moveUp(paddle1Top)
  }
})

function activatePaddle2() {

}

function renderGame(){
}

function renderScore(){
}

function renderBall(){
  board.ball.move()
  $('#ball').css('top', board.ball.x + 'px')
  $('#ball').css('left', board.ball.y + 'px')
}

function renderPaddle(){
  $('#paddle1').css('top', board.paddle1.x + 'px')
  $('#paddle1').css('left', board.paddle1.y + 'px')

  $('#paddle2').css('top', board.paddle2.x + 'px')
  $('#paddle2').css('left', board.paddle2.y + 'px')
}
