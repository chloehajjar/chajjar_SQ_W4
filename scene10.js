// ============================================================
// scene10.js: Outcome 3
// ============================================================

function drawScene10() {
  push();
  fill(160, 220, 255);
  noStroke();
  textAlign(CENTER, TOP);
  textSize(16);

  let storyText =
    "THE END: Outcome 3\n\n" +
    "Professor Hoot uses his magic spectacles to read the book's mind.\n" +
    "It turns out the book just wanted to see the moon! You promise to read it\n" +
    "by the window every night. The book is happy and stays put.";
  text(storyText, 60, 100, 680, 260);
  pop();

  drawStoryButton(width / 2, 410, 200, 50, "Play Again");
}

function handleScene10Clicks() {
  if (isMouseOver(width / 2, 410, 200, 50)) {
    currentScreen = 1;
  }
}
