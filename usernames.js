import Game from "./game.js";
const inputs = document.querySelectorAll("input");
const [user1, user2] = inputs;

export function validateInputs() {
  if (Array.from(inputs).every((input) => input.value.length > 0)) {
    localStorage.setItem("user1", user1.value);
    localStorage.setItem("user2", user2.value);
    return true;
  } else {
    alert("Please enter both player names");
    return false;
  }
}

export function beginNewGame() {
  const game = new Game(user1.value, user2.value);
  return game.toggleFormGridDisplay();
}
