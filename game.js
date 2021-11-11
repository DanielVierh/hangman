/**
 * Hangman
 * Erstellungsdatum: 11.11.2021
 * Daniel.V
 */

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
let wordLength = 0;
let guessedChars = [];
let wrongCharCounter = 0;
const winnerLoserLabel = document.getElementById("winnerLoserLabel");
const continueButton = document.getElementById("contBtn");



window.onload = initNewGame();


function goToMenue() {
    window.location = "index.html";
}

function initNewGame() {
        winnerLoserLabel.hidden = true;
        continueButton.hidden = true;
        document.getElementById("imgHangm").src = "Assets/0.jpg";
        createNewWord(); 
}


function createNewWord() {
    const rndNumb = parseInt(Math.random() * countWordList());
    word = wordList[rndNumb].toUpperCase();
    displayWordLength();
}

function displayWordLength() {
    wordLength = word.length;
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


function logButton(clicked_ID) {
    const btn = document.getElementById(clicked_ID);
    const chr = btn.innerText;
    checkChar(chr, btn);
}


/**
 * Überprüft, ob der angeklickte Buchstabe vorhanden ist. 
 * Wenn dies der Fall ist, wird der Index in ein Array gespeichert 
 * Buchstabe wird dann über eine Schleife aufgedeckt
 * Angeklickter Button wird disabled und gefärbt.
 */
function checkChar(char, clickedButton) {
    let posArr = [];
    let foundChar = false;
        // Geht ganzes Wort durch
        for(let i = 0; i < wordLength; i++) {
            // Überprüfe buchstabe für Buchstabe
            if(char === word.charAt(i)) {
                posArr.push(i); // Array für die Indexwerte, an welcher Stelle sich der gefundene Buchstaben befindet
                guessedChars.push(char); // Zum feststellen ob Wort komplett aufgedeckt
                foundChar = true; 
            }
        }
    if(foundChar === false) {
        clickedButton.style.background = 'rgb(117, 2, 2)';
        clickedButton.style.color = 'white';
        clickedButton.disabled = true;
        wrongCharCounter += 1;
        document.getElementById("imgHangm").src = `Assets/${wrongCharCounter}.jpg`;
        if(wrongCharCounter === 10) {
            winnerLoser('red', `Gesucht wurde:<br> ${word}`)
        }
    
    }else{
        clickedButton.style.background = 'green';
        clickedButton.style.color = 'white';
        clickedButton.disabled = true;
        for(let i = 0; i < posArr.length; i++) {
            const index = posArr[i];
            document.getElementById(`outpRightChar${index}`).hidden = false;
            document.getElementById(`outpRightChar${index}`).innerHTML = char;
        }
        checkCompleteness();
    }
}


function checkCompleteness() {
    console.log(guessedChars)
    const lengthOfGuessedChars = guessedChars.length;
    if(lengthOfGuessedChars === wordLength) {
        winnerLoser('lightgreen', 'Gewonnen 😀');
    }
}

function winnerLoser(color, labelTxt) {
    winnerLoserLabel.hidden = false;
    winnerLoserLabel.style.color = color;
    winnerLoserLabel.innerHTML = labelTxt;
    continueButton.hidden = false;
    blockAndUnblockAllKeysFromBoardgame(true);
}

function nextWord() {
    winnerLoserLabel.hidden = true;
    continueButton.hidden = true;
    blockAndUnblockAllKeysFromBoardgame(false);
    guessedChars = [];
    wrongCharCounter = 0;
    document.getElementById("imgHangm").src = "Assets/0.jpg";
    createNewWord();
}

/**
 * Massenweises Disablen und weiß färben
 * true = disablen
 * false = enablen und Farbe auf Weiß setzen
 */
function blockAndUnblockAllKeysFromBoardgame(trueFalse) {
    if(trueFalse === true) {
        for(let key = 0; key <= 25; key++) {
            document.getElementById(`btn_${key}`).disabled = trueFalse;
        }
    }else{
        for(let key = 0; key <= 25; key++) {
            document.getElementById(`btn_${key}`).disabled = trueFalse;
            document.getElementById(`btn_${key}`).style.background = 'white';
            document.getElementById(`btn_${key}`).style.color = 'black';
        }
    }

}

