const compChoice = document.getElementById("computer-choice");
const yourChoice = document.getElementById("user-choice");
const resultDisplay = document.getElementById("result");
const playButton = document.getElementById("play");
const possibleChoices = ["rock", "paper", "scissors"];
const choices = document.getElementsByName("choice");

// Add click event listeners to each choice radio button
choices.forEach((c) => {
  c.addEventListener("click", () => {
    // Enable the play button when a choice is clicked
    playButton.disabled = false;
    console.log("hey");
  });
});

// Add click event listener to the play button
playButton.addEventListener("click", (e) => {
  // Convert the NodeList of radio buttons to an array
  const buttonsArray = Array.from(choices);

  // Filter the array to get the selected radio button
  const selected = buttonsArray.filter((b) => b.checked);

  // Log the selected choice to the console
  console.log(yourChoice);

  // Call a function to add the selected choice to the user's span
  addTextToSpan(yourChoice, selected[0].id);

  // Generate the computer's random choice
  const randChoice = generateComputerChoice();

  // Call a function to show the result of the game
  showResult(selected[0].id, randChoice);

  // Disable the play button after the game is played
  e.target.disabled = true;

  // Uncheck all radio buttons for the next round
  choices.forEach((b) => {
    b.checked = false;
  });
});

// Function to add text to a span element
const addTextToSpan = (spanControl, text) => {
  spanControl.textContent = text;
};

// Function to generate a random computer choice
function generateComputerChoice() {
  // Generate a random index to pick a choice from the array
  const randomNumber = Math.floor(Math.random() * possibleChoices.length);
  // Get the computer's choice using the random index
  const computerChoice = possibleChoices[randomNumber];
  // Add the computer's choice to the span
  addTextToSpan(compChoice, possibleChoices[randomNumber]);
  // Return the computer's choice
  return computerChoice;
}

// Function to determine the game result based on user and computer choices
function showResult(userChoice, computerChoice) {
  // Check for a tie
  if (userChoice === computerChoice) {
    addTextToSpan(resultDisplay, "tied");
  } else if (userChoice === "rock") {
    // Check for user choosing rock
    if (computerChoice === "paper") {
      addTextToSpan(resultDisplay, "you lost");
    } else if (computerChoice == "scissors") {
      addTextToSpan(resultDisplay, "you won");
    }
  } else if (userChoice === "paper") {
    // Check for user choosing paper
    if (computerChoice === "scissors") {
      addTextToSpan(resultDisplay, "you lost");
    } else if (computerChoice == "rock") {
      addTextToSpan(resultDisplay, "you won");
    }
  } else if (userChoice === "scissors") {
    // Check for user choosing scissors
    if (computerChoice === "rock") {
      addTextToSpan(resultDisplay, "you lost");
    } else if (computerChoice == "paper") {
      addTextToSpan(resultDisplay, "you won");
    }
  }
}
