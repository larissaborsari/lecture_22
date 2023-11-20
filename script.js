const generateRandomNumber = () => {
  return Math.floor(Math.random() * 100) + 1; // Generate a random number between 1 and 100
};

function checkGuess() {
  var guess = parseInt(document.getElementById("txtInput").value);
  var number = generateRandomNumber();
  var attempts = 1; // Start attempts at 1

  while (guess !== number) {
    if (guess < number) {
      guess = parseInt(prompt("Guess Higher: "));
    } else if (guess > number) {
      guess = parseInt(prompt("Guess Lower: "));
    }

    if (isNaN(guess)) {
      // If input is not a number, ask again
      guess = parseInt(prompt("Please enter a valid number: "));
    }

    attempts++;
  }

  if (guess === number) {
    alert("Congratulations! You guessed the number in " + attempts + " attempt(s)");
  }
}
