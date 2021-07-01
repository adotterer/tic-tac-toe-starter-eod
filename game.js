const xURL =
  "https://assets.aaonline.io/Module-DOM-API/formative-project-tic-tac-toe/player-x.svg";

const oURL =
  "https://assets.aaonline.io/Module-DOM-API/formative-project-tic-tac-toe/player-o.svg";

export default class Game {
  constructor(user1, user2) {
    this.user1 = user1;
    this.user2 = user2;
    this.currentPlayerSymbol = "x";
    this.board = this._constructBoard();
    this._displayNames();
  }

  // GAME LOGIC METHODS
  _constructBoard() {
    const board = new Array(3).fill("");
    return board.map(() => {
      return [null, null, null];
    });
  }

  _playInSquare(row, col) {
    console.log(this.currentPlayerName, "is playing in ROW:", row, "COL:", col);

    this._updateBoard(row, col);

    // TO DO 1: make sure square is empty

    // TO DO 2: update this.board

    // TO DO 3: update DOM

    this._togglePlayer();
  }

  _updateBoard(row, col) {
    // YOUR CODE HERE (TO DO 1 & 2)
    const selectedSquare = this.board[row - 1][col - 1];
    console.log(this.board, "this.board");
    // console.log(selectedSquare, "<---- selected square's value");
    if (!selectedSquare) {
      this.board[row - 1][col - 1] = this.currentPlayerSymbol;
      console.log("updated board--->", this.board);

      return true;
    } else {
      return false;
    }
  }

  _togglePlayer() {
    this.currentPlayerSymbol === "x"
      ? (this.currentPlayerSymbol = "o")
      : (this.currentPlayerSymbol = "x");
    return this.currentPlayerName;
  }

  // this is called a 'getter' method
  get currentPlayerName() {
    return this.currentPlayerSymbol === "x" ? this.user1 : this.user2;
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
