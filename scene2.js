// ============================================================
// scene2.js: Screen 2 - Path A (The Sticky-Syrup Charm)
// ============================================================

function drawScene2() {
  push();
  fill(240);
  noStroke();
  textAlign(CENTER, TOP);
  textSize(16);

  let storyText =
    "Screen 2: The Chase (Path A)\n\n" +
    "Your wand sparks, and a stream of warm, gooey maple syrup covers the desk!\n" +
    "The book gets its wings stuck, but it giggles and slides off the desk like a sled,\n" +
    "shooting right out the open window and into the enchanted garden!\n\n" +
    "Do you:";
  text(storyText, 50, 60, 700, 300);
  pop();

  drawStoryButton(
    BTN_X_LEFT,
    BTN_Y,
    BTN_W,
    BTN_H,
    "Follow the trail to Glow-Flower Patch",
  );
  drawStoryButton(
    BTN_X_RIGHT,
    BTN_Y,
    BTN_W,
    BTN_H,
    "Look for the Wise Owl in clock tower",
  );
}

function handleScene2Clicks() {
  if (isMouseOver(BTN_X_LEFT, BTN_Y, BTN_W, BTN_H)) {
    currentScreen = 4; // Option A1
  } else if (isMouseOver(BTN_X_RIGHT, BTN_Y, BTN_W, BTN_H)) {
    currentScreen = 5; // Option A2
  }
}
