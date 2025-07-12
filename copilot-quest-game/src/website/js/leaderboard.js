// Leaderboard data
const leaderboard = [
  { team: "Team Logic", score: 100 },
  { team: "Team Harmony", score: 95 },
  { team: "Team Action", score: 90 },
  { team: "Team Imagination", score: 85 },
];

// Function to display the leaderboard
function displayLeaderboard() {
  const leaderboardList = document.getElementById("leaderboard-list");
  leaderboard.forEach((entry) => {
    const listItem = document.createElement("li");
    listItem.textContent = `${entry.team} - ${entry.score} points`;
    leaderboardList.appendChild(listItem);
  });
}

// Call this function when the page loads
// displayLeaderboard();
