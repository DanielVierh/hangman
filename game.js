const wordList = ["Bimbam","Hüftgold","Kaulquappe","Trantüte","Muffensausen","Mumpitz","Apfel","Ball","Stift","Zug","Auto","Hund","Katze","Maus","Schule","Lehrer","Flachbettscanner",
"Gesetzesuebertretung","Asymmetrisch","griesgrämig","unsympathisch","Ouvertüre","Stracciatella","Gratwanderung","Koryphäe","Oel","TV","Ei","Ort","Tipp","Lied","Quiz","Oper",
"Eintrittskarte","Haftpflicht","Toilettenpapier","Vollmond","Dachpappe","Hollywood","Quizshow","Kruzifix","Kopfball","Kuddelmuddel","Geschmacksverirrung","Mond","Mars","Sterne",
"Zukunftsmusik","Papperlapapp","Quarzuhr","nichtsdestotrotz","Rückgrat","Terrasse","unentgeltlich","Verlies","weismachen","Zucchini","Yuccapalme","lizenzieren","Jackett","Adresse",
"Agentur","Aggression","aggressiv","Albtraum","anhand","Attrappe","Aufwand","aufwendig","Autor","außerdem","autorisieren","barfuss","Barzahlung","Billard","Biskuit","bisschen",
"Brezel","brillant","definitiv","delegieren","Dilettant","eben","einmal","Elefant","Fuss","Fussball","Galerie","Gratwanderung","infolge","infolgedessen","infrage","Inkrafttreten","insgesamt",
"interessant","Joghurt","Kaninchen","Karosserie","Karussell","katastrophal","Katastrophe","Komitee","Kommentar","Kommilitone","Konkurrenz","Konsens","Lid","Lizenz","lizenzieren",
"mahlen","Mandarine","Maschine","minimal","Misere","mithilfe","morgendlich","Paket","Papst","parallel","Pinnwand","platzieren","Platzierung","Portemonnaie","Portfolio","potenzial","potenziell",
"projizieren","prophylaktisch","Prozess","recht","Reflexion","renommiert","Rentier","Reparatur","respektive","Ressource","revanchieren","Revision","Rhetorik","Rhythmus","Satellit","Schloss",
"Schluss","Schmalz","schmelzen","seid","seit","Silvester","skurril","Smiley","soweit","Status","Tiger","Tipp","tolerant","Turnier","unendlich","vielleicht","Verzeichnis","willkommen",
"ziemlich","Ende","viel","Zucchini","zugunsten","zugutekommen","Zuhause","zumindest","zurecht","zurzeit","zuwider","Buch","Tisch","Urlaub","Zimmerpflanze","Heizung","Lautsprecher",
"Brot","Tasche","Fenster","Lampe","Kaugummi","Verpackung","Verbessern","Verbesserung","Wahrnehmung","wahrnehmen","wahrzeichen"];


let word = '';
window.onload = initNewGame();




function goToMenue() {
    window.location = "index.html";
}

function initNewGame() {
        document.getElementById("imgHangm").src = "Assets/0.jpg";
        createNewWord(); 
}


function createNewWord() {
    const rndNumb = parseInt(Math.random() * countWordList());
    word = wordList[rndNumb];
    displayWordLength();
}

function displayWordLength() {
    const wordLength = word.length;
    console.log(word);
    console.log(wordLength);
    for(let i = 0; i <= 19; i++) {
        document.getElementById(`outpRightChar${i}`).hidden = true;
    }
    for(let i = 0; i < wordLength; i++) {
        document.getElementById(`outpRightChar${i}`).hidden = false;
        document.getElementById(`outpRightChar${i}`).innerHTML = "_";
    }
}

function countWordList() {
    const wordListAmount = wordList.length;
    return wordListAmount;
}