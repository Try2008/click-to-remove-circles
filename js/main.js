// Get the parent container
const circlesContainer = document.getElementById("circles-container");

// Get all children (live collection)
const circles = circlesContainer.children;

// We convert the HTMLCollection to an array
// so we can safely attach events
Array.from(circles).forEach((circle) => {
  circle.addEventListener("click", () => {
    circlesContainer.removeChild(circle);
  });
});
