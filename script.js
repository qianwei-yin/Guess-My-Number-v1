"use strict";

// define the secret secret number
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;

document.querySelector(".check").addEventListener("click", function () {
    const guess = Number(document.querySelector(".guess").value);

    // When there is no input
    if (!guess) {
        document.querySelector(".message").textContent = "⛔️ No number!";
    } else if (score === 1 && guess !== secretNumber) {
        document.querySelector(".message").textContent = "💥 You lost!";
        score--;
        document.querySelector(".score").textContent = score;
    } else if (guess === secretNumber) {
        document.querySelector(".number").textContent = secretNumber;
        document.querySelector(".message").textContent = "🎉 Correct number!";
        // ⬇️ Must have quotes - - "", must be a string
        document.querySelector("body").style.backgroundColor = "#60b347";
        document.querySelector(".number").style.width = "30rem";
        if (score > document.querySelector(".best-score").textContent) {
            document.querySelector(".best-score").textContent = score;
        }
    } else if (guess !== secretNumber) {
        document.querySelector(".message").textContent =
            guess > secretNumber ? "📈 Too high!" : "📉 Too low!";
        score--;
        document.querySelector(".score").textContent = score;
    }
});

document.querySelector(".again").addEventListener("click", function () {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    document.querySelector(".score").textContent = score;
    document.querySelector("body").style.backgroundColor = "#222";
    document.querySelector(".message").textContent = "Start guessing...";
    document.querySelector(".number").textContent = "?";
    document.querySelector(".number").style.width = "15rem";
    document.querySelector(".guess").value = "";
});
