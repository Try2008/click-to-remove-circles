const circlesContainer = document.getElementById("circles-container");

circlesContainer.addEventListener("click", (event) => {
  // Find the nearest element with class "circle" that was clicked
  const circle = event.target.closest(".circle");

  // If click was not on a circle (or inside one), do nothing
  if (!circle) return;

  // Safety: make sure the found circle is inside our container
  if (!circlesContainer.contains(circle)) return;

  // Remove from DOM completely
  circle.remove();
});
