// ============================================================
// scene13.js: Outcome 6
// ============================================================

function drawScene13() {
  push();
  fill(160, 220, 255);
  noStroke();
  textAlign(CENTER, TOP);
  textSize(16);

  let storyText =
    "THE END: Outcome 6\n\n" +
    "The shopkeeper witch catches the book in a pastry box. Together,\n" +
    "you open it and discover the secret spell was actually a recipe for\n" +
    "Star-Dust Cupcakes! You bake a magical treat for the whole town.";
  text(storyText, 60, 100, 680, 260);
  pop();

  drawStoryButton(width / 2, 410, 200, 50, "Play Again");
}

function handleScene13Clicks() {
  if (isMouseOver(width / 2, 410, 200, 50)) {
    currentScreen = 1;
  }
}
