const circlesContainer = document.getElementById("circles-container");

circlesContainer.addEventListener("click", (event) => {
  const clickedEl = event.target;

  // Make sure the clicked element is a direct child of the container
  const childrenArray = Array.from(circlesContainer.children);
  const isDirectChild = childrenArray.includes(clickedEl);

  if (!isDirectChild) return;

  circlesContainer.removeChild(clickedEl);
});
