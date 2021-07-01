import { validateInputs, beginNewGame } from "./usernames.js";

let game;

function constructGame(event) { // event is passed from the button's "click" event
  event.preventDefault();
  // With both player name inputs filled, we set the global `game` to represent a new instance
  // of the game class using beginNewGame()
  if (validateInputs()) {
    game = beginNewGame();
  } else {
    alert("Please enter player names");
  }
}
const x =
  "https://assets.aaonline.io/Module-DOM-API/formative-project-tic-tac-toe/player-x.svg";

const o =
  "https://assets.aaonline.io/Module-DOM-API/formative-project-tic-tac-toe/player-o.svg";

window.addEventListener("DOMContentLoaded", () => {
  const startGameButton = document.querySelector("button.usernames-button");
  startGameButton.addEventListener("click", constructGame);


});
