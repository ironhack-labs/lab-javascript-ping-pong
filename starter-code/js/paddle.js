function Paddle(x,y, gameProperties) {
	this.x = x
	this.y = y
	this.speed = 300
	this.gameProperties = gameProperties;

}
Paddle.prototype.restart = function(){

};

Paddle.prototype.hitBall = function(ball_y){
};

Paddle.prototype.move = function(direction){

	switch (direction){
		case "down":
			this.y += this.speed*this.gameProperties.intervalTime/1000;
			break;
		case "up":
			this.y -= this.speed*this.gameProperties.intervalTime/1000;
			break;
	}
	if (this.y < 0) this.y = 0;
	if (this.y > this.gameProperties.height - this.gameProperties.paddleHeight) this.y = this.gameProperties.height - this.gameProperties.paddleHeight;

	
}
