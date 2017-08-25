$( document ).ready(function() {
  var keys = {};
   setInterval(checkControls, 30);


  var raqueta = new Paddle();
  var pelota = new Ball();
  setInterval(pelota.abajoderecha, 30);



    $(document).keydown(function(e){
     keys[e.keyCode] = true;
      }).keyup(function(e){
      delete keys[e.keyCode];
    });

    function checkControls(){
      console.log("entro checkcontrol");
      if (keys[39])
        raqueta.moveleft();
      else if (keys[37])
        raqueta.moveright();
      else if (keys[38])
        raqueta.moveup();
      else if (keys[40])
        raqueta.movedown();
    }

  pelota.abajoderecha();
  pelota.arribaderecha();
  // pelota.rebote();

});
