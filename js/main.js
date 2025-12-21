document.addEventListener("click", (event) => {
  const circle = event.target.closest(".circle");
  if (!circle) return;

  // Ensure the clicked circle belongs to our specific container
  if (!circle.closest("#circles-container")) return;

  circle.remove();
});
