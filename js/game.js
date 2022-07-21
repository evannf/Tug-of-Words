const answer = document.querySelector(".answer");
const submitButton = document.querySelector(".submit");
const newWordButton = document.querySelector(".new-word");
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
    "merciful",
]

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
        // flag.classList.add("moved");
        translateBy = translateBy + 100;
        document.getElementById("flag").style.transform = `translate(${translateBy}px)`;
        newWord();
    } else {
        translateBy = translateBy - 100;
        document.getElementById("flag").style.transform = `translate(${translateBy}px)`;
        newWord()
        alert("Answer incorrect, your grip slipped!");
        
        console.log("incorrect")
    };
}
newWord();
console.log(word)



scrambledWord.innerHTML = scrambleWord()
submitButton.addEventListener("click", checkAnswer);
newWordButton.addEventListener("click", newWord)