// ============================================================
// scene3.js: Screen 2 - Path B (The Broomstick Chase)
// ============================================================

function drawScene3() {
  push();
  fill(240);
  noStroke();
  textAlign(CENTER, TOP);
  textSize(16);

  let storyText =
    "Screen 2: The Chase (Path B)\n\n" +
    "You zoom into the air, your cape fluttering behind you! The book is fast,\n" +
    "weaving through the rafters of the library before bursting through the skylight\n" +
    "into the starry night sky. It's heading toward the magical village!\n\n" +
    "Do you:";
  text(storyText, 50, 60, 700, 300);
  pop();

  drawStoryButton(
    BTN_X_LEFT,
    BTN_Y,
    BTN_W,
    BTN_H,
    "Dive-bomb to Sparkle-Candy Shop",
  );
  drawStoryButton(
    BTN_X_RIGHT,
    BTN_Y,
    BTN_W,
    BTN_H,
    "Cast a Bubble-Net Spell mid-air",
  );
}

function handleScene3Clicks() {
  if (isMouseOver(BTN_X_LEFT, BTN_Y, BTN_W, BTN_H)) {
    currentScreen = 6; // Option B3
  } else if (isMouseOver(BTN_X_RIGHT, BTN_Y, BTN_W, BTN_H)) {
    currentScreen = 7; // Option B4
  }
}
