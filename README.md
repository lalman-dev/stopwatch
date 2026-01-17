
## 🕒 Minimal Stopwatch

A clean, functional stopwatch built with HTML, CSS, and vanilla JavaScript. It features start, stop, and reset controls with dynamic button labeling (Start → Resume), and a digital time display in `hh:mm:ss` format. The UI is designed for clarity and ease of use.

---

## Live Demo
[Click Here](https://stopwatchbylalman.netlify.app)

---

## 📦 Project Structure
├── index.html    # Contains the stopwatch layout and buttons
├── style.css     # Styles the container, time display, and buttons
├── script.js     # Implements stopwatch logic and button interactions

---

## 🚀 Features

- Start, Stop, and Reset functionality
- Dynamic button label switching between "Start" and "Resume"
- Time tracking using `Date.now()` and `setInterval()`
- Display updates every 100ms for smooth ticking
- Responsive layout with soft, readable font

---

## 🧠 Logic Overview

- `handleStart()` begins the timer and updates the display
- `handleStop()` pauses the timer and changes the button label
- `handleReset()` clears the timer and resets the display
- `updateDisplay()` formats elapsed time into `hh:mm:ss`

---

## 🎨 UI Highlights

- Layout: Centered container with time and control buttons
- Theme: Simple, readable, and easy on the eyes—ideal for focused use

---

## 📂 How to Use

1. Clone or download the repo
2. Open `index.html` in your browser
3. Click **Start** to begin timing
4. Use **Stop** to pause and **Reset** to clear

---

## 🛠️ Future Ideas

- Save lap times or export session logs

---

Crafted with clarity and care by Lalman.
