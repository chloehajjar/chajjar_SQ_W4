// ============================================================
// scene14.js: Outcome 7
// ============================================================

function drawScene14() {
  push();
  fill(160, 220, 255);
  noStroke();
  textAlign(CENTER, TOP);
  textSize(16);

  let storyText =
    "THE END: Outcome 7\n\n" +
    "The bubble bounces the book gently right back into your arms. The\n" +
    "spell inside glows brightly, lighting up the whole village square like a\n" +
    "beautiful firefly festival. Everyone cheers for your quick thinking!";
  text(storyText, 60, 100, 680, 260);
  pop();

  drawStoryButton(width / 2, 410, 200, 50, "Play Again");
}

function handleScene14Clicks() {
  if (isMouseOver(width / 2, 410, 200, 50)) {
    currentScreen = 1;
  }
}
