// ============================================================
// scene6.js: Screen 3 - Option B3 (The Sparkle-Candy Shop)
// ============================================================

function drawScene6() {
  push();
  fill(240);
  noStroke();
  textAlign(CENTER, TOP);
  textSize(16);

  let storyText =
    "Screen 3: The Sparkle-Candy Shop\n\n" +
    "You follow the runaway book directly into the vibrant village candy shop.\n" +
    "It zips over bubbling vats of magical confectionaries!\n\n" +
    "What happens next:";
  text(storyText, 50, 60, 700, 300);
  pop();

  drawStoryButton(
    BTN_X_LEFT,
    BTN_Y,
    BTN_W,
    BTN_H,
    "Corner it near the popping-sugar vat",
  );
  drawStoryButton(
    BTN_X_RIGHT,
    BTN_Y,
    BTN_W,
    BTN_H,
    "Ask the shopkeeper witch for help",
  );
}

function handleScene6Clicks() {
  if (isMouseOver(BTN_X_LEFT, BTN_Y, BTN_W, BTN_H)) {
    currentScreen = 12; // Outcome 5
  } else if (isMouseOver(BTN_X_RIGHT, BTN_Y, BTN_W, BTN_H)) {
    currentScreen = 13; // Outcome 6
  }
}
