// ============================================================
// scene4.js: Screen 3 - Option A1 (The Glow-Flower Patch)
// ============================================================

function drawScene4() {
  push();
  fill(240);
  noStroke();
  textAlign(CENTER, TOP);
  textSize(16);

  let storyText =
    "Screen 3: The Glow-Flower Patch\n\n" +
    "You follow the sticky trails of maple syrup deep into the luminescent flower patch.\n" +
    "The glowing petals illuminate two potential hiding spots nearby.\n\n" +
    "Where do you search:";
  text(storyText, 50, 60, 700, 300);
  pop();

  drawStoryButton(
    BTN_X_LEFT,
    BTN_Y,
    BTN_W,
    BTN_H,
    "Look under the giant singing lily",
  );
  drawStoryButton(
    BTN_X_RIGHT,
    BTN_Y,
    BTN_W,
    BTN_H,
    "Approach a nearby garden gnome",
  );
}

function handleScene4Clicks() {
  if (isMouseOver(BTN_X_LEFT, BTN_Y, BTN_W, BTN_H)) {
    currentScreen = 8; // Outcome 1
  } else if (isMouseOver(BTN_X_RIGHT, BTN_Y, BTN_W, BTN_H)) {
    currentScreen = 9; // Outcome 2
  }
}
