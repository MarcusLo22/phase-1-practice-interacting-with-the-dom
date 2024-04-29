// Select the elements
const minusButton = document.querySelector(".minus");
const plusButton = document.querySelector(".plus");
const likeButton = document.querySelector(".like");
const pauseButton = document.getElementById("pause");
const counterElement = document.querySelector(".value");

// Initialize the counter variable and pause state
let counter = 0;
let paused = false;
let intervalId;

// Function to update the counter display
const updateCounterDisplay = () => {
  counterElement.textContent = counter;
};

// Event listener for the minus button
minusButton.addEventListener("click", () => {
  if (!paused) {
    counter--;
    updateCounterDisplay();
  }
});

// Event listener for the plus button
plusButton.addEventListener("click", () => {
  if (!paused) {
    counter++;
    updateCounterDisplay();
  }
});

// Event listener for the like button
likeButton.addEventListener("click", () => {
  if (!paused) {
    const likeCountElement = document.querySelector(".like-count");
    let likeCount = parseInt(likeCountElement.textContent);
    likeCount++;
    likeCountElement.textContent = likeCount;
  }
});

// Event listener for the pause button
pauseButton.addEventListener("click", () => {
  paused = !paused;
  if (paused) {
    clearInterval(intervalId);
    pauseButton.textContent = "Resume";
    minusButton.disabled = true;
    plusButton.disabled = true;
    likeButton.disabled = true;
  } else {
    intervalId = setInterval(() => {
      counter++;
      updateCounterDisplay();
    }, 1000);
    pauseButton.textContent = "Pause";
    minusButton.disabled = false;
    plusButton.disabled = false;
    likeButton.disabled = false;
  }
});

// Event listener for the resume button
const resumeButton = document.getElementById("resume");
resumeButton.addEventListener("click", () => {
  counter = 0;
  paused = false;
  clearInterval(intervalId);
  updateCounterDisplay();
  pauseButton.textContent = "Pause";
  minusButton.disabled = false;
  plusButton.disabled = false;
  likeButton.disabled = false;
});

// Start the timer
const timerElement = document.getElementById("timer");
let timer = 0;
setInterval(() => {
  if (!paused) {
    timer++;
    timerElement.textContent = timer;
  }
}, 1000);

<button id="resume">Resume</button>