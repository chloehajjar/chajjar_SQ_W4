// ============================================================
// scene9.js: Outcome 2
// ============================================================

function drawScene9() {
  push();
  fill(160, 220, 255);
  noStroke();
  textAlign(CENTER, TOP);
  textSize(16);

  let storyText =
    "THE END: Outcome 2\n\n" +
    "A friendly garden gnome is using the glowing book as a nightlight.\n" +
    "He agrees to give it back if you trade him your glowing wand for a day.\n" +
    "You made a new friend and saved the spell!";
  text(storyText, 60, 100, 680, 260);
  pop();

  drawStoryButton(width / 2, 410, 200, 50, "Play Again");
}

function handleScene9Clicks() {
  if (isMouseOver(width / 2, 410, 200, 50)) {
    currentScreen = 1;
  }
}
