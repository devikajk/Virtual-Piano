var wcol = ["#C2DFFF","#FFE5B4","cornsilk","#E55451"];
var bcol = ["#151B54","#43302E","black","#FFF0F5"];
var i = -1;
function change(){
    i = i < (wcol.length-1) ? ++i : 0;
    var wkey = document.getElementsByClassName("white");
    for(var j = 0; j < wkey.length; j++){
		wkey[j].style.backgroundColor = wcol[i];
	}
    var bkey = document.getElementsByClassName("black");
    for(var j = 0; j < bkey.length; j++){
		bkey[j].style.backgroundColor = bcol[i];
	}
}

function playAll(key){
  var a;
  switch(key){
    case "C4":
      a= document.getElementById("C4aud");
    break;
    case "Db4":
      a= document.getElementById("Db4aud");
    break;
    case "D4":
      a= document.getElementById("D4aud");
    break;
    case "Eb4":
      a= document.getElementById("Eb4aud");
    break;
    case "E4":
      a= document.getElementById("E4aud");
    break;
    case "F4":
      a= document.getElementById("F4aud");
    break;
    case "Gb4":
      a= document.getElementById("Gb4aud");
    break;
    case "G4":
      a= document.getElementById("G4aud");
    break;
    case "Ab4":
      a= document.getElementById("Ab4aud");
    break;
    case "A4":
      a= document.getElementById("A4aud");
    break;
    case "Bb4":
      a= document.getElementById("Bb4aud");
    break;
    case "B4":
      a= document.getElementById("B4aud");
    break;
    case "C5":
      a= document.getElementById("C5aud");
    break;
    case "Db5":
      a= document.getElementById("Db5aud");
    break;
    case "D5":
      a= document.getElementById("D5aud");
    break;
    case "Eb5":
      a= document.getElementById("Eb5aud");
    break;
    case "E5":
      a= document.getElementById("E5aud");
    break;
  }
  a.currentTime=0;
  a.play();
  console.log(a.currentTime);
  setInterval(function(){   
    if(a.currentTime>1){
        
        a.pause();
      }
    },0);

}
