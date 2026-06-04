// ============================================================
// scene15.js: Outcome 8
// ============================================================

function drawScene15() {
  push();
  fill(160, 220, 255);
  noStroke();
  textAlign(CENTER, TOP);
  textSize(16);

  let storyText =
    "THE END: Outcome 8\n\n" +
    "The bubble pops, releasing a cloud of harmless sleepy-mist. You and\n" +
    "the book drift down to a soft haystack, fast asleep under the stars,\n" +
    "safe and sound. The mystery is solved, and it's time for bed.";
  text(storyText, 60, 100, 680, 260);
  pop();

  drawStoryButton(width / 2, 410, 200, 50, "Play Again");
}

function handleScene15Clicks() {
  if (isMouseOver(width / 2, 410, 200, 50)) {
    currentScreen = 1;
  }
}
