// function Paddle(x,y) {
// }
// Paddle.prototype.restart = function(){
// }
//
// Paddle.prototype.hitBall = function(ball_y){
// }

function Paddle () {
  this.posX = 0
  // this.posY
  // this.size
  // this.score = score
}

Paddle.prototype.hitBall = function () {

}

Paddle.prototype.pointScored = function () {

}

Paddle.prototype.winner = function () {

}

Paddle.prototype.moveUp = function (x) {
    this.posX = x
    if (this.posX >= 10) {
      return this.posX -= 8
    }
}

Paddle.prototype.moveDown = function (x) {
    this.posX = x
    if (this.posX <= 440) {
      return this.posX += 8
    }
}

// function checkControls() {
//   console.log("entro checkcontrol")
//   if (keys[81])
//     moveUp()
//   else if (keys[65])
//     moveDown()
// }
//
// function moveUp() {
//   var a = parseInt($("#paddle1").css('top'))
//   console.log(a)
//   if (a>=10) {
//     a -= 8
//     $("#paddle1").css('top', a + 'px')
//   }
// }
//
// function moveDown() {
//   var b = parseInt($("#paddle1").css('top'))
//   console.log(b)
//   if (b < 440) {
//     b += 8
//     $("#paddle1").css('top', b + 'px')
//   }
// }
