// ============================================================
// sketch.js: The 15-Scene Router
// ============================================================

let currentScreen = 1; // Start at scene1.js

// Layout Constants
const BTN_W = 280;
const BTN_H = 60;
const BTN_Y = 360;
const BTN_X_LEFT = 240;
const BTN_X_RIGHT = 560;

function setup() {
  createCanvas(800, 500);
  textFont("monospace");
}

function draw() {
  background(20);

  // Dynamic Window Router
  // Instead of a massive if/else block, p5 will dynamically call
  // drawScene1(), drawScene2(), etc., based on the current number!
  let functionName = "drawScene" + currentScreen;
  if (typeof window[functionName] === "function") {
    window[functionName]();
  }
}

function mousePressed() {
  // Dynamically calls handleScene1Clicks(), handleScene2Clicks(), etc.
  let functionName = "handleScene" + currentScreen + "Clicks";
  if (typeof window[functionName] === "function") {
    window[functionName]();
  }
}

// Global UI Layout Helpers
function drawStoryButton(x, y, w, h, label) {
  let isHovered =
    mouseX > x - w / 2 &&
    mouseX < x + w / 2 &&
    mouseY > y - h / 2 &&
    mouseY < y + h / 2;
  push();
  rectMode(CENTER);
  fill(isHovered ? color(70, 50, 90) : color(40, 30, 50));
  stroke(isHovered ? color(180, 140, 220) : color(90, 70, 110));
  strokeWeight(2);
  rect(x, y, w, h, 8);
  fill(255);
  noStroke();
  textAlign(CENTER, CENTER);
  textSize(13);
  text(label, x, y, w - 20, h - 10);
  pop();
}

function isMouseOver(x, y, w, h) {
  return (
    mouseX > x - w / 2 &&
    mouseX < x + w / 2 &&
    mouseY > y - h / 2 &&
    mouseY < y + h / 2
  );
}
