// ============================================================
// scene7.js: Screen 3 - Option B4 (The Bubble-Net Spell)
// ============================================================

function drawScene7() {
  push();
  fill(240);
  noStroke();
  textAlign(CENTER, TOP);
  textSize(16);

  let storyText =
    "Screen 3: Mid-Air Over the Square\n\n" +
    "Hovering above the bustling village square, your wand courses with bubble magic.\n" +
    "You unleash a giant shimmering trap right directly into its flight path.\n\n" +
    "How does the net land:";
  text(storyText, 50, 60, 700, 300);
  pop();

  drawStoryButton(
    BTN_X_LEFT,
    BTN_Y,
    BTN_W,
    BTN_H,
    "Catch it cleanly in the bubble",
  );
  drawStoryButton(
    BTN_X_RIGHT,
    BTN_Y,
    BTN_W,
    BTN_H,
    "Pop the bubble right over the book",
  );
}

function handleScene7Clicks() {
  if (isMouseOver(BTN_X_LEFT, BTN_Y, BTN_W, BTN_H)) {
    currentScreen = 14; // Outcome 7
  } else if (isMouseOver(BTN_X_RIGHT, BTN_Y, BTN_W, BTN_H)) {
    currentScreen = 15; // Outcome 8
  }
}
