const xURL =
  "https://assets.aaonline.io/Module-DOM-API/formative-project-tic-tac-toe/player-x.svg";

const oURL =
  "https://assets.aaonline.io/Module-DOM-API/formative-project-tic-tac-toe/player-o.svg";

export default class Game {
  constructor(user1, user2) {
    this.user1 = user1;
    this.user2 = user2;
    this.currentPlayerSymbol = "x";
    this.winner = "";
    this.board = this._constructBoard();
    this._displayNames();
  }

  static loadGame() {
    const savedGame = JSON.parse(localStorage.getItem("game"));
    const game = new this(savedGame.user1, savedGame.user2);

    game.board = savedGame.board;
    game.winner = savedGame.winner;

    game.toggleFormGridDisplay();
    game._attachEventListeners();
    game._fillBoard();
    game._showWinner();
    return game;
  }

  // GAME LOGIC METHODS
  _constructBoard() {
    const board = new Array(3).fill("");
    return board.map(() => {
      return [null, null, null];
    });
  }

  _fillBoard() {
    for (let row = 0; row < 3; row++) {
      for (let col = 0; col < 3; col++) {
        if (this.board[row][col]) {
          console.log("row", row, "col", col);
          const squareToFill = document.querySelector(
            `.grid-${row + 1}-${col + 1}`
          );
          const symbolToken = document.createElement("img");
          symbolToken.style.opacity = 0;
          this.board[row][col] === "x"
            ? (symbolToken.src = xURL)
            : (symbolToken.src = oURL);
          squareToFill.appendChild(symbolToken);
          setTimeout(() => {
            symbolToken.style.opacity = 1;
          }, 300);
        }
      }
    }
  }

  _playInSquare(row, col) {
    console.log(this.currentPlayerName, "is playing in ROW:", row, "COL:", col);

    this._updateBoard(row, col) && this._togglePlayer();
    this._checkForWin();
    if (this.winner) this._showWinner();
    this._storeGame();
  }

  _checkForWin() {
    const [[sq1, sq2, sq3], [sq4, sq5, sq6], [sq7, sq8, sq9]] = this.board;
    const row1 = sq1 + sq2 + sq3;
    const row2 = sq4 + sq5 + sq6;
    const row3 = sq7 + sq8 + sq9;
    const col1 = sq1 + sq4 + sq7;
    const col2 = sq2 + sq5 + sq8;
    const col3 = sq3 + sq6 + sq9;
    const diag1 = sq1 + sq5 + sq9;
    const diag2 = sq3 + sq5 + sq7;

    if (
      [row1, row2, row3, col1, col2, col3, diag1, diag2].some(
        (tokens) => tokens === "xxx"
      )
    ) {
      this.winner = "x";
    } else if (
      [row1, row2, row3, col1, col2, col3, diag1, diag2].some(
        (tokens) => tokens === "ooo"
      )
    ) {
      this.winner = "o";
    }
  }

  _updateBoard(row, col) {
    // YOUR CODE HERE (TO DO 1 & 2)
    const selectedSquare = this.board[row - 1][col - 1];

    if (!selectedSquare) {
      this.board[row - 1][col - 1] = this.currentPlayerSymbol;
      // console.log("updated board--->", this.board);
      this._displayToken(row, col);
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
    // const squares = document.querySelectorAll("div.square");
    const squares = Array.from(document.getElementsByClassName("square"));

    squares.forEach((sqr) =>
      sqr.addEventListener("click", (e) => {
        const [_squareClass, squarePosition] = e.currentTarget.classList;
        const [_gridLabel, row, column] = squarePosition.split("-");
        this._playInSquare(row, column);
      })
    );
  }

  _displayNames() {
    const [span1, span2] = document.querySelectorAll("span.user");
    span1.innerHTML = this.user1;
    span2.innerHTML = this.user2;
    document.querySelector("#display-names").style.display = "block";
    document.querySelector("#game-controls").style.display = "flex";
  }

  _displayToken(row, col) {
    // YOUR CODE HERE (TO DO 2)
    const selectedDOMSquare = document.querySelector(`.grid-${row}-${col}`);

    const symbolToken = document.createElement("img");

    this.currentPlayerSymbol === "x"
      ? (symbolToken.src = xURL)
      : (symbolToken.src = oURL);

    selectedDOMSquare.appendChild(symbolToken);
  }

  _showWinner() {
    if (!this.winner) return;
    const h2Msg = document.querySelector("#display-names h2");
    document.querySelector("#display-names h2");
    console.log(h2Msg);
    h2Msg.innerText = "Winner is " + this.winner;
  }

  _storeGame() {
    localStorage.setItem("game", JSON.stringify(this));
  }
}
