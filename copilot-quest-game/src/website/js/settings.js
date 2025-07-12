// Function to toggle dark mode
function toggleDarkMode() {
  const darkModeToggle = document.getElementById("dark-mode-toggle");
  darkModeToggle.addEventListener("change", () => {
    document.body.classList.toggle("dark-mode");
  });
}

// Call this function when the page loads
toggleDarkMode();
