// ============================================================
// scene5.js: Screen 3 - Option A2 (The Wise Owl)
// ============================================================

function drawScene5() {
  push();
  fill(240);
  noStroke();
  textAlign(CENTER, TOP);
  textSize(16);

  let storyText =
    "Screen 3: The Clock Tower\n\n" +
    "You scale the spiral stairs of the clock tower to consult Professor Hoot.\n" +
    "The old bird blinks wisely, adjusted his spectacles, and prepares a spell.\n" +
    "How do you proceed with the owl:";
  text(storyText, 50, 60, 700, 300);
  pop();

  drawStoryButton(
    BTN_X_LEFT,
    BTN_Y,
    BTN_W,
    BTN_H,
    "Let him read the book's mind",
  );
  drawStoryButton(
    BTN_X_RIGHT,
    BTN_Y,
    BTN_W,
    BTN_H,
    "Hold the book steady for him",
  );
}

function handleScene5Clicks() {
  if (isMouseOver(BTN_X_LEFT, BTN_Y, BTN_W, BTN_H)) {
    currentScreen = 10; // Outcome 3
  } else if (isMouseOver(BTN_X_RIGHT, BTN_Y, BTN_W, BTN_H)) {
    currentScreen = 11; // Outcome 4
  }
}
