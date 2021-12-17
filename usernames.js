import Game from "./game.js";
import { xURL, oURL, smoothElementLoad } from "./utils.js";
const inputs = document.querySelectorAll("input");
const [user1, user2] = inputs;

export function validateInputs() {
  if (Array.from(inputs).every((input) => input.value.length > 0)) {
    return true;
  } else {
    alert("Please enter both player names");
    return false;
  }
}

const tokenLabels = document.querySelectorAll(".token-img");
const [xImgSpan, oImgSpan] = tokenLabels;
const xImg = document.createElement("img");
xImg.src = xURL;
const oImg = document.createElement("img");
oImg.src = oURL;
xImgSpan.appendChild(smoothElementLoad(xImg));
oImgSpan.appendChild(smoothElementLoad(oImg));
export function beginNewGame() {
  let game = new Game(user1.value, user2.value);
  return game.toggleFormGridDisplay();
}
