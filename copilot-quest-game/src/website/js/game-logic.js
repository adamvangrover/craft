// Team data
const teams = {
  logic: { name: "Team Logic", members: [] },
  harmony: { name: "Team Harmony", members: [] },
  action: { name: "Team Action", members: [] },
  imagination: { name: "Team Imagination", members: [] },
};

// Hall of Fame data
const hallOfFame = [
  { team: "Team Logic", score: 100, date: "2024-01-15" },
  { team: "Team Harmony", score: 95, date: "2024-02-20" },
];

// Function to sort players into teams
function sortIntoTeam(player, personality) {
  if (personality === "logic") {
    teams.logic.members.push(player);
  } else if (personality === "harmony") {
    teams.harmony.members.push(player);
  } else if (personality === "action") {
    teams.action.members.push(player);
  } else {
    teams.imagination.members.push(player);
  }
}

// Function to get a random question
function getQuestion(category) {
  const questions = {
    risk: [
      { text: "What is the biggest risk to our company?", type: "open" },
      { text: "How can we mitigate the risk of a data breach?", type: "open" },
      { text: "What are the top three risks in our industry?", type: "open" },
    ],
    compliance: [
      { text: "Is our company compliant with all regulations?", type: "boolean" },
      { text: "What are the consequences of non-compliance?", type: "open" },
      { text: "How can we ensure that we remain compliant?", type: "open" },
    ],
    safety: [
      { text: "What is our company's safety record?", type: "open" },
      { text: "How can we improve our safety procedures?", type: "open" },
      { text: "What are the most common workplace accidents?", type: "open" },
    ],
    lightning: [
      { text: "What is the capital of France?", type: "multiple-choice", options: ["Paris", "London", "Berlin", "Rome"] },
      { text: "What is the highest mountain in the world?", type: "multiple-choice", options: ["Mount Everest", "K2", "Kangchenjunga", "Lhotse"] },
      { text: "What is the largest ocean in the world?", type: "multiple-choice", options: ["Pacific Ocean", "Atlantic Ocean", "Indian Ocean", "Arctic Ocean"] },
    ],

  };
  return questions[category][Math.floor(Math.random() * questions[category].length)];
}

// Function to update the score
function updateScore(team, points) {
  // In a real application, you would have a more sophisticated scoring system.
  console.log(`Team ${team} gets ${points} points!`);
}

// Function to display the Hall of Fame
function displayHallOfFame() {
  const hallOfFameList = document.getElementById("hall-of-fame-list");
  hallOfFame.forEach((entry) => {
    const listItem = document.createElement("li");
    listItem.textContent = `${entry.team} - ${entry.score} points (${entry.date})`;
    hallOfFameList.appendChild(listItem);
  });
}

// Example usage:
sortIntoTeam("Player 1", "logic");
sortIntoTeam("Player 2", "harmony");

const riskQuestion = getQuestion("risk");
console.log(riskQuestion.text);

updateScore("Team Logic", 10);

// Call this function when the page loads
// displayHallOfFame();
