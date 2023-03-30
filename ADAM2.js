/* © Jacob Borg 2023 */


function versionm(){

    versionnum = 'a2.0.0'
    libversionnum = '1.0.7'
    ttemplates = templates_g.length+templates_b.length+templates_q.length+templates_r.length+templates_c.length+templates_chad.length
    console.log(versionnum)
    

    console.log('Template Index: '+ttemplates)
    console.log('Index Version: '+libversionnum)
    console.log('© Jacob Borg 2023')
    console.log('- - -')
    document.getElementById("version").innerHTML = versionnum
    document.getElementById("version2").innerHTML = versionnum
}

var templates = Array('./memetemplates/libertydoge.jpeg','./memetemplates/jbquestions.053.jpeg','./memetemplates/djtletsgo.jpeg','./memetemplates/hyperkyle.jpeg','./memetemplates/fauciexplains.039.png','./memetemplates/trashlegs.jpeg','./memetemplates/cryjack.jpeg','./memetemplates/gasonfire.jpeg','./memetemplates/resume.jpeg','./memetemplates/volume.jpeg','./memetemplates/crusadergasp.png','./memetemplates/waddles.jpeg','./memetemplates/spongehappy.jpeg','./memetemplates/spongelaugh.jpeg','./memetemplates/ohyea.jpeg','./memetemplates/jimwatch.jpeg','./memetemplates/fancypooh.jpeg','./memetemplates/frogsmirk.jpeg','./memetemplates/frogsmile.jpeg','./memetemplates/djthappy.jpeg','./memetemplates/dontdoitagaingiga.png','./memetemplates/sadjoe.webp','./memetemplates/johncena.png','./memetemplates/thisisfine.jpeg','./memetemplates/thewhat.jpeg','./memetemplates/panickelmo.jpeg','./memetemplates/madarthur.jpeg','./memetemplates/madfish.jpeg','./memetemplates/madmonke.jpeg','./memetemplates/madpat.jpeg','./memetemplates/knifesquirrel.jpeg','./memetemplates/leavingsponge.jpeg','./memetemplates/krabspanic.jpeg','./memetemplates/crusadetime.jpeg','./memetemplates/frograge.jpeg','./memetemplates/disturbsquid.jpeg','./memetemplates/bert.jpeg','./memetemplates/burnskeleton.jpeg','./memetemplates/aaa.jpeg','./memetemplates/johncena.png','./memetemplates/mygoals.jpeg','./memetemplates/mike.jpeg','./memetemplates/jones.jpg','./memetemplates/calculateglow.jpeg','./memetemplates/calculate.jpeg','./memetemplates/confused.jpeg','./memetemplates/spongewhat.jpeg','./memetemplates/whatcat.jpeg','./memetemplates/jbquestions.053.jpeg','./memetemplates/whatjack.jpeg','./memetemplates/holup.jpeg','./memetemplates/confusedcat.jpeg');

//good
var templates_g = Array('./memetemplates/mjsmile.jpeg','./memetemplates/cappy.jpeg','./memetemplates/smartfrog.png','./memetemplates/djtfrog.jpeg','./memetemplates/djtcorrects.jpeg','./memetemplates/wojacklook.png','./memetemplates/derpcat.jpeg','./memetemplates/happypossum.jpeg','./memetemplates/exciteddjt.jpeg','./memetemplates/pooh.jpeg','./memetemplates/volume.jpeg','./memetemplates/crusadergasp.png','./memetemplates/waddles.jpeg','./memetemplates/spongehappy.jpeg','./memetemplates/spongelaugh.jpeg','./memetemplates/ohyea.jpeg','./memetemplates/jimwatch.jpeg','./memetemplates/fancypooh.jpeg','./memetemplates/frogsmirk.jpeg','./memetemplates/frogsmile.jpeg','./memetemplates/djthappy.jpeg');

//bad
var templates_b = Array('./memetemplates/sadfrog.jpeg','./memetemplates/angrygnome.jpeg','./memetemplates/ozzywat.jpeg','./memetemplates/planktonyell.jpeg','./memetemplates/rockstop.jpeg','./memetemplates/cry.jpeg','./memetemplates/cappy.jpeg','./memetemplates/sadstitch.jpeg','./memetemplates/chyna.jpeg','./memetemplates/mjbothered.jpeg','./memetemplates/ronaldpain.png','./memetemplates/blueyreaction.png','./memetemplates/patrickinternalrage.jpeg','./memetemplates/ghost.png','./memetemplates/djtcringe.jpeg','./memetemplates/yelljack.png','./memetemplates/possumrage.png','./memetemplates/planktonrage.jpeg','./memetemplates/hmmm.jpeg','./memetemplates/dontlikesound.jpeg','./memetemplates/everythingisfinefish.jpeg','./memetemplates/fakenews.jpeg','./memetemplates/fedfish.jpeg','./memetemplates/grumpycat.jpeg','./memetemplates/muskgun.jpeg','./memetemplates/rageturtle.jpeg','./memetemplates/realsponge.jpeg','./memetemplates/powerofthesun.jpeg','./memetemplates/screaminjoeglowred.jpeg','./memetemplates/soidpanick.jpeg','./memetemplates/thanksreconsider.jpeg','./memetemplates/tableflip.jpeg','./memetemplates/sus.jpeg','./memetemplates/kfcnuggets.png','./memetemplates/screaminglib.017.png','./memetemplates/dontdoitagaingiga.png','./memetemplates/sadjoe.webp','./memetemplates/johncena.png','./memetemplates/thisisfine.jpeg','./memetemplates/thewhat.jpeg','./memetemplates/panickelmo.jpeg','./memetemplates/madarthur.jpeg','./memetemplates/madfish.jpeg','./memetemplates/madmonke.jpeg','./memetemplates/madpat.jpeg','./memetemplates/knifesquirrel.jpeg','./memetemplates/leavingsponge.jpeg','./memetemplates/krabspanic.jpeg','./memetemplates/crusadetime.jpeg','./memetemplates/frograge.jpeg','./memetemplates/disturbsquid.jpeg','./memetemplates/bert.jpeg','./memetemplates/burnskeleton.jpeg','./memetemplates/aaa.jpeg');

//questioning
var templates_q = Array('./memetemplates/cappy.jpeg','./memetemplates/dewaeconfused.jpeg','./memetemplates/djtcringe.jpeg','./memetemplates/planktonhands.jpeg','./memetemplates/johncena.png','./memetemplates/mygoals.jpeg','./memetemplates/mike.jpeg','./memetemplates/jones.jpg','./memetemplates/calculateglow.jpeg','./memetemplates/calculate.jpeg','./memetemplates/confused.jpeg','./memetemplates/spongewhat.jpeg','./memetemplates/whatcat.jpeg','./memetemplates/jbquestions.053.jpeg','./memetemplates/whatjack.jpeg','./memetemplates/holup.jpeg','./memetemplates/confusedcat.jpeg');

//rage
var templates_r = Array('./memetemplates/sbfplot.jpeg','./memetemplates/gnomerevolt.jpeg','./memetemplates/planktonevil.png','./memetemplates/crusaderage.jpeg','./memetemplates/ragindewae.jpeg','./memetemplates/ronaldpain.png','./memetemplates/patrickinternalrage.jpeg','./memetemplates/possumrage.png','./memetemplates/planktonrage.jpeg','./memetemplates/kermitrage.jpeg','./memetemplates/hyperkyle.jpeg','./memetemplates/frograge.jpeg','./memetemplates/ernie.jpeg');

//conspiracy
var templates_c = Array('./memetemplates/sbfplot.jpeg','./memetemplates/planktonevil.png','./memetemplates/npccrowd.jpeg','./memetemplates/wizardorb.jpeg','./memetemplates/conspiracytom.jpeg','./memetemplates/1984.jpeg','./memetemplates/zurgreading.png','./memetemplates/ponder.jpeg','./memetemplates/fakenews.jpeg','./memetemplates/calculate.jpeg','./memetemplates/conspiracyal.jpeg')

//chad
var templates_chad = Array('./memetemplates/chadbateman.png','./memetemplates/patphone.png','./memetemplates/patsmile.jpeg','./memetemplates/stillerbased.jpeg','./memetemplates/basedpat.jpeg','./memetemplates/patmusic.jpeg','./memetemplates/benglow.jpeg')
// './memetemplates/sbfplot.jpeg',
//Big Brain
var templates_bigbrain = Array('./memetemplates/smartsponge.jpeg','./memetemplates/timglow.jpeg','./memetemplates/','./memetemplates/ragindewae.jpeg','./memetemplates/calculateglow.jpeg','./memetemplates/universemind.jpeg',)




var emotions = Array('good');
var topics = Array('feds');
var perspectives = Array('fp','tp');


function ADAM2(){
    var template = templates[Math.floor(Math.random()*templates.length)];

    var template_g = templates_g[Math.floor(Math.random()*templates_g.length)];
    
    var template_b = templates_b[Math.floor(Math.random()*templates_b.length)];
    
    var template_q = templates_q[Math.floor(Math.random()*templates_q.length)];
    
    var template_r = templates_r[Math.floor(Math.random()*templates_r.length)];

    
    document.getElementById("watermark").src = './adamwatermark.png'

    var topic = topics[Math.floor(Math.random()*topics.length)];
    console.log(topic)

    if (topic=='feds') {

        
        var perspective = perspectives[Math.floor(Math.random()*perspectives.length)];
        console.log(perspective)
        if (perspective=='fp') {

            var emotion = emotions[Math.floor(Math.random()*emotions.length)];
            console.log(emotion)
    
            if (emotion=='good'){
                var i = 'I '
                var punches = Array('','');
                var punch = punches[Math.floor(Math.random()*punches.length)];
    
                var subjects = Array('my agent when ','my agent be like ');
                var subject = subjects[Math.floor(Math.random()*subjects.length)];
    
                document.getElementById("outputtext").innerHTML = perspective
    
                document.getElementById("memebg").src = template_g
    
    
            }
        }

        if (perspective=='tp') {

            var emotion = emotions[Math.floor(Math.random()*emotions.length)];
            console.log(emotion)
    
            if (emotion=='good'){

                var punches = Array('when ','be like ');
                var punch = punches[Math.floor(Math.random()*punches.length)];
    
                var subjects = Array('my agent when ','FEDs when ','be like ');
                var subject = subjects[Math.floor(Math.random()*subjects.length)];
    
                document.getElementById("outputtext").innerHTML = perspective
    
                document.getElementById("memebg").src = template_g
    
    
            }
        }




    }else{
        document.getElementById("outputtext").innerHTML = 'Uh oh, I have wandered into the void!'

        document.getElementById("memebg").src = './adamwatermark.png'
    }








    
    

}