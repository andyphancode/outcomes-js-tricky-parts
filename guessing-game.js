function guessingGame() {
  // Initialize variables
  const secretNumber = Math.floor(Math.random() * 100);
  let gameEnded = false;
  let guesses = 0; // Initialize the guess count


  return function(guess) {
    // Increase guess count on each guess
    guesses++;

    // Check if the game has already ended
    if (gameEnded) {
      return `The game is over, you already won!`;
    }

    // Check the guess against the secret number
    if (guess === secretNumber) {
      gameEnded = true;
      return `You win! You found ${secretNumber} in ${guesses} guesses.`;
    } else if (guess < secretNumber) {
      return `${guess} is too low!`;
    } else {
      return `${guess} is too high!`;
    }
  };
}

module.exports = { guessingGame };
