function headermenu(){

    document.getElementById("topmenu").innerHTML = '<nav class="navbar is-dark" role="navigation" aria-label="main navigation"><div class="navbar-brand"><a class="navbar-item" href="./index.html"><img src="./adam.png" width="112"></a></div><div id="navbarBasicExample" class="navbar-menu"><div class="navbar-start"><a class="navbar-item" href="./index.html">Home</a><a class="navbar-item" href="./mememaker.html">Meme Maker</a><div class="navbar-item has-dropdown is-hoverable"><a class="navbar-link">More</a><div class="navbar-dropdown"><a class="navbar-item" href="./about.html">About</a><a class="navbar-item" href="./changelog.html">Change Log</a><a class="navbar-item" href="https://jborgarts.com/contact.html" target="_blank">Contact</a></div></div></div><div class="navbar-end"><div class="navbar-item"><h4>Algorithmic Discourse And Memeing <span id="version"></span></h4></div></div></div></nav>'
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
