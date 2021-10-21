import { validateInputs, beginNewGame } from "./usernames.js";

let game;

function constructGame(event) {
  // event is passed from the button's "click" event
  event.preventDefault();
  //  With both player name inputs filled, we set the global `game` variable
  //  to represent a new instance of the game class using beginNewGame()
  if (validateInputs()) {
    game = beginNewGame();
  }
}

window.addEventListener("DOMContentLoaded", () => {
  const startGameButton = document.querySelector("button.usernames-button");
  startGameButton.addEventListener("click", constructGame);
});
