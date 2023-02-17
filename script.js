const moves = document.getElementById("moves_count");
const timeTaken = document.getElementById("time");
const result = document.getElementById("result");
const cards = document.querySelectorAll(".cards .card");

let interval;
let firstSelection = "";
let secondSelection = "";
let counter=0;


let seconds = 0;
let minutes = 0;

let movesCount=0;

const timeGenerator = () => {
    seconds += 1;

    if(seconds>=60)
    {
        minutes += 1;
        seconds = 0;
    }

    let secondValue = seconds<10 ? `0${seconds}` : seconds ;
    let minuteValue = minutes<10 ? `0${minutes}` : minutes ;
    timeTaken.innerHTML = `<span>Time:</span> ${minutes} : ${seconds}`; 
};



const movesCounter = () => {
    movesCount += 1;
    moves.innerHTML = `<spam>Moves :</spam> ${movesCount}`;
};




cards.forEach((card) => {
    card.addEventListener("click", () => {
    card.classList.add("clicked");

    if (counter === 0) {
        firstSelection = card.getAttribute("animal");
        counter++;
    } else {
        secondSelection = card.getAttribute("animal");
        counter = 0;

        if (firstSelection === secondSelection) {
        const correctCards = document.querySelectorAll(
            ".card[animal='" + firstSelection + "']"
        );

        correctCards[0].classList.add("checked");
        correctCards[0].classList.remove("clicked");
        correctCards[1].classList.add("checked");
        correctCards[1].classList.remove("clicked");
        } else {
        const incorrectCards = document.querySelectorAll(".card.clicked");

        incorrectCards[0].classList.add("shake");
        incorrectCards[1].classList.add("shake");

        setTimeout(() => {
            incorrectCards[0].classList.remove("shake");
            incorrectCards[0].classList.remove("clicked");
            incorrectCards[1].classList.remove("shake");
            incorrectCards[1].classList.remove("clicked");
        }, 800);
        }
    }
    });
});






