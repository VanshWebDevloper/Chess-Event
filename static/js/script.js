
import { Chess } from "https://cdn.jsdelivr.net/npm/chess.js@1.4.0/+esm";

const chess = new Chess();
const board = document.getElementById("chessboard");
const status = document.getElementById("status");

const symbols = {
  w: { k: "♔", q: "♕", r: "♖", b: "♗", n: "♘", p: "♙" },
  b: { k: "♚", q: "♛", r: "♜", b: "♝", n: "♞", p: "♟" }
};

let selected = null;

function renderBoard() {
  board.innerHTML = "";

  const position = chess.board();

  position.forEach((row, rowIndex) => {
    row.forEach((piece, colIndex) => {
      const square = document.createElement("div");
      square.classList.add("square");

      const name = `${"abcdefgh"[colIndex]}${8 - rowIndex}`;
      square.dataset.square = name;

      if (piece) {
        const element = document.createElement("span");
        element.classList.add("piece");
        element.textContent = symbols[piece.color][piece.type];
        square.appendChild(element);
      }

      if (name === selected) {
        square.classList.add("selected");
      }

      if (selected) {
        const moves = chess.moves({
          square: selected,
          verbose: true
        });

        if (moves.some(move => move.to === name)) {
          square.classList.add("legal-move");
        }
      }

      board.appendChild(square);
    });
  });

  updateStatus();
}

function updateStatus() {
  const turn = chess.turn() === "w" ? "White" : "Black";

  if (chess.isCheckmate()) {
    status.textContent = `Checkmate! ${turn === "White" ? "Black" : "White"} wins!`;
  } else if (chess.isStalemate()) {
    status.textContent = "Draw by stalemate!";
  } else if (chess.isDraw()) {
    status.textContent = "Game drawn!";
  } else if (chess.isCheck()) {
    status.textContent = `${turn} is in check!`;
  } else {
    status.textContent = `${turn}'s turn`;
  }
}

board.addEventListener("click", event => {
  const square = event.target.closest(".square");

  if (!square || chess.isGameOver()) return;

  const target = square.dataset.square;
  const piece = chess.get(target);

  if (selected) {
    const legalMoves = chess.moves({
      square: selected,
      verbose: true
    });

    const isLegalTarget = legalMoves.some(
      move => move.to === target
    );

    if (isLegalTarget) {
      chess.move({
        from: selected,
        to: target,
        promotion: "q"
      });

      selected = null;
      renderBoard();
      return;
    }
  }

  if (piece && piece.color === chess.turn()) {
    selected = target;
  } else {
    selected = null;
  }

  renderBoard();
});

renderBoard();
