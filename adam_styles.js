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
    document.getElementById("textsize").innerHTML = '<button onclick="smallest_opensans()">tiny</button><button onclick="smaller_opensans()">small</button><button onclick="bigger_opensans()">big</button>'
}

function literata(){


    document.getElementById("output").style = 'font-family: "Literata;'
    document.getElementById("textsize").innerHTML = '<button onclick="smallest_literata()">tiny</button><button onclick="smaller_literata()">small</button><button onclick="bigger_literata()">big</button>'

}

function Nanum_Gothic_ExtraBold(){


    document.getElementById("output").style = 'font-family: "Nanum Gothic ExtraBold";'
    document.getElementById("textsize").innerHTML = '<button onclick="smallest_Nanum()">tiny</button><button onclick="smaller_Nanum()">small</button><button onclick="bigger_Nanum()">big</button>'

}

function Roboto_Mono(){


    document.getElementById("output").style = 'font-family: "Roboto Mono";'
    document.getElementById("textsize").innerHTML = '<button onclick="smallest_mono()">tiny</button><button onclick="smaller_mono()">small</button><button onclick="bigger_mono()">big</button>'

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