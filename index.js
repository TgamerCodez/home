<html lang="en">
<head>
<meta charset="UTF-8">
<link rel="shortcut icon" type="image/x-icon" href="https://static.codepen.io/assets/favicon/favicon-aec34940fbc1a6e787974dcd360f2c6b63348d4b1f4e06c77743096d55480f33.ico" />
<link rel="mask-icon" type="" href="https://static.codepen.io/assets/favicon/logo-pin-8f3771b1072e3c38bd662872f6b673a722f4b3ca2421637d5596661b4e2132cc.svg" color="#111" />
<title>CodePen - HTML 5 Play Sound Button</title>
<style>
    @import "compass/css3";

body{
   text-align:center;
   padding:10%;
   background: #1b1b1b;
   font-family: 'Roboto', sans-serif;
}
.btn{
   cursor:pointer;
   display:inline-block;
   padding:30px;
   background: #94a657;
   border-radius: 4px;
   color: #fff;
   text-transform:uppercase;
   line-height:20px;
   @include transition(box-shadow .25s ease);
   &:after{
      content:'';
      display:inline-block;
      color: #94a657;
      background:#fff;
      font-family: 'FontAwesome';
      padding:3px;
      border-radius: 50%;
      height:20px;
      width:20px;
      margin-left:8px;
      padding-left: 4.5px;
      padding-right:1.5px;
   }
   &.playing{
       &:after{
         padding:3px;
         content:'';
      }
   }
}
  </style>
<script>
  window.console = window.console || function(t) {};
</script>
<script>
  if (document.location.search.match(/type=embed/gi)) {
    window.parent.postMessage("resize", "*");
  }
</script>
</head>
<body translate="no">
<audio id="nyan" src="https://designshack.net/tutorialexamples/html5-audio-player/media/evidence-song.mp3" preload="metadata" type="audio/mpeg">
Your browser does not support the audio element.
</audio>
<a class="btn" id="nyan-btn">play / pause</a>
<script src="https://static.codepen.io/assets/common/stopExecutionOnTimeout-de7e2ef6bfefd24b79a3f68b414b87b8db5b08439cac3f1012092b2290c719cd.js"></script>
<script id="rendered-js">
      var nyan = document.getElementById('nyan');
var nyanBtn = document.getElementById('nyan-btn');

function playPause(song) {
  if (song.paused && song.currentTime >= 0 && !song.ended) {
    song.play();
  } else {
    song.pause();
  }
}

function reset(btn, song) {
  if (btn.classList.contains('playing')) {
    btn.classList.toggle('playing');
  }
  song.pause();
  song.currentTime = 0;
}

function progress(btn, song) {
  setTimeout(function () {
    var end = song.duration;
    var current = song.currentTime;
    var percent = current / (end / 100);
    //check if song is at the end
    if (current == end) {
      reset(btn, song);
    }
    //set inset box shadow
    btn.style.boxShadow = "inset " + btn.offsetWidth * (percent / 100) + "px 0px 0px 0px rgba(0,0,0,0.125)";
    //call function again
    progress(btn, song);
  }, 1000);
}

nyanBtn.addEventListener('click', function () {
  nyanBtn.classList.toggle('playing');
  playPause(nyan);
  progress(nyanBtn, nyan);
});
      //# sourceURL=pen.js
    </script>
</body>
</html>

}

nyanBtn.addEventListener('click', function(){
   nyanBtn.classList.toggle('playing');
   playPause(nyan);
   progress(nyanBtn, nyan);
});

