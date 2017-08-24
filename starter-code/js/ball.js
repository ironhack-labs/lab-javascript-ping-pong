// function Ball(x,y, paddle1, paddle2) {
// }
//
// Ball.prototype.randomDirection = function() {
// }
//
// Ball.prototype.move = function(a, b){
//
// }
//
// Ball.prototype.pointScored = function(){
// }
//
// // returns winner paddle or false
// Ball.prototype.winner = function(){
// }
//
// Ball.prototype.restart = function(){
// }

function Ball () {
  this.posX = 0
  this.posY = 0
  // this.dirX = x
  // this.dirY = y
  // this.velocity = vel
}

Ball.prototype.direction = function () {

}

Ball.prototype.move = function () {

}

Ball.prototype.abajoDerecha = function () {
  this.x += 8
  this.y += 8
  $('#ball').css('left', this.x + 'px')
  $('#ball').css('top', this.y + 'px')
}
