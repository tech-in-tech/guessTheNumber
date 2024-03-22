let btn = document.querySelector("#btn");
let randomNumber = Math.floor(Math.random() * (100 - 1)) + 1;
let chance = 10;
let previousguesses = [];
btn.addEventListener("click", (e) => {
  chance = chance - 1;
  let result = document.querySelector("#result");
  let input = parseInt(document.querySelector("#userGuess").value);
  let previousGuess = document.querySelector("#previousGuess");
  let guessRemaining = document.querySelector("#guessRemaining");
  previousguesses.push(input);
  previousGuess.innerText = `previous Guess : ${previousguesses}`
  guessRemaining.innerText = `Guesses Remaining : ${chance}`;
  // console.log(guessRemaining.innerText);
  // console.log(previousguesses);
  // console.log(`random Number : ${randomNumber}`);
  // console.log(`Input number : ${input}`);

  if (chance >= 1) {
    if (input < randomNumber) {
      // console.log("too low");
      result.innerText = "Too Low !!"
      result.style.color = "green"
      result.style.fontWeight = "800"
    }
    else if (input > randomNumber) {
      // console.log("Too High");
      result.innerText = "Too High !!"
      result.style.color = "green"
      result.style.fontWeight = "800"
    }

    else {
      result.innerText = "Congratulations Correct Guess!!"
      result.style.color = "green"
      result.style.fontWeight = "800"
    }
  }
  else {
    result.innerText = "You Lose !"
    result.style.color = "green"
    result.style.fontWeight = "800"
  }
});