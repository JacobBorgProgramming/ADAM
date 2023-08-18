function headermenu(){

    document.getElementById("topmenu").innerHTML = '<nav class="navbar is-dark" role="navigation" aria-label="main navigation"><div class="navbar-brand"><a class="navbar-item" href="./index.html"><img src="./adam.png" width="112"></a></div><div id="navbarBasicExample" class="navbar-menu"><div class="navbar-start"><a class="navbar-item" href="./index.html">Home</a><a class="navbar-item" href="./mememaker.html">Meme Maker</a><div class="navbar-item has-dropdown is-hoverable"><a class="navbar-link">More</a><div class="navbar-dropdown"><a class="navbar-item" href="./about.html">About</a><a class="navbar-item" href="./changelog.html">Change Log</a><a class="navbar-item" href="https://jborgarts.com/contact.html" target="_blank">Contact</a></div></div></div><div class="navbar-end"><div class="navbar-item"><h4>Algorithmic Discourse And Memeing <span id="version"></span></h4></div></div></div></nav>'
}

function headermenu_new(){

    document.getElementById("topmenu_new").innerHTML = '<nav class="menu"><section><div><a onclick="menubutton()" class="center"><img src="./adamicon_BY_fav.png" width="75px" alt=""></a>  </div></section><div id="menu" style="display: none;" class="is-half center"><p> <a class="button-alt" href="./index.html">Home</a> </p><p> <a class="button-alt" href="./generator.html">Generator</a> <a class="button-alt" href="./mememaker.html">Meme Maker</a></p><p> <a class="button-alt" href="./about.html">About</a> <a class="button-alt" href="./privacy.html">Privacy</a></p></div></nav>'
}



function menubutton() {
  var x = document.getElementById("menu");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
