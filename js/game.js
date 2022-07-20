const answer = document.querySelector(".answer");
const submitButton = document.querySelector(".submit");
// const newWord = document.querySelector(".new-word");
const scrambledWord = document.querySelector(".scrambled-word");
const gameContainer = document.querySelector(".game-container");
const flag = document.querySelector(".flag");

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
    "merciful"
]


// function randomWord() {
   
// }
let word = words[Math.floor(Math.random() * words.length + 1)];

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

//checkAnswer function isn't grabbing the correct varible for comparrison
function checkAnswer() {
    if (answer.value == word){
        console.log("correct")
    } else {
        console.log("incorrect")
    };
}

console.log(word)



scrambledWord.innerHTML = scrambleWord()
submitButton.addEventListener("click", checkAnswer);
// newWord.addEventListener("click", scrambleWord())