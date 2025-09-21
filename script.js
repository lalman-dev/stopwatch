const startButton = document.getElementsByClassName("start")[0];
const stopButton = document.getElementsByClassName("stop")[0];
const resetButton = document.getElementsByClassName("reset")[0];

const timeDisplay = document.getElementsByClassName("time")[0];

startButton.addEventListener("click", handleStart);
stopButton.addEventListener("click", handleStop);
resetButton.addEventListener("click", handleReset);

let startTime = 0;
let elapsedTime = 0;
let timerInterval = null;

function handleStart() {
  // Only start if not already running
  if (!timerInterval) {
    // Record the current time minus any previously elapsed time
    startTime = Date.now() - elapsedTime;

    // Start a repeating task every 100 milliseconds
    timerInterval = setInterval(() => {
      // Calculate how much time has passed
      elapsedTime = Date.now() - startTime;

      // Update the display
      updateDisplay();
    }, 100);
  }
}

function updateDisplay() {
  const totalSeconds = Math.floor(elapsedTime / 1000);
  const hours = String(Math.floor(totalSeconds / 3600)).padStart(2, "0");
  const minutes = String(Math.floor((totalSeconds % 3600) / 60)).padStart(
    2,
    "0"
  );
  const seconds = String(totalSeconds % 60).padStart(2, "0");

  timeDisplay.innerText = `${hours}:${minutes}:${seconds}`;
}

function handleStop() {
  startButton.innerText = "Resume";
  clearInterval(timerInterval);
  timerInterval = null; // Mark that it's no longer running
}

function handleReset() {
  startButton.innerText = "Start";
  clearInterval(timerInterval);
  timerInterval = null;
  elapsedTime = 0;
  updateDisplay(); // Show 00:00:00
}
