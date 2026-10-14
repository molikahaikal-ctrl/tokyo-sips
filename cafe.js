console.log("cafe.js connected sucessfuly!");
document.addEventListener("DOMContentLoaded", () => {
  console.log("html is fully pared and ready!");

});

const card = document.getElementById('aura-Card')
/* to track the angle of the circle motion*/
let angle = 0.05;
function animateAura() {
  //to get the current size of the card
  const rect = card.getBoundingClientRect();

  // to found the center point of the card
  const centerX = rect.width / 2;
  const centerY = rect.height / 2;

  // to set how far the light travel from center
  const radiusX = rect.width * 0.4; // this is to determine how wide the circle go
  const radiusY = 10; // this is to determine how much it bobs up and down.

  //  Use math (cos and sin) to calculate smooth looping coordinates
  const x = centerX + Math.cos(angle) * radiusX;
  const y = centerY + Math.cos(angle) * radiusY;

  // the coordination to the css variables
  card.StyleProperty(`--x`, `${x}px`);
  card.StyleProperty(`--y`, `${y}px`);

  //to  Increase the angle for the next frame
  angle += 0.04;
};

// Start the animation loop!
requestAnimationFrame(animateAura);
