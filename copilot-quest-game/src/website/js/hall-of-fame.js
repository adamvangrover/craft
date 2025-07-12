// Hall of Fame data
const hallOfFame = [
  { team: "Team Logic", score: 100, date: "2024-01-15" },
  { team: "Team Harmony", score: 95, date: "2024-02-20" },
];

// Function to display the Hall of Fame
function displayHallOfFame() {
  const hallOfFameList = document.getElementById("hall-of-fame-list");
  hallOfFame.forEach((entry) => {
    const listItem = document.createElement("li");
    listItem.textContent = `${entry.team} - ${entry.score} points (${entry.date})`;
    hallOfFameList.appendChild(listItem);
  });
}

// Call this function when the page loads
// displayHallOfFame();
