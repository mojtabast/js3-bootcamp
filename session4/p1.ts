
function guessing_game() {
  const target_number: number = Math.floor(Math.random() * 10) + 1;

  let number_of_guesses: number = 0;
  const possible_guesses = 5;

  while (number_of_guesses < possible_guesses) {
    const guess = parseInt(prompt("Guess the number (1-10):"));
    if (guess === target_number) {
      console.log("Congrats! you won");
    } else {
      console.log("Try again.", target_number);
    }

    number_of_guesses++;
  }
}

guessing_game();
