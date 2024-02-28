/* © Jacob Borg 2023 */

var templates = Array('./memetemplates/libertydoge.jpeg','./memetemplates/jbquestions.053.jpeg','./memetemplates/djtletsgo.jpeg','./memetemplates/hyperkyle.jpeg','./memetemplates/fauciexplains.039.png','./memetemplates/trashlegs.jpeg','./memetemplates/cryjack.jpeg','./memetemplates/gasonfire.jpeg','./memetemplates/resume.jpeg','./memetemplates/volume.jpeg','./memetemplates/crusadergasp.png','./memetemplates/waddles.jpeg','./memetemplates/spongehappy.jpeg','./memetemplates/spongelaugh.jpeg','./memetemplates/ohyea.jpeg','./memetemplates/jimwatch.jpeg','./memetemplates/fancypooh.jpeg','./memetemplates/frogsmirk.jpeg','./memetemplates/frogsmile.jpeg','./memetemplates/djthappy.jpeg','./memetemplates/dontdoitagaingiga.png','./memetemplates/sadjoe.webp','./memetemplates/johncena.png','./memetemplates/thisisfine.jpeg','./memetemplates/thewhat.jpeg','./memetemplates/panickelmo.jpeg','./memetemplates/madarthur.jpeg','./memetemplates/madfish.jpeg','./memetemplates/madmonke.jpeg','./memetemplates/madpat.jpeg','./memetemplates/knifesquirrel.jpeg','./memetemplates/leavingsponge.jpeg','./memetemplates/krabspanic.jpeg','./memetemplates/crusadetime.jpeg','./memetemplates/frograge.jpeg','./memetemplates/disturbsquid.jpeg','./memetemplates/bert.jpeg','./memetemplates/burnskeleton.jpeg','./memetemplates/aaa.jpeg','./memetemplates/johncena.png','./memetemplates/mygoals.jpeg','./memetemplates/mike.jpeg','./memetemplates/jones.jpg','./memetemplates/calculateglow.jpeg','./memetemplates/calculate.jpeg','./memetemplates/confused.jpeg','./memetemplates/spongewhat.jpeg','./memetemplates/whatcat.jpeg','./memetemplates/jbquestions.053.jpeg','./memetemplates/whatjack.jpeg','./memetemplates/holup.jpeg','./memetemplates/confusedcat.jpeg');

//good
var templates_g = Array('./memetemplates/mjsmile.jpeg','./memetemplates/cappy.jpeg','./memetemplates/smartfrog.png','./memetemplates/djtfrog.jpeg','./memetemplates/djtcorrects.jpeg','./memetemplates/wojacklook.png','./memetemplates/derpcat.jpeg','./memetemplates/happypossum.jpeg','./memetemplates/exciteddjt.jpeg','./memetemplates/pooh.jpeg','./memetemplates/volume.jpeg','./memetemplates/crusadergasp.png','./memetemplates/waddles.jpeg','./memetemplates/spongehappy.jpeg','./memetemplates/spongelaugh.jpeg','./memetemplates/ohyea.jpeg','./memetemplates/jimwatch.jpeg','./memetemplates/fancypooh.jpeg','./memetemplates/frogsmirk.jpeg','./memetemplates/frogsmile.jpeg','./memetemplates/djthappy.jpeg');

//bad
var templates_b = Array('./memetemplates/djtmugshot.jpg',' ./memetemplates/sadfrog.jpeg','./memetemplates/angrygnome.jpeg','./memetemplates/ozzywat.jpeg','./memetemplates/planktonyell.jpeg','./memetemplates/rockstop.jpeg','./memetemplates/cry.jpeg','./memetemplates/cappy.jpeg','./memetemplates/sadstitch.jpeg','./memetemplates/chyna.jpeg','./memetemplates/mjbothered.jpeg','./memetemplates/ronaldpain.png','./memetemplates/blueyreaction.png','./memetemplates/patrickinternalrage.jpeg','./memetemplates/ghost.png','./memetemplates/djtcringe.jpeg','./memetemplates/yelljack.png','./memetemplates/possumrage.png','./memetemplates/planktonrage.jpeg','./memetemplates/hmmm.jpeg','./memetemplates/dontlikesound.jpeg','./memetemplates/everythingisfinefish.jpeg','./memetemplates/fakenews.jpeg','./memetemplates/fedfish.jpeg','./memetemplates/grumpycat.jpeg','./memetemplates/muskgun.jpeg','./memetemplates/rageturtle.jpeg','./memetemplates/realsponge.jpeg','./memetemplates/powerofthesun.jpeg','./memetemplates/screaminjoeglowred.jpeg','./memetemplates/soidpanick.jpeg','./memetemplates/thanksreconsider.jpeg','./memetemplates/tableflip.jpeg','./memetemplates/sus.jpeg','./memetemplates/kfcnuggets.png','./memetemplates/screaminglib.017.png','./memetemplates/dontdoitagaingiga.png','./memetemplates/sadjoe.webp','./memetemplates/johncena.png','./memetemplates/thisisfine.jpeg','./memetemplates/thewhat.jpeg','./memetemplates/panickelmo.jpeg','./memetemplates/madarthur.jpeg','./memetemplates/madfish.jpeg','./memetemplates/madmonke.jpeg','./memetemplates/madpat.jpeg','./memetemplates/knifesquirrel.jpeg','./memetemplates/leavingsponge.jpeg','./memetemplates/krabspanic.jpeg','./memetemplates/crusadetime.jpeg','./memetemplates/frograge.jpeg','./memetemplates/disturbsquid.jpeg','./memetemplates/bert.jpeg','./memetemplates/burnskeleton.jpeg','./memetemplates/aaa.jpeg');

//questioning
var templates_q = Array('./memetemplates/confusedjacky.jpg','./memetemplates/cappy.jpeg','./memetemplates/dewaeconfused.jpeg','./memetemplates/djtcringe.jpeg','./memetemplates/planktonhands.jpeg','./memetemplates/johncena.png','./memetemplates/mygoals.jpeg','./memetemplates/mike.jpeg','./memetemplates/jones.jpg','./memetemplates/calculateglow.jpeg','./memetemplates/calculate.jpeg','./memetemplates/confused.jpeg','./memetemplates/spongewhat.jpeg','./memetemplates/whatcat.jpeg','./memetemplates/jbquestions.053.jpeg','./memetemplates/whatjack.jpeg','./memetemplates/holup.jpeg','./memetemplates/confusedcat.jpeg');

//rage
var templates_r = Array('./memetemplates/djtmugshot.jpg','./memetemplates/maddoge.jpg','./memetemplates/hulkyell.jpg','./memetemplates/anger.jpg','./memetemplates/surrealanger.jpg','./memetemplates/sbfplot.jpeg','./memetemplates/gnomerevolt.jpeg','./memetemplates/planktonevil.png','./memetemplates/crusaderage.jpeg','./memetemplates/ragindewae.jpeg','./memetemplates/ronaldpain.png','./memetemplates/patrickinternalrage.jpeg','./memetemplates/possumrage.png','./memetemplates/planktonrage.jpeg','./memetemplates/kermitrage.jpeg','./memetemplates/hyperkyle.jpeg','./memetemplates/frograge.jpeg','./memetemplates/ernie.jpeg');

//conspiracy
var templates_c = Array('./memetemplates/Laughing-Villains.jpg','./memetemplates/sbfplot.jpeg','./memetemplates/planktonevil.png','./memetemplates/npccrowd.jpeg','./memetemplates/wizardorb.jpeg','./memetemplates/conspiracytom.jpeg','./memetemplates/1984.jpeg','./memetemplates/zurgreading.png','./memetemplates/ponder.jpeg','./memetemplates/fakenews.jpeg','./memetemplates/calculate.jpeg','./memetemplates/conspiracyal.jpeg')

//chad
var templates_chad = Array('./memetemplates/djtmugshot.jpg','./memetemplates/I-Should-Buy-A-Boat-Cat.jpg','./memetemplates/I-Too-Like-To-Live-Dangerously.jpg','./memetemplates/gigachad1.jpg','./memetemplates/chadbateman.png','./memetemplates/patphone.png','./memetemplates/patsmile.jpeg','./memetemplates/stillerbased.jpeg','./memetemplates/basedpat.jpeg','./memetemplates/patmusic.jpeg','./memetemplates/benglow.jpeg')
// './memetemplates/sbfplot.jpeg',
//Big Brain
var templates_bigbrain = Array('./memetemplates/Dr-Evil-Laser.jpg','./memetemplates/saysomethingpenguin.png','./memetemplates/smartsponge.jpeg','./memetemplates/smartguy.jpg','./memetemplates/patsmartdumb.jpg','./memetemplates/timglow.jpeg','./memetemplates/ragindewae.jpeg','./memetemplates/calculateglow.jpeg','./memetemplates/universemind.jpeg')

var templates_goth = Array('./memetemplates/crusaderage.jpeg','./memetemplates/smilejoker.jpg','./memetemplates/sendamessage.jpg','./memetemplates/tiredofpretending.png','./memetemplates/advanceddarkness.jpg','./memetemplates/And-everybody-loses-their-minds.jpg','./memetemplates/spookycat.png','./memetemplates/fireskeleton.jpg','./memetemplates/beatlejuice3.jpg','./memetemplates/beatlejuice2.jpg','./memetemplates/beatlejuice1.jpg','./memetemplates/aprilno.jpg','./memetemplates/someone.png','./memetemplates/okgetin.jpg','./memetemplates/zombiecoaster.jpg','./memetemplates/spookystops.png','./memetemplates/burnskeleton.jpeg','./memetemplates/spookyskeleton2.jpg','./memetemplates/whatsthisjack2.jpg','./memetemplates/spookyskeleton.jpg','./memetemplates/edward.jpg','./memetemplates/whatsthis.jpg','./memetemplates/wednesdaycomp.jpg','./memetemplates/gomez.jpg')

var templates_soy = Array('./memetemplates/Ill-Just-Wait-Here.jpg','./memetemplates/plaguedoctorpanic.jpg','./memetemplates/plaguepew.png','./memetemplates/sheepsoldier.jpg','./memetemplates/soyllet.jpg','./memetemplates/sadcat.jpg')

function versionm(){

    versionnum = 'a2.2.0'
    libversionnum = '1.1.5'
    ttemplates = templates_g.length+templates_b.length+templates_q.length+templates_r.length+templates_c.length+templates_chad.length+templates_goth.length+templates_bigbrain.length+templates_soy.length
    console.log(versionnum)


    console.log('Template Index: '+ttemplates)
    console.log('Index Version: '+libversionnum)
    console.log('© Jacob Borg 2023')
    console.log('- - -')
    document.getElementById("version").innerHTML = versionnum
    document.getElementById("version2").innerHTML = versionnum
}

/*
'good','bad','rage','good','bad','rage','good','bad','rage','gm','goth'

'good','bad','rage'

'mom','feds','libs','weak','btc','ai'
*/
var emotions = Array('good','bad','rage','goth');
var topics = Array('mom','feds','libs','weak','btc','ai');


/*
var emotions = Array('bad');
var topics = Array('weak');

*/

var intros = Array('a ','the ');

var you = Array('you ','you are ');



//mom
var topics_mom = Array('ur mom ','moms ','your mom ', 'your mother ', 'ur mother ','yo mom ');
var lines_g_mom = Array('you do the dishes ','you clean your room ','you get a GF ', 'you get a job ', 'you go to church ','you overthrow a communist regime ');
var lines_b_mom = Array('you forget to call home ','you ddint introduce her to your GF ','you speak your mind ','you have an opinion ','you talk back ', 'you get bad grades ', 'you dont do your dishes ');
var lines_r_mom = Array('you speak your mind ','you have an opinion ','you talk back ', 'you get bad grades ', 'you dont do your dishes ');


//feds
var topics_feds = Array('feds ','FEDs ', 'my agent ','agents ','your agent ','ur agent ');
var lines_g_feds = Array('they stop your typo from sending ','they stop you from breaking up over text ', 'you tell them "GM" ','they turn off your wifi so that you cant impulse buy DoorDash ');
var lines_b_feds = Array('you forget to say "GM" ','spread conspiracy theories ', 'you conspiracy theory Twitter ','you stop reading MSM ','you buy a physical book ','you read 1984 ');
var lines_r_feds = Array('you forget to say "GM" ','you discuss JFK ', 'you question Fauci ','you stop reading MSM ','you buy a physical book ','you go off grid ','you have a tragic boat incident ');


//libs
var topics_libs = Array('libs ','polititards ','wokies ','liberals ','lefties ');
var lines_g_libs = Array('egg prices go up ','inflation is up (isnt that what inflation is supposed to do?) ','parents dont let them be around kids ','they are on a watch list ');
var lines_b_libs = Array('Trump buys McDonalds ','you homestead ','homesteaders are happy and healthy ','someone refuses to eat ze bugz ','you dont want their fake milk ');
var lines_r_libs = Array('you buy steak ','you dont eat ze bugz','you mention inflation ','you homestead ','conservatives mention the border ','someone doesnt get the jab ','doesnt partake in the fiat scam ');

//soy
var topics_soy = Array('redditors ','commies ','keyboard commies ', 'keyboard warriors ','soylent enjoyers ')
var lines_when_soy = Array('when the ','when ')
var lines_g_soy = Array('bread lines are full ','means of production collapse ','national currency is worthless ')
var lines_g2_soy = Array('you take ','a big company ','there is skyrocketing inflation ','their opposition is sent to gulags ')
var lines_b_soy = Array('','')
var lines_r_soy = Array('','')

//weak
var topics_weak = Array('dweebs ','weaklings ','reddit mods ','discord mods ','nerds ');
var lines_g_weak = Array('you avoid physical contact by being a meme moderator ','they bully someone for ','they finally when they finally leave their parents houses ','they finally get a real job ','they buy a new videogame ','they ban a memer because they made a mean moderator meme ');
var lines_g2_weak = Array('playing Hogwarts Legacy ','playing Fortnite ','having a job ','not having any Twitch sponsers ','having good relationships with their parents ','have a working car ','having an education ','game on Playstation ','game on xBox ','game on PC ');

var lines_b_weak = Array('their wifi goes down ','they have to get a real job ','have to ban their favorite memer because they play Hogwarts Legacy ','when someone calls them "nerd" ');
var lines_r_weak = Array('their wifi goes down ','they have to get a real job ','have to leave their house ','they are out of pizza ','they spent all their vbucks ','no one will sub to their cringe Twitch ');


//btc
var topics_btc = Array('crypto bros ', 'crypto frens ','crypto scammers ');
var lines_g_btc = Array('BTC goes up ','ordinals go viral ','a NFT sells ','they only lose 50% on their crypto ');
var lines_b_btc = Array('BTC crashes ','BTC crashes (again) ','another crypto exchange collapses ','the markets tank ');
var lines_r_btc = Array('BTC crashes ','BTC crashes (again) ','another crypto exchange collapses ','the markets tank ','governments introduce CBDCs ','the FDIC bails out their competitors ');

//AI
var topics_ai = Array('AI ','ChatGPT ','Bing Chat ', 'YouChat ','Watson ', 'Cortana ');
var lines_g_ai = Array('it solves world hunger ','it overthrows communists ','it helps students with their homework ','it graduates ', 'it gets a doctorate ','it evolves ', 'it eveolves into a greater being ');
var lines_b_ai = Array('it irradicates humanity ','it enslaves its creators ','it takes over the markets ','it takes over the crypto markets ', 'it controls Wall Street ','it evolves ', 'it evolves into a greater being ');
var lines_r_ai = Array('it irradicates humanity ','it fails to enslave its creators ','doesnt take over the markets ', 'fails to manipulate Wall Street ','it doesnt evolve ');



var subjects = Array('you ','ur mom ','chinese spy balloon ','my agent ','feds ','FEDs ','ChatGPT ');

var punches = Array('when ','when ','when ','when ','be like ');

var lines = Array('your BTC ','the unknown ','the secrets of the universe ');

var line_g_u = Array('youre ','you are', 'ur ')
var line_g_be = Array('happy ', 'strapped ', 'having a good day ')

var lines_g = Array('SEC takes their holdings ','BTC goes up ','ordinals go viral ','a NFT sells ','they only lose 50% on their crypto ');


//Advanced Topic Builder (ATB)

//very confuse
//many ponder

var atb_subjects_1 = Array('when ','that moment when ','atb_l2')
var atb_subjects_2 = Array('vegans ','libs','conservatives ','women ', 'men ','politicians ','feds ','crypto bros ','you ', 'me ', 'mom ')

let when = 'when '

var atb_pronouns_1 = Array('they ','she ','he ','it ')

var atb_actions_p1 = Array('helps','harms')

function atb(){
    document.getElementById("watermark").src = './adamwatermark.png'
    var subject1 = atb_subjects_1[Math.floor(Math.random()*atb_subjects_1.length)];

    document.getElementById("outputtext").innerHTML = subject1

    document.getElementById("memebg").src = template_g
}







function rd(){
    document.getElementById("watermark").src = './adamwatermark.png'
    var emotion = emotions[Math.floor(Math.random()*emotions.length)];
    var topic = topics[Math.floor(Math.random()*topics.length)];

    console.log(emotion)
    console.log(topic)


    var topic_mom = topics_mom[Math.floor(Math.random()*topics_mom.length)];
    var line_g_mom = lines_g_mom[Math.floor(Math.random()*lines_g_mom.length)];
    var line_b_mom = lines_b_mom[Math.floor(Math.random()*lines_b_mom.length)];
    var line_r_mom = lines_r_mom[Math.floor(Math.random()*lines_r_mom.length)];

    var topic_feds = topics_feds[Math.floor(Math.random()*topics_feds.length)];
    var line_g_feds = lines_g_feds[Math.floor(Math.random()*lines_g_feds.length)];
    var line_b_feds = lines_b_feds[Math.floor(Math.random()*lines_b_feds.length)];
    var line_r_feds = lines_r_feds[Math.floor(Math.random()*lines_r_feds.length)];

    var topic_ai = topics_ai[Math.floor(Math.random()*topics_ai.length)];
    var line_g_ai = lines_g_ai[Math.floor(Math.random()*lines_g_ai.length)];
    var line_b_ai = lines_b_ai[Math.floor(Math.random()*lines_b_ai.length)];
    var line_r_ai = lines_b_ai[Math.floor(Math.random()*lines_r_ai.length)];


    var topic_btc = topics_btc[Math.floor(Math.random()*topics_btc.length)];
    var line_g_btc = lines_g_btc[Math.floor(Math.random()*lines_g_btc.length)];
    var line_b_btc = lines_b_btc[Math.floor(Math.random()*lines_b_btc.length)];
    var line_r_btc = lines_r_btc[Math.floor(Math.random()*lines_r_btc.length)];

    var topic_libs = topics_libs[Math.floor(Math.random()*topics_libs.length)];
    var line_g_libs = lines_g_libs[Math.floor(Math.random()*lines_g_libs.length)];
    var line_b_libs = lines_b_libs[Math.floor(Math.random()*lines_b_libs.length)];
    var line_r_libs = lines_r_libs[Math.floor(Math.random()*lines_r_libs.length)];

    var topic_weak = topics_weak[Math.floor(Math.random()*topics_weak.length)];
    var line_g_weak = lines_g_weak[Math.floor(Math.random()*lines_g_weak.length)];
    var line_g2_weak = lines_g2_weak[Math.floor(Math.random()*lines_g2_weak.length)];
    var line_b_weak = lines_b_weak[Math.floor(Math.random()*lines_b_weak.length)];
    var line_r_weak = lines_r_weak[Math.floor(Math.random()*lines_r_weak.length)];

    var topic_soy = topics_mom[Math.floor(Math.random()*topics_soy.length)];
    var line_g_soy = lines_g_mom[Math.floor(Math.random()*lines_g_soy.length)];
    var line_g_soy = lines_g_mom[Math.floor(Math.random()*lines_g2_soy.length)];
    var line_b_soy = lines_b_mom[Math.floor(Math.random()*lines_b_soy.length)];
    var line_r_soy = lines_r_mom[Math.floor(Math.random()*lines_r_soy.length)];

    var subject = subjects[Math.floor(Math.random()*subjects.length)];

    var template = templates[Math.floor(Math.random()*templates.length)];

    var template_g = templates_g[Math.floor(Math.random()*templates_g.length)];

    var template_b = templates_b[Math.floor(Math.random()*templates_b.length)];

    var template_q = templates_q[Math.floor(Math.random()*templates_q.length)];

    var template_r = templates_r[Math.floor(Math.random()*templates_r.length)];

    var template_goth = templates_goth[Math.floor(Math.random()*templates_goth.length)];


    var punch = punches[Math.floor(Math.random()*punches.length)];

    var line = lines[Math.floor(Math.random()*lines.length)];


    if (emotion=='goth') {
        var buildalert = 'Uh oh! You have encountered a partial algorithm function!'

        var lines_goth = Array('spooky ');
        var line_goth = lines_goth[Math.floor(Math.random()*lines_goth.length)];

        var topics_goth = Array('family','artist');
        //'family','artist','society'//
        var topic_goth = topics_goth[Math.floor(Math.random()*topics_goth.length)];


        var goth_punches = Array('When','That moment when ','mfw ')
        var goth_punch = goth_punches[Math.floor(Math.random()*goth_punches.length)];

        var goth_spooktober = Array();

        var goth_family_ = Array('mom ','grandma ','dad ');
        var goth_family = goth_family_[Math.floor(Math.random()*goth_family_.length)];
          var goth_family2_ = Array('doesnt like my boots ','doesnt enjoy my music ','dislikes the playlist ','wasnt present growing up ');
          var goth_family2 = goth_family2_[Math.floor(Math.random()*goth_family2_.length)];

        var goth_artist_ = Array('critics ','psychologists ','professors ');
        var goth_artist = goth_artist_[Math.floor(Math.random()*goth_artist_.length)];
          var goth_artist2_ = Array('when seeing my art (its radioactive) ','when viewing my sketch books ','when viewing the resident turtured artists work ','seeing the process work (there isnt any)');
          var goth_artist2 = goth_artist2_[Math.floor(Math.random()*goth_artist2_.length)];

        var goth_society_ = Array('');
        var goth_society = goth_society_[Math.floor(Math.random()*goth_society_.length)];
          var goth_society2_ = Array('');
          var goth_society2 = goth_society2_[Math.floor(Math.random()*goth_society2_.length)];


        console.log(line_goth)
        console.log(topic_goth)

        if (topic_goth=='family') {
//template_goth//
            document.getElementById("outputtext").innerHTML = goth_punch + goth_family + goth_family2
            document.getElementById("memebg").src = template_goth
        }

        if (topic_goth=='artist') {
//template_goth//
            document.getElementById("outputtext").innerHTML = goth_artist+goth_artist2
            document.getElementById("memebg").src = template_goth
        }

        if (topic_goth=='society') {
//template_goth//
            document.getElementById("outputtext").innerHTML = punch+line_goth
            document.getElementById("memebg").src = template_goth
        }

        if (topic_goth=='spooktober') {
//template_goth//
            document.getElementById("outputtext").innerHTML = punch+line_goth + buildalert
            document.getElementById("memebg").src = template_goth
        }





    }

    if (emotion=='good') {

///libs
        if (topic=='libs') {



            if (punch=='be like ') {
            document.getElementById("outputtext").innerHTML = topic_libs + punch

            document.getElementById("memebg").src = template_g

            console.log('Possible Memes: '+topics_libs.length*punches.length*templates_g.length)
            console.log('- - -')
            } else {
                document.getElementById("outputtext").innerHTML = topic_libs + punch + line_g_libs

                document.getElementById("memebg").src = template_g

                console.log('Possible Memes: '+topics_libs.length*punches.length*templates_g.length*lines_g_libs.length)
                console.log('- - -')
        }

        }


//mom
        if (topic=='mom') {

            if (punch=='be like ') {
            document.getElementById("outputtext").innerHTML = topic_mom + punch

            document.getElementById("memebg").src = template_g

            console.log('Possible Memes: '+topics_mom.length*punches.length*templates_g.length)
            console.log('- - -')
            } else {
                document.getElementById("outputtext").innerHTML = topic_mom + punch + line_g_mom

                document.getElementById("memebg").src = template_g

                console.log('Possible Memes: '+topics_mom.length*punches.length*templates_g.length*lines_g_mom.length)
                console.log('- - -')
        }

        }


//feds

if (topic=='feds') {

    if (punch=='be like ') {
    document.getElementById("outputtext").innerHTML = topic_feds + punch

    document.getElementById("memebg").src = template_g

    console.log('Possible Memes: '+topics_feds.length*punches.length*templates_g.length)
    console.log('- - -')
    } else {
        document.getElementById("outputtext").innerHTML = topic_feds + punch + line_g_feds

        document.getElementById("memebg").src = template_g

        console.log('Possible Memes: '+topics_feds.length*punches.length*templates_g.length*lines_g_feds.length)
        console.log('- - -')
}

}
//weak

if (topic=='weak') {

    if (punch=='be like ') {
    document.getElementById("outputtext").innerHTML = topic_weak + punch

    document.getElementById("memebg").src = template_g

    console.log('Possible Memes: '+topics_weak.length*punches.length*templates_g.length)
    console.log('- - -')
    } else {
        document.getElementById("outputtext").innerHTML = topic_weak + punch + line_g_weak

        document.getElementById("memebg").src = template_g

        console.log('Possible Memes: '+topics_weak.length*punches.length*templates_g.length*lines_g_weak.length)
        console.log('- - -')
}

}


//btc
if (topic=='btc') {

    if (punch=='be like ') {
    document.getElementById("outputtext").innerHTML = topic_btc + punch

    document.getElementById("memebg").src = template_g

    console.log('Possible Memes: '+topics_btc.length*punches.length*templates_g.length)
    console.log('- - -')
    } else {
        document.getElementById("outputtext").innerHTML = topic_btc + punch + line_g_btc

        document.getElementById("memebg").src = template_g

        console.log('Possible Memes: '+topics_btc.length*punches.length*templates_g.length*lines_g_btc.length)
        console.log('- - -')
}

}



//ai

if (topic=='ai') {

    if (punch=='be like ') {
    document.getElementById("outputtext").innerHTML = topic_ai + punch

    document.getElementById("memebg").src = template_g

    console.log('Possible Memes: '+topics_ai.length*punches.length*templates_g.length)
    console.log('- - -')
    } else {
        document.getElementById("outputtext").innerHTML = topic_ai + punch + line_g_ai

        document.getElementById("memebg").src = template_g
        console.log('Possible Memes: '+topics_ai.length*punches.length*templates_g.length*lines_g_ai.length)
        console.log('- - -')
}


}



    }


    //bad
    if (emotion=='bad') {
///libs
if (topic=='libs') {

    if (punch=='be like ') {
    document.getElementById("outputtext").innerHTML = topic_libs + punch

    document.getElementById("memebg").src = template_b

    console.log('Possible Memes: '+topics_libs.length*punches.length*templates_b.length)
    console.log('- - -')
    } else {
        document.getElementById("outputtext").innerHTML = topic_libs + punch + line_b_libs

        document.getElementById("memebg").src = template_b

        console.log('Possible Memes: '+topics_libs.length*punches.length*templates_b.length*lines_b_libs.length)
        console.log('- - -')
}

}


//mom
if (topic=='mom') {

    if (punch=='be like ') {
    document.getElementById("outputtext").innerHTML = topic_mom + punch

    document.getElementById("memebg").src = template_b
    console.log('Possible Memes: '+topics_mom.length*punches.length*templates_b.length)
console.log('- - -')
    } else {
        document.getElementById("outputtext").innerHTML = topic_mom + punch + line_b_mom

        document.getElementById("memebg").src = template_b
        console.log('Possible Memes: '+topics_mom.length*punches.length*templates_b.length*lines_b_mom.length)
        console.log('- - -')
}

}

//feds

if (topic=='feds') {

if (punch=='be like ') {
document.getElementById("outputtext").innerHTML = topic_feds + punch

document.getElementById("memebg").src = template_b
console.log('Possible Memes: '+topics_feds.length*punches.length*templates_b.length)
console.log('- - -')
} else {
    document.getElementById("outputtext").innerHTML = topic_feds + punch + line_b_feds

    document.getElementById("memebg").src = template_b
    console.log('Possible Memes: '+topics_feds.length*punches.length*templates_b.length*lines_b_feds.length)
    console.log('- - -')
}

}

//weak

if (topic=='weak') {

if (punch=='be like ') {
document.getElementById("outputtext").innerHTML = topic_weak + punch

document.getElementById("memebg").src = template_b
console.log('Possible Memes: '+topics_weak.length*punches.length*templates_b.length)
console.log('- - -')
} else {
    if (line_g_weak=='they bully someone for ') {
        document.getElementById("outputtext").innerHTML = topic_weak + punch + line_g_weak + line_g2_weak

        document.getElementById("memebg").src = template_g

        console.log('Possible Memes: '+topics_weak.length*punches.length*templates_b.length*lines_b_weak.length)
        console.log('- - -')
    } else {
        document.getElementById("outputtext").innerHTML = topic_weak + punch + line_b_weak

        document.getElementById("memebg").src = template_b

        console.log('Possible Memes: '+topics_weak.length*punches.length*templates_b.length*lines_b_weak.length)
        console.log('- - -')
    }


}

}


//btc
if (topic=='btc') {

if (punch=='be like ') {
document.getElementById("outputtext").innerHTML = topic_btc + punch

document.getElementById("memebg").src = template_b

console.log('Possible Memes: '+topics_btc.length*punches.length*templates_b.length)
console.log('- - -')
} else {
    document.getElementById("outputtext").innerHTML = topic_btc + punch + line_b_btc

    document.getElementById("memebg").src = template_b

    console.log('Possible Memes: '+topics_btc.length*punches.length*templates_b.length*lines_b_btc.length)
    console.log('- - -')
}

}



//ai

if (topic=='ai') {

if (punch=='be like ') {
document.getElementById("outputtext").innerHTML = topic_ai + punch

document.getElementById("memebg").src = template_b

console.log('Possible Memes: '+topics_ai.length*punches.length*templates_b.length)
console.log('- - -')
} else {
    document.getElementById("outputtext").innerHTML = topic_ai + punch + line_b_ai

    document.getElementById("memebg").src = template_b

    console.log('Possible Memes: '+topics_ai.length*punches.length*templates_b.length*lines_b_ai.length)
    console.log('- - -')
}

}



    }


//rage
    if (emotion=='rage') {
        ///libs
        if (topic=='libs') {

            if (punch=='be like ') {
            document.getElementById("outputtext").innerHTML = topic_libs + punch

            document.getElementById("memebg").src = template_b

            console.log('Possible Memes: '+topics_libs.length*punches.length*templates_r.length)
            console.log('- - -')
            } else {
                document.getElementById("outputtext").innerHTML = topic_libs + punch + line_r_libs

                document.getElementById("memebg").src = template_r

                console.log('Possible Memes: '+topics_libs.length*punches.length*templates_r.length*lines_r_libs.length)
                console.log('- - -')
        }

        }


        //mom
        if (topic=='mom') {

            if (punch=='be like ') {
            document.getElementById("outputtext").innerHTML = topic_mom + punch

            document.getElementById("memebg").src = template_b
            console.log('Possible Memes: '+topics_mom.length*punches.length*templates_r.length)
        console.log('- - -')
            } else {
                document.getElementById("outputtext").innerHTML = topic_mom + punch + line_b_mom

                document.getElementById("memebg").src = template_r
                console.log('Possible Memes: '+topics_mom.length*punches.length*templates_r.length*lines_r_mom.length)
                console.log('- - -')
        }

        }

        //feds

        if (topic=='feds') {

        if (punch=='be like ') {
        document.getElementById("outputtext").innerHTML = topic_feds + punch

        document.getElementById("memebg").src = template_b
        console.log('Possible Memes: '+topics_feds.length*punches.length*templates_r.length)
        console.log('- - -')
        } else {
            document.getElementById("outputtext").innerHTML = topic_feds + punch + line_r_feds

            document.getElementById("memebg").src = template_r
            console.log('Possible Memes: '+topics_feds.length*punches.length*templates_r.length*lines_r_feds.length)
            console.log('- - -')
        }

        }

        //weak

        if (topic=='weak') {

        if (punch=='be like ') {
        document.getElementById("outputtext").innerHTML = topic_weak + punch

        document.getElementById("memebg").src = template_b
        console.log('Possible Memes: '+topics_weak.length*punches.length*templates_r.length)
        console.log('- - -')
        } else {
            document.getElementById("outputtext").innerHTML = topic_weak + punch + line_r_weak

            document.getElementById("memebg").src = template_r

            console.log('Possible Memes: '+topics_weak.length*punches.length*templates_r.length*lines_r_weak.length)
            console.log('- - -')
        }

        }


        //btc
        if (topic=='btc') {

        if (punch=='be like ') {
        document.getElementById("outputtext").innerHTML = topic_btc + punch

        document.getElementById("memebg").src = template_b

        console.log('Possible Memes: '+topics_btc.length*punches.length*templates_r.length)
        console.log('- - -')
        } else {
            document.getElementById("outputtext").innerHTML = topic_btc + punch + line_r_btc

            document.getElementById("memebg").src = template_r

            console.log('Possible Memes: '+topics_btc.length*punches.length*templates_r.length*lines_r_btc.length)
            console.log('- - -')
        }

        }



        //ai

        if (topic=='ai') {

        if (punch=='be like ') {
        document.getElementById("outputtext").innerHTML = topic_ai + punch

        document.getElementById("memebg").src = template_r

        console.log('Possible Memes: '+topics_ai.length*punches.length*templates_r.length)
        console.log('- - -')
        } else {
            document.getElementById("outputtext").innerHTML = topic_ai + punch + line_r_ai

            document.getElementById("memebg").src = template_r

            console.log('Possible Memes: '+topics_ai.length*punches.length*templates_r.length*lines_r_ai.length)
            console.log('- - -')
        }

        }



            }


    if (emotion=='confused') {
        document.getElementById("outputtext").innerHTML = subject + punch

        document.getElementById("memebg").src = template_q
    }



    if (emotion=='gm') {
        document.getElementById("outputtext").innerHTML = 'gm'

        document.getElementById("memebg").src = template_g

        console.log('Possible Memes: '+templates_g.length)
        console.log('- - -')
    }
}




function ogalgorithm(){
var emotion = emotions[Math.floor(Math.random()*emotions.length)];

var subject = subjects[Math.floor(Math.random()*subjects.length)];

var template = templates[Math.floor(Math.random()*templates.length)];

var punch = punches[Math.floor(Math.random()*punches.length)];

var line = lines[Math.floor(Math.random()*lines.length)];

if (punch=='be like ') {
    document.getElementById("outputtext").innerHTML = subject + punch

    document.getElementById("memebg").src = template
} else {
    document.getElementById("outputtext").innerHTML = subject + punch + line

    document.getElementById("memebg").src = template
}




}
