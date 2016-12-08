(function () {

	if (typeof PingPong === "undefined") {
    	window.PingPong = {};
  	}

	var Game = PingPong.Game = function (canvas, width, height) {
		this.board = new PingPong.Board(canvas, width, height);
		// You need to create the method already bund
		// When you bind you create a new function
		// Therefore when I was removing it, I was trying to remove a new, non existing one
		// http://stackoverflow.com/questions/11565471/removing-event-listener-which-was-added-with-bind
		this.startPlayBund = this.startPlaying.bind(this);
		this.getReady();
	};

	Game.prototype.getReady = function () {
		this.board.renderStart();
		window.addEventListener("keypress", this.startPlayBund);
	};

	Game.prototype.play = function () {
		if (this.board.scored()) {
			window.clearInterval(this.playInterval);
			this.getReady();
		} else {
			this.board.play();
		}
	};

	Game.prototype.render = function () {
		this.board.render();
	};

	Game.prototype.startPlaying = function () {
		window.removeEventListener("keypress", this.startPlayBund);
		this.playInterval = window.setInterval(this.play.bind(this), "5");
	};


})();
