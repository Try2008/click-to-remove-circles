document.addEventListener("click", (event) => {
  const circle = event.target.closest(".circle");
  if (!circle) return;

  // Only remove circles that are inside our container
  const isInsideContainer = circle.closest("#circles-container");
  if (!isInsideContainer) return;

  circle.remove();
});
