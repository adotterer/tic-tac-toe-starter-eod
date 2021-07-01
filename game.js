const xURL =
  "https://assets.aaonline.io/Module-DOM-API/formative-project-tic-tac-toe/player-x.svg";

const oURL =
  "https://assets.aaonline.io/Module-DOM-API/formative-project-tic-tac-toe/player-o.svg";

export default class Game {
  constructor(user1, user2) {
    this.user1 = user1;
    this.user2 = user2;
    this.currentPlayer = "x";
    this.board = this._constructBoard();
    this._displayNames();
  }

  // GAME LOGIC METHODS
  _constructBoard() {
    const board = new Array(3);
    return board.fill([null, null, null]);
  }

  _playInSquare(row, col) {
    console.log(
      this._currentPlayerName,
      "is playing in ROW:",
      row,
      "COL:",
      col
    );

    // TO DO 1: make sure square is empty

    // TO DO 2: update this.board

    // TO DO 3: update DOM

    this._togglePlayer();
  }

  set _updateBoard(row, col) {
    // YOUR CODE HERE (TO DO 1 & 2)
  }

  _togglePlayer() {
    this.currentPlayer === "x"
      ? (this.currentPlayer = "o")
      : (this.currentPlayer = "x");
    return this.currentPlayerName;
  }

  // this is called a 'getter' method
  get currentPlayerName() {
    return this.currentPlayer === "x" ? this.user1 : this.user2;
    // now we can access the current player's name by the property .currentPlayerName
    // see _togglePlayer() method for an example
  }

  // DOM MANIPULATION METHODS
  toggleFormGridDisplay() {
    document.querySelector("form").style.display = "none";
    document.querySelector("#grid-container").style.display = "grid";
    this._attachEventListeners();
    return this;
  }

  _attachEventListeners() {
    const squares = document.querySelectorAll("div.square");
    squares.forEach((sqr) =>
      sqr.addEventListener("click", (e) => {
        // console.log("the classes of the ", e.target.classList);
        const [_squareClass, squarePosition] = e.target.classList;
        // console.log(
        //   squarePosition,
        //   "<--- square position, ie the player's move"
        // );
        const [_gridLabel, row, column] = squarePosition.split("-");
        this._playInSquare(row, column);
      })
    );
  }

  _displayNames() {
    const [span1, span2] = document.querySelectorAll("span.user");
    span1.innerHTML = this.user1;
    span2.innerHTML = this.user2;
    document.querySelector("#diplay-names").style.display = "block";
    document.querySelector("#game-controls").style.display = "flex";
  }

  _displayToken() {
    // YOUR CODE HERE (TO DO 2)
  }
}
