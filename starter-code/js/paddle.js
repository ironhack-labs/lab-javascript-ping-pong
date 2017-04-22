function Paddle(x, y, size) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.scoredPoints = 0;
}

Paddle.prototype.restart = function(){
};

Paddle.prototype.hitBall = function(ballX, ballY){
    return ((this.x < ballX && this.x + 16 > ballX) && (this.y < ballY && this.y + this.size > ballY));
};

Paddle.prototype.pointScored = function(){
    this.scoredPoints ++;
};

// returns winner paddle or false
Paddle.prototype.winner = function(){
};
