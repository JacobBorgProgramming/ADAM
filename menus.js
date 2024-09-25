function memeMenu(){

    //Menu Row 1//
    document.getElementById("memeMenu").innerHTML = '<div class="btn-group" style="padding-bottom: 15px" role="group" aria-label="Basic example"><a href="./memelab.html" type="button" class="btn btn-dark">Border Text</a><a href="./memelab-classic.html" type="button" class="btn btn-dark">Classic</a><a href="./memelab-1x2.html" type="button" class="btn btn-dark">1x2</a> <!-- is not ready <a href="./memelab-2x1.html" type="button" class="btn btn-dark">2x1</a>-->'



}

function fontMenu(){

    //Menu Row 1//
    document.getElementById("fontMenuR1").innerHTML = '<button class="btn btn-link" style="font-family: Open Sans;" onclick="OpenSans2()">Open Sans</button><button class="btn btn-link" style="font-family: Roboto Mono;" onclick="Roboto_Mono2()">Roboto Mono</button><button class="btn btn-link" style="font-family: OpenDyslexic Bold;" onclick="OpenDyslexic2()">Open Dyslexic</button>'


    //Menu Row 2//
    document.getElementById("fontMenuR2").innerHTML = '<p><button class="btn btn-link" style="font-family: Oswald;" onclick="oswald2()">Oswald</button><button class="btn btn-link" style="font-family: Merriweather;" onclick="Merriweather2()">Merriweather</button><button class="btn btn-link" style="font-family: American Text;" onclick="American2()">American</button></p> '


}

function footermenu_new(){

    document.getElementById("footermenu").innerHTML = '<div style="padding:25px; background-color: #fed000; margin-top:25px;"><ul class="nav justify-content-center"><li class="nav-item"><img src="./adamicon_BY_fav.png" width="70px" alt=""></li></ul><ul class="nav justify-content-center"><li class="nav-item"><a style="color:#1a1a1a;" class="nav-link" aria-current="page" href="./generator.html">Generator</a></li><li class="nav-item"><a style="color:#1a1a1a;" class="nav-link" href="./memelab.html">MemeLab</a></li><li class="nav-item"><a style="color:#1a1a1a;" class="nav-link" href="./about.html">About</a></li><li class="nav-item"><a style="color:#1a1a1a;" class="nav-link" href="./changelog.html">Change Log</a></li><li class="nav-item"><a style="color:#1a1a1a;" class="nav-link" target="_blank" href="https://twitter.com/adammemeapp">Twitter</a></li><li class="nav-item"><a style="color:#1a1a1a;" class="nav-link" href="./privacy.html">Privacy</a></li><li class="nav-item"><a style="color:#1a1a1a;" class="nav-link" target="_blank" href="https://github.com/JacobBorgProgramming/ADAM/issues">Issues</a></li></ul> <p style="text-align: center;">©Jacob Borg 2023</p> </div>'

}

function headermenu_new(){

    document.getElementById("topmenu_new").innerHTML = '<nav class="navbar navbar-expand-lg" style="background-color: #fed000;"><div class="container-fluid"><a class="navbar-brand" href="./index.html"> <img src="./adamicon_BY_fav.png" width="70px" alt=""> </a><button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button><div class="collapse navbar-collapse" id="navbarNav"><ul class="navbar-nav"><li class="nav-item"><a class="nav-link" aria-current="page" href="./generator.html">Generator</a></li><li class="nav-item"><a class="nav-link" href="./memelab.html">MemeLab</a></li><li class="nav-item"><a class="nav-link" href="./about.html">About</a></li><li class="nav-item"><a class="nav-link" href="./privacy.html">Privacy</a></li></ul></div></div></nav>'
}



function menubutton() {
  var x = document.getElementById("menu");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
