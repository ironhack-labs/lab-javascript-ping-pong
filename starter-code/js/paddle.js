function Paddle() {

}


Paddle.prototype.moveup = function(){
    var c = parseInt($("#raqueta").css("top"));
    if(c<=4){
      console.log("I cant move!");
    }
    else{
      c -=9;
      $("#raqueta").css("top", c + "px");
    }
};

Paddle.prototype.movedown = function (){
    var d = parseInt($("#raqueta").css("top"));
    if(d>=396){
      console.log("I cant move!");
    }
    else{
      d +=9;
      $("#raqueta").css("top", d + "px");

    }
};
