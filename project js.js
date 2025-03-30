// DOM Elements
const numberDisplay = document.getElementById("number-display");
const guessInput = document.getElementById("guess-input");
const submitButton = document.getElementById("submit-button");
const message = document.getElementById("message");
const restartButton = document.getElementById("restart-button");
const themeToggle = document.getElementById("theme-toggle");

// Game Variables
let targetNumber;
let displayTime = 3000; // 3 seconds

// Initialize the game
function initGame() {
  targetNumber = Math.floor(Math.random() * 1000) + 1;
  numberDisplay.textContent = targetNumber;
  message.textContent = "";
  guessInput.value = "";
  guessInput.disabled = true;
  submitButton.disabled = true;
  restartButton.style.display = "none";
  
  setTimeout(() => {
    numberDisplay.textContent = "?";
    guessInput.disabled = false;
    submitButton.disabled = false;
  }, displayTime);
}

// Check the user's guess
function checkGuess() {
  const userGuess = parseInt(guessInput.value);

  if (isNaN(userGuess)) {
    message.textContent = "Please enter a valid number.";
    return;
  }

  if (userGuess === targetNumber) {
    message.textContent = "🎉 Correct! You remembered the number!";
  } else {
    message.textContent = `❌ Incorrect! The number was ${targetNumber}.`;
  }

  guessInput.disabled = true;
  submitButton.disabled = true;
  restartButton.style.display = "block";
}

// Toggle between light and dark mode
function toggleTheme() {
  document.body.classList.toggle("light-mode");
  const isLightMode = document.body.classList.contains("light-mode");
  themeToggle.textContent = isLightMode ? "Switch to Dark Mode" : "Switch to Light Mode";
}

// Event Listeners
submitButton.addEventListener("click", checkGuess);
guessInput.addEventListener("keyup", (e) => {
  if (e.key === "Enter") checkGuess();
});
restartButton.addEventListener("click", initGame);
themeToggle.addEventListener("click", toggleTheme);

// Start the game
initGame();
