export const xURL =
  "https://assets.aaonline.io/Module-DOM-API/formative-project-tic-tac-toe/player-x.svg";

export const oURL =
  "https://assets.aaonline.io/Module-DOM-API/formative-project-tic-tac-toe/player-o.svg";

export function smoothElementLoad(ele) {
  ele.style.opacity = 0.1;
  ele.style.width = "1%";
  setTimeout(() => {
    ele.style.opacity = 1;
    ele.style.width = "85%";
  }, 80);
}
