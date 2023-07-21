function smallest_opensans(){


    document.getElementById("output").style = 'font-size: 8pt; font-family: "Open Sans";'
}


function smaller_opensans(){


    document.getElementById("output").style = 'font-size: 12pt; font-family: "Open Sans";'
}
function bigger_opensans(){


    document.getElementById("output").style = 'font-size: 24pt; font-family: "Open Sans";'
}


//

function smallest_literata(){


    document.getElementById("output").style = 'font-size: 8pt; font-family: "Literata";'
}


function smaller_literata(){


    document.getElementById("output").style = 'font-size: 12pt; font-family: "Literata";'
}
function bigger_literata(){


    document.getElementById("output").style = 'font-size: 24pt; font-family: "Literata";'
}


function smallest_os(){


    document.getElementById("output").style = 'font-size: 8pt; font-family: "Oswald";'
}


function smaller_os(){


    document.getElementById("output").style = 'font-size: 12pt; font-family: "Oswald";'
}
function bigger_os(){


    document.getElementById("output").style = 'font-size: 24pt; font-family: "Oswald";'
}

//

function smallest_Nanum(){


    document.getElementById("output").style = 'font-size: 8pt; font-family: "Nanum Gothic ExtraBold";'
}


function smaller_Nanum(){


    document.getElementById("output").style = 'font-size: 12pt; font-family: "Nanum Gothic ExtraBold";'
}
function bigger_Nanum(){


    document.getElementById("output").style = 'font-size: 24pt; font-family: "Nanum Gothic ExtraBold";'
}

function smallest_mono(){


    document.getElementById("output").style = 'font-size: 8pt; font-family: "Roboto Mono";'
}


function smaller_mono(){


    document.getElementById("output").style = 'font-size: 12pt; font-family: "Roboto Mono";'
}
function bigger_mono(){


    document.getElementById("output").style = 'font-size: 24pt; font-family: "Roboto Mono";'
}




function opensans(){

    document.getElementById("output").style = 'font-family: "Open Sans";'
    document.getElementById("textsize").innerHTML = '<button class="button" onclick="smallest_opensans()">tiny</button><button class="button" onclick="smaller_opensans()">small</button><button class="button" onclick="bigger_opensans()">big</button>'
}

function literata(){


    document.getElementById("output").style = 'font-family: "Literata;'
    document.getElementById("textsize").innerHTML = '<button class="button" onclick="smallest_literata()">tiny</button><button class="button" onclick="smaller_literata()">small</button><button class="button" onclick="bigger_literata()">big</button>'

}

function Nanum_Gothic_ExtraBold(){


    document.getElementById("output").style = 'font-family: "Nanum Gothic ExtraBold";'
    document.getElementById("textsize").innerHTML = '<button class="button" onclick="smallest_Nanum()">tiny</button><button class="button" onclick="smaller_Nanum()">small</button><button class="button" onclick="bigger_Nanum()">big</button>'

}

function Roboto_Mono(){


    document.getElementById("output").style = 'font-family: "Roboto Mono";'
    document.getElementById("textsize").innerHTML = '<button class="button" onclick="smallest_mono()">tiny</button><button class="button" onclick="smaller_mono()">small</button><button class="button" onclick="bigger_mono()">big</button>'

}


function Oswald(){


    document.getElementById("output").style = 'font-family: "Oswald";'
    document.getElementById("textsize").innerHTML = '<button class="button" onclick="smallest_os()">tiny</button><button class="button" onclick="smaller_os()">small</button><button class="button" onclick="bigger_os()">big</button>'

}

function change_size(){
    
    size = document.getElementById("textsizeinput").value
    document.getElementById("output").style = 'font-size:' + size+';'

}

function light(){
    

    document.getElementById("meme").style = 'meme'
    document.getElementById("mode").innerHTML = '<button onclick="dark()">Dark</button>'

}

function dark(){
    
    document.getElementById("meme").class = 'meme_dark'
    document.getElementById("mode").innerHTML = '<button onclick="light()">Light</button>'


}



function oswald2(){
    document.getElementById("fontcontrol").style = 'font-family: "Oswald";'

}

function OpenSans2(){
    document.getElementById("fontcontrol").style = 'font-family: "Open Sans";'

}

function Literata2(){
    document.getElementById("fontcontrol").style = 'font-family: "Literata";'

}

function Roboto_Mono2(){
    document.getElementById("fontcontrol").style = 'font-family: "Roboto Mono";'

}

function Textura2(){
    document.getElementById("fontcontrol").style = 'font-family: "Textura";'

}

function OpenDyslexic2(){
    document.getElementById("fontcontrol").style = 'font-family: "OpenDyslexic Bold"; '

}


function change_size2(){
    
    size = document.getElementById("textsizeinput").value
    document.getElementById("output").style = 'font-size:' + size+';'
    document.getElementById("output2").style = 'font-size:' + size+';'

}

function center(){
    document.getElementById("output").class = 'top'
    document.getElementById("output2").class = 'bottom'
}

function left(){
    document.getElementById("output").class = 'top-left'
    document.getElementById("output2").class = 'bottom-left'
}

function whitetext(){
    document.getElementById("memecontent").style = 'color: #ffffff; -webkit-text-stroke-width: 0.1px; -webkit-text-stroke-color: #1a1a1a;'

}

function blacktext(){
    document.getElementById("memecontent").style = 'color: #1a1a1a; -webkit-text-stroke-width: 0.1px; -webkit-text-stroke-color: #ffffff;'

}


var slider = document.getElementById("myRange");
slider.oninput = function() {
    
    positioncontrol.style = 'top: '+this.value+'px;';
  } 

  var slider2 = document.getElementById("myRange2");
slider2.oninput = function() {
    
    output.style = 'left: '+this.value+'px;';
  } 

  function setpo(){
    
    y = document.getElementById("textyinput").value
    x = document.getElementById("textxinput").value
    document.getElementById("positioncontrol").style = 'left:' + x+';'+'top:' + y+';'


    y2 = document.getElementById("textyinput2").value
    x2 = document.getElementById("textxinput2").value
    document.getElementById("positioncontrol2").style = 'left:' + x+';'+'top:' + y+';'

}
