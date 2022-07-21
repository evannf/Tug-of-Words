const answer = document.querySelector(".answer");
const submitButton = document.querySelector(".submit");
const newWordButton = document.querySelector(".new-word");
const scrambledWord = document.querySelector(".scrambled-word");
const gameContainer = document.querySelector(".game-container");
const flag = document.querySelector(".flag");
// const player = document.querySelector(".player");

const words = [
    "bacon",
    "apple",
    "crystal",
    "dragon",
    "energize",
    "friendly",
    "gentle",
    "highly",
    "insnane",
    "joking",
    "kingdom",
    "landslide",
    "monkey",
    "needle",
    "octopus",
    "pregnant",
    "reserved",
    "symbolic",
    "together",
    "violent",
    "windy",
    "android",
    "battle",
    "cleanly",
    "drained",
    "enter",
    "forgotten",
    "green",
    "header",
    "jeans",
    "hiccup",
    "insane",
    "jumped",
    "kindle",
    "lemon",
    "merciful",
]

function playerTurn(){
    const player = document.querySelector("#player");
    const player2 = document.querySelector("#player2");
    player.classList.toggle("hidden");
    player2.classList.toggle("hidden");
}

let word = words[Math.floor(Math.random() * words.length + 1)];

function newWord() {
    word = words[Math.floor(Math.random() * words.length + 1)];
    answer.value = "";
    scrambledWord.innerHTML = scrambleWord();

}

function scrambleWord() {
    let letters = word.split("");
    let i = letters.length, temporaryValue, randomIndex;

    while (0 !== i){
        randomIndex = Math.floor(Math.random() * i);
        i -= 1;
        temporaryValue = letters[i];
        letters[i] = letters[randomIndex];
        letters[randomIndex] = temporaryValue;
        }
        return letters.join("");
    }

let translateBy = 0;
function checkAnswer() {
    if (answer.value == word){
        translateBy = translateBy + 300;
        document.getElementById("flag").style.transform = `translate(${translateBy}px)`;
        endGame();
        newWord();
        playerTurn();

        //SANITY CHECK
        // console.log("correct");
        // console.log(translateBy);
    } else {
        translateBy = translateBy - 300;
        document.getElementById("flag").style.transform = `translate(${translateBy}px)`;
        endGame();
        newWord();
        playerTurn();
        alert("Answer incorrect, your grip slipped!");

        //SANITY CHECK
        // console.log(translateBy);
        // console.log("incorrect");
    };
}
function endGame() {
    if (translateBy >= 900){
        alert("Game over, player 2 wins!");
        window.location.href="../html/endPage.html";
    } else if (translateBy <= -900){
        alert("Game over, player 1 wins!");
        window.location.href="../html/endPage.html";
    }    
}



newWord();
console.log(word)



scrambledWord.innerHTML = scrambleWord()
submitButton.addEventListener("click", checkAnswer);
newWordButton.addEventListener("click", newWord)