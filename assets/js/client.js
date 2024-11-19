let hue = 0;
function updateHighlightColor() {
  hue = (hue + 1) % 360;
  document.documentElement.style.setProperty(
    "--highlight-text-color",
    `hsl(${hue}, 35%, 75%)`
  );
  requestAnimationFrame(updateHighlightColor);
}

updateHighlightColor();
