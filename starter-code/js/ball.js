function Ball(x,y, paddle1, paddle2) {
  this.x = x
  this.y = y
  this.paddle1 = paddle1
  this.paddle2 = paddle2
  this.direction = this.randomDirection()
}

Ball.prototype.randomDirection = function() {
  var directions = ['NW', 'NE', 'SE', 'SW']
  var indexRandom = Math.floor(Math.random()*directions.length)
  return directions[indexRandom]
};

Ball.prototype.move = function(){
  switch (this.direction) {
    case 'NW': this.x -= 5; this.y -= 5; this.checkCollision(); break;
    case 'NE': this.x -= 5; this.y += 5; this.checkCollision(); break;
    case 'SE': this.x += 5; this.y += 5; this.checkCollision(); break;
    case 'SW': this.x += 5; this.y -= 5; this.checkCollision(); break;
  }
};

Ball.prototype.checkCollision = function(){
  // Ball hit the top
  if(this.x == 0){
    switch (this.direction) {
      case 'NW': this.direction = 'SW'; break;
      case 'NE': this.direction = 'SE'; break;
    }
  }

  // Ball hit on left
  if(this.y == 0){
    console.log('Paddle2 score + 1')
    this.restart(190, 290, this.paddle1, this.paddle2)
    this.paddle2.score++
  }

  // Ball hit on paddle1
  if(this.y == 40 && board.paddle1.x < this.x && board.paddle1.x + 80 > this.x){
    switch (this.direction) {
      case 'NW': this.direction = 'NE'; break;
      case 'SW': this.direction = 'SE'; break;
    }
  }

  // Ball hit on right
  if(this.y == 580){
    console.log('Paddle1 score + 1')
    this.restart(190, 290, this.paddle1, this.paddle2)
    this.paddle1.score++
  }

  // Ball hit on paddle2
  if(this.y == 550  && board.paddle2.x < this.x && board.paddle2.x + 80 > this.x){
    switch (this.direction) {
      case 'NE': this.direction = 'NW'; break;
      case 'SE': this.direction = 'SW'; break;
    }
  }

  // Ball hit the floor
  if(this.x == 380){
    switch (this.direction) {
      case 'SE': this.direction = 'NE'; break;
      case 'SW': this.direction = 'NW'; break;
    }
  }
};

Ball.prototype.pointScored = function(){
};

// returns winner paddle or false
Ball.prototype.winner = function(){
  if(this.paddle1.score == 2) return this.paddle1.id
  if(this.paddle2.score == 2) return this.paddle2.id
  else return
};

Ball.prototype.restart = function(x,y, paddle1, paddle2){
  this.x = x
  this.y = y
  this.paddle1 = paddle1
  this.paddle2 = paddle2
  this.direction = this.randomDirection()
};
