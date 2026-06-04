// ============================================================
// scene12.js: Outcome 5
// ============================================================

function drawScene12() {
  push();
  fill(160, 220, 255);
  noStroke();
  textAlign(CENTER, TOP);
  textSize(16);

  let storyText =
    "THE END: Outcome 5\n\n" +
    "The book lands in a vat of popping-sugar! It sneezes out pages made\n" +
    "of sweet cotton candy. You capture it, and now the Spell of Stars smells\n" +
    "like strawberries forever. A delicious victory!";
  text(storyText, 60, 100, 680, 260);
  pop();

  drawStoryButton(width / 2, 410, 200, 50, "Play Again");
}

function handleScene12Clicks() {
  if (isMouseOver(width / 2, 410, 200, 50)) {
    currentScreen = 1;
  }
}
