var music = new Audio("music.mp3");
var cur = 0;
var fd = document.querySelector("#feministaf");
fd.addEventListener("mouseover", function() {
     stop = setInterval(change, 80);
     stop2 = setInterval(flash, 1000)
     music.play();
     music.loop = true;
});

fd.addEventListener("mouseout", function() {
    clearInterval(stop);
    clearInterval(stop2);
    music.pause();
});
var dance = ["frame_00_delay-0.1s.gif", "frame_01_delay-0.1s.gif", "frame_02_delay-0.1s.gif", "frame_03_delay-0.1s.gif", "frame_04_delay-0.1s.gif", "frame_05_delay-0.1s.gif", "frame_06_delay-0.1s.gif", "frame_07_delay-0.1s.gif", "frame_08_delay-0.1s.gif", "frame_09_delay-0.1s.gif", "frame_10_delay-0.1s.gif", "frame_11_delay-0.1s.gif", "frame_12_delay-0.1s.gif", "frame_13_delay-0.1s.gif", "frame_14_delay-0.1s.gif", "frame_15_delay-0.1s.gif", "frame_16_delay-0.1s.gif", "frame_17_delay-0.1s.gif", "frame_18_delay-0.1s.gif", "frame_19_delay-0.1s.gif", "frame_20_delay-0.1s.gif", "frame_21_delay-0.1s.gif", "frame_22_delay-0.1s.gif", "frame_23_delay-0.1s.gif", "frame_24_delay-0.1s.gif", "frame_25_delay-0.1s.gif"]
document.querySelector("#feministaf").src = "frame_01_delay-0.1s.gif";
function change() {
    cur = (cur+1)%26;
    document.querySelector("#feministaf").src = dance[cur];
}
var b = true;
var bigtext = document.querySelector("#gotitle");
function flash() {
    if (b){
        document.body.style.backgroundColor = "black";
        bigtext.style.color = "white";
        b = !b;
    }
    else{
        document.body.style.backgroundColor = "white";
        bigtext.style.color = "black";
        b = !b;
    }

}
var franks = document.querySelector("#numberoffranks").value;
franks = parseInt(franks);
//the kind, helpful duck helped me to debug this
document.querySelector("#frankify").addEventListener("click", function(){
    var franks = document.querySelector("#numberoffranks").value;
    franks = parseInt(franks);
    var elan = Math.round(Math.random()*franks);
    for (let i = 0; i < franks; i++)
    {
          if ((franks > 150)&&(i == elan))
          {
               frank = document.createElement("img");
               frank.src ="elanlavie.jpg";
               document.querySelector("#frankspace").appendChild(frank);
          }
          else
          {
               frank = document.createElement("img");
               frank.src ="feministaf.png";
               document.querySelector("#frankspace").appendChild(frank);
          }
    }
});
document.querySelector("#clear").addEventListener("click", function(){
    document.querySelector("#frankspace").innerHTML = "";
});

