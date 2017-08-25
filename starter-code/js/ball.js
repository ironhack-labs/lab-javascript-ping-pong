function Ball() {

}
Ball.prototype.rebote = function(){

  };

Ball.prototype.abajoderecha = function (){
  var y = parseInt($("#pelota").css("top"));
  var x = parseInt($("#pelota").css("left"));
  if(y>=482){
    console.log("I cant move!");
  }
  else{
    y += 7;
    x +=7;
    $("#pelota").css("top", y + "px");
    $("#pelota").css("left", x + "px");
  }

};
Ball.prototype.arribaderecha = function (){
  var y = parseInt($("#pelota").css("top"));
  var x = parseInt($("#pelota").css("left"));
  y -= 7;
  x +=7;
  $("#pelota").css("top", y + "px");
  $("#pelota").css("left", x + "px");
};
