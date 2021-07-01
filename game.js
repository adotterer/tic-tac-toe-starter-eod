export default class Game {
  constructor(user1, user2) {
    this.user1 = user1;
    this.user2 = user2;
    this.board = this._constructBoard();
    this._displayNames();
  }

  // GAME LOGIC METHODS
  _constructBoard() {
    const board = new Array(3);
    return board.fill([null, null, null]);
  }

  // DOM MANIPULATION METHODS
  _displayNames() {
    const [span1, span2] = document.querySelectorAll("span.user");
    span1.innerHTML = this.user1;
    span2.innerHTML = this.user2;
    document.querySelector("#diplay-names").style.display = "block";
    document.querySelector("#game-controls").style.display = "flex";
  }
}
