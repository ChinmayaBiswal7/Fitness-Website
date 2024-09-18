// script.js

// Function to handle navigation
function handleNavigation() {
  const featureCards = document.querySelectorAll(".feature-card");

  featureCards.forEach((card) => {
    card.addEventListener("click", (e) => {
      const target = e.currentTarget.dataset.target;
      if (target) {
        window.location.href = `${target}.html`;
      }
    });
  });
}

// Initialize navigation handling
document.addEventListener("DOMContentLoaded", () => {
  handleNavigation();
});
document.addEventListener("DOMContentLoaded", () => {
  // Add event listeners to feature cards
  document.querySelectorAll(".feature-card").forEach((card) => {
    card.addEventListener("click", (event) => {
      const target = card.getAttribute("data-target");
      if (target) {
        window.location.href = `${target}.html`;
      }
    });
  });
});
document.addEventListener("DOMContentLoaded", () => {
  const featureCards = document.querySelectorAll(".feature-card");

  featureCards.forEach((card) => {
    card.addEventListener("click", () => {
      const targetPage = card.getAttribute("data-target");
      window.location.href = targetPage;
    });
  });
});
