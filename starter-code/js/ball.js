function Ball(x,y, paddle1, paddle2, gameProperties) {
	this.xInitial = x;
	this.yInitial = y;
	this.x = x;
	this.y = y;
	this.paddle1 = paddle1;
	this.paddle2 = paddle2;
	this.direction = 0;
	this.speed = 200;
	this.gameProperties = gameProperties;
}

Ball.prototype.randomDirection = function() {
	this.direction = Math.random()*2*Math.PI;
};

Ball.prototype.move = function(){
	if (this.collision($("#ball"),$("#paddle1"))) {
		this.reflectVertically();
		this.speed += 20;
	}
	if (this.collision($("#ball"),$("#paddle2"))) this.reflectVertically();
	this.x = this.x + Math.cos(this.direction) * this.speed * this.gameProperties.intervalTime/1000;
	this.y = this.y + Math.sin(this.direction) * this.speed * this.gameProperties.intervalTime/1000;
	this.checkHorizontalCollision();
	
};

Ball.prototype.checkHorizontalCollision = function(){
	if (this.y <=0 ) this.reflectHorizontally()
	else if (this.y >= this.gameProperties.height - this.gameProperties.ballHeight) this.reflectHorizontally()
}

Ball.prototype.reflectHorizontally = function(){
	this.direction = 2*Math.PI - this.direction;
}

Ball.prototype.reflectVertically = function(){
	this.direction = Math.PI - this.direction;
}

Ball.prototype.checkVerticalCollision = function(){
	if (this.x <=0 ) return "left";
	else if (this.x >= this.gameProperties.width - this.gameProperties.ballWidth) return "right"
	else return "none"
}

Ball.prototype.pointScored = function(){
};

// returns winner paddle or false
Ball.prototype.winner = function(){
};

Ball.prototype.restart = function(){
	this.randomDirection();
	this.x = this.xInitial;
	this.y = this.yInitial;
};


Ball.prototype.collision = function($div1, $div2) {
      var x1 = $div1.offset().left;
      var y1 = $div1.offset().top;
      var h1 = $div1.outerHeight(true);
      var w1 = $div1.outerWidth(true);
      var b1 = y1 + h1;
      var r1 = x1 + w1;
      var x2 = $div2.offset().left;
      var y2 = $div2.offset().top;
      var h2 = $div2.outerHeight(true);
      var w2 = $div2.outerWidth(true);
      var b2 = y2 + h2;
      var r2 = x2 + w2;

      if (b1 < y2 || y1 > b2 || r1 < x2 || x1 > r2) return false;
      return true;
    }