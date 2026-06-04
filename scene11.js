// ============================================================
// scene11.js: Outcome 4
// ============================================================

function drawScene11() {
  push();
  fill(160, 220, 255);
  noStroke();
  textAlign(CENTER, TOP);
  textSize(16);

  let storyText =
    "THE END: Outcome 4\n\n" +
    "The owl accidentally sneezes, blowing the syrup away. The book\n" +
    "opens up and casts an accidental Levitation Spell, making you float\n" +
    "safely and giggling back to bed. A silly, floating success!";
  text(storyText, 60, 100, 680, 260);
  pop();

  drawStoryButton(width / 2, 410, 200, 50, "Play Again");
}

function handleScene11Clicks() {
  if (isMouseOver(width / 2, 410, 200, 50)) {
    currentScreen = 1;
  }
}
