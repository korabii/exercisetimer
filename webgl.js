function sound(src) {
  this.sound = document.createElement("audio");
  this.sound.src = src;
  this.sound.setAttribute("preload", "auto");
  this.sound.setAttribute("controls", "none");
  //this.sound.loop=true; //infinite loop
  this.sound.style.display = "none";
  document.body.appendChild(this.sound);
  this.play = function(){
      this.sound.play();
  }
  this.stop = function(){
    this.sound.pause();
  }
}

sound = new sound("beep.mp3");


let soundPlay;
let isPlaying = false; // prevents many instances of setintravel from being created.
let counter = 0
let rounds = 0
let resting = false


function startPlay(){
  if(isPlaying){
    //prevents setintreval from being called if it already rnning.
  }else{
    soundPlay = setInterval(main, 50)
    isPlaying = true;
  }
}

function stopPlay(){
  clearInterval(soundPlay);
  isPlaying = false;
}


function main(){

  let active = (document.getElementById("active").value);
  let rest = (document.getElementById("rest").value);
  counter+=0.05;


  if(resting && counter >= rest){
    sound.play();
    document.getElementById("output").style.color= "black";
    counter = 0
    resting = false
  }
  if(!resting && counter >= active){
    sound.play();
    document.getElementById("output").style.color = "red";
    counter = 0
    resting = true
    rounds+= 1
  }
  
  document.getElementById("output").innerHTML = counter.toFixed(1) //Math.ceil(counter)
  document.getElementById("rounds").innerHTML = rounds

  if(resting){
    document.getElementById('graph').style.width = (100 / rest) * counter + '%'
  }else{
    document.getElementById('graph').style.width = (100 / active) * counter + '%'
  }
  
}


