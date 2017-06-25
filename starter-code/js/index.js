var board = new Board();
direction = 1;

$('#start').on('click', function() {
  board.start();
  activatePaddle2();
  var game = setInterval(updateState, intervalTime);
  renderGame();
  ball();
});

function updateState() {}


function activatePaddle2(yp, yb) {
  setTimeout(activatePaddle2, 3);

  yp = $("#paddle2").position().top;
  yb = $("#ball").position().top;
  xb = $("#ball").position().left;

  switch (direction) {
    case 1:
      board.moveYdown2();
      if (yp + 150 > yb && xb > 400) {
        direction = 2;
      }
      if (xb < 1000) {
        direction = 3;
      }
      if (xb > 1300) {
        direction = 3;
      }
      break;

    case 2:
      board.moveYup2();
      if (yp < yb && xb > 1000) {
        direction = 1;
      }
      if (xb < 1000) {
        direction = 3;
      }
      if (xb > 1300) {
        direction = 3;
      }
      break;

    case 3:

      if (xb < 1000) {
        direction = 3;
      }
      if (xb > 1300) {
        direction = 3;
      }
      if (yp < yb && xb > 400) {
        direction = 1;
      }
      if (yp + 150 > yb && xb > 400) {
        direction = 2;
      }
      break;


  }
}

function renderGame() {

}

function renderScore() {}

function renderBall() {}

function renderPaddle() {}
