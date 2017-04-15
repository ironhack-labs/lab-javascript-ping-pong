function Board(sizeX, sizeY, ball, userPaddle, compPaddle) {
    this.sizeX = sizeX;
    this.sizeY = sizeY;
    this.ball = ball;
    this.userPaddle = userPaddle;
    this.compPaddle = compPaddle;
    this.stopped = true;
    
    this.locateBallAtCenter();
}

Board.prototype.doGameStep = function(){
    this.compPaddleIA();
    this.checkBallCollision();
    this.ball.move(); 
};

Board.prototype.checkGame = function(){
    
};

Board.prototype.checkBallCollision = function(){
    if (this.userPaddle.hitBall(this.ball.x - 8, this.ball.y + 8) || this.compPaddle.hitBall(this.ball.x + 16, this.ball.y + 8)) { //Adding 10 for div corner compensation; 
        this.ball.directionX *= -1;
        this.ball.x += 8 * this.ball.directionX;
        this.ball.newVelocityDeltas();
    }
    
    if (this.ball.x >= this.sizeX - 10) {
        this.userPaddle.scoredPoints++;
        this.stop();
    }
    
    if (this.ball.x <= 0) {
        this.compPaddle.scoredPoints++;
        this.stop();
    }
        
        
    if (this.ball.y >= this.sizeY - 10 || this.ball.y <= 0)
        this.ball.directionY *= -1;  
};

Board.prototype.stop = function(){
    this.stopped = true;
};

Board.prototype.start = function(){
    this.stopped = false;
};

Board.prototype.locateBallAtCenter = function(){
    this.ball.randomDirection();
    this.ball.x = (this.sizeX / 2) - 8;
    this.ball.y = (this.sizeY / 2) - 8;
};

Board.prototype.gameOver = function(){
    
};

Board.prototype.compPaddleIA = function(){
    if(this.ball.x > this.sizeX / 2) {
        if (this.ball.y < this.compPaddle.y + this.compPaddle.size / 2 && this.compPaddle.y > 0)
            this.compPaddle.y -= 7;
        else if (this.ball.y > this.compPaddle.y + this.compPaddle.size / 2 && this.compPaddle.y < this.sizeY - this.compPaddle.size)
            this.compPaddle.y += 7;
    }
};
