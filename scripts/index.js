
/**
 * - [X] Create a variable to store the correct answer
 * - [X] Create a variable to keep track user tries and set a number from the begining
 * - [X] Decrement the lives every time user gets the wrong answer then give feedback to user
 * @rules 
 *      - Update the feedback every user turns
 *      - When user finishes the game reset the game
 */

let lives = 0;
let correctAnswer = 0;
const form = document.getElementById("form");
const feedback = document.querySelector(".section__answer");
const trackLives = document.querySelector(".section__rules");
const userAnswer = document.querySelector(".section__body--input");
const resetBtn = document.querySelector(".section__body--resetBtn");

function playGame() {
    lives = 3;
    correctAnswer = Math.floor(Math.random() * 100);
}

playGame();

form.addEventListener("submit", (event) => {
    event.preventDefault();
    const userGuess = Number(event.target.guess.value);
    
    if (userGuess !== correctAnswer && userGuess < correctAnswer) {
        lives -= 1;
        feedback.textContent = "Guess Higher 😎"
        trackLives.textContent = `You have ${lives} tries to guess the number.`
    } else if (userGuess !== correctAnswer && userGuess > correctAnswer) {
        lives -= 1;
        feedback.textContent = "Guess Lower 😎"
        trackLives.textContent = `You have ${lives} tries to guess the number.`;
    } else if (userGuess === correctAnswer) {
        lives = 0;
        feedback.textContent = `Congratulation! 🎉 You've guess the correct answer: ${correctAnswer} 🥳`
        trackLives.textContent = ``
    }

    if (lives === 0) {
        gameOver();
        form.reset();
        setTimeout(resetGame, 2000);
    }

    form.reset();
});

resetBtn.addEventListener("click", (event) => {
    event.stopPropagation();
    resetGame();
}) 


function resetGame() {
    lives = 0;
    playGame();
    feedback.textContent = "Game has been resetted. Goodluck! 🙏";
    trackLives.textContent = `You have ${lives} tries to guess the number.`;

    setTimeout(() => {
        feedback.textContent = "";
    }, 2000)

}

function gameOver() {
    feedback.textContent = `0 guesses left. The correct answer: ${correctAnswer}. Please try again!`
    trackLives.textContent = `You have ${lives} tries to guess the number.`
}
