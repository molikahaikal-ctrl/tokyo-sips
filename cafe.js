console.log("cafe.js connected sucessfuly!");
document.addEventListener("DOMContentLoaded", () => {
  console.log("html is fully pared and ready!");

});

const card = document.getElementById('aura-Card');
//to track progress a long the perimeter(from 0 to 1)
let progress = 0;
function animateAura() {
  const rect = card.getBoundingClientRect();
  const width = rect.width;
  const height = rect.height;
  //calculate the perimeter length totale of the card.
  const perimeter = (width + height) * 2;
  // To Convert progress into pixels along the perimeter
  let distance = progress * perimeter;
  let x = 0;
  let y = 0;

  //To Map the distance to the four edges of the card box
  if (distance < width) {
    // from the Top edge: moving left to right
    x = distance;
    y = 0;
  } else if (distance < width + height) {
    // from the Right edge: moving top to bottom
    x = width;
    y = distance - width;
  } else if (distance < width * 2 + height) {
    //to move fron Bottom edge: moving right to left
    x = width - (distance - (width + height));
    y = height;
  } else {
    //from the  Left edge: moving bottom to top
    x = 0;
    y = height - (distance - (width * 2 + height));
  }
  //This is to Apply coordinates to your CSS variables
  card.style.setProperty(`--x`, `${x}px`);
  card.style.setProperty(`--y`, `${y}px`);
  progress += 0.005;
  // Advance progress (adjust the speed here: higher = faster, lower = slower)
  if (progress >= 1) {
    progress = 0; // To make the Loop back to the start.


  }
  requestAnimationFrame(animateAura);
}
// Start the loop
requestAnimationFrame(animateAura);
