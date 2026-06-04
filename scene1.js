// ============================================================
// scene1.js: Screen 1 - The Incantation
// ============================================================

function drawScene1() {
  push();
  fill(240);
  noStroke();
  textAlign(CENTER, TOP);
  textSize(16);

  let storyText =
    "Screen 1: The Incantation\n\n" +
    "The air smells like cinnamon and old paper. You are standing in the middle\n" +
    "of the Grand Library of Witchcraft, looking at the Arch-Witch's desk. In the\n" +
    "center sits a glowing, velvet-bound book that is vibrating softly. Suddenly,\n" +
    "a tiny pair of paper wings sprouts from the pages! The book is trying to fly\n" +
    "away with the secret Spell of Stars!\n\n" +
    "Do you:";
  text(storyText, 50, 60, 700, 300);
  pop();

  drawStoryButton(BTN_X_LEFT, BTN_Y, BTN_W, BTN_H, "Cast a Sticky-Syrup Charm");
  drawStoryButton(
    BTN_X_RIGHT,
    BTN_Y,
    BTN_W,
    BTN_H,
    "Grab your Flying Broomstick",
  );
}

function handleScene1Clicks() {
  if (isMouseOver(BTN_X_LEFT, BTN_Y, BTN_W, BTN_H)) {
    currentScreen = 2; // Path A
  } else if (isMouseOver(BTN_X_RIGHT, BTN_Y, BTN_W, BTN_H)) {
    currentScreen = 3; // Path B
  }
}
