/**
 * 
 * Factory Player
 * 
 */

function createPlayer(name) {
    // set score function
    return { name };
}

/**
 * 
 * Factory game controller
 * 
 */

const gameController = (function() {
    let currentPlayer = "x";

    function checkWinner() {
        const board = gameBoard.getBoard();

        // check row on identical values
        for(let i=0; i<3; i++) {
            if(board[i][0] === "x" && board[i][1] === "x" && board[i][2] === "x") {
                gameEnd("player1");
            } else if (board[i][0] === "o" && board[i][1] === "o" && board[i][2] === "o") {
                gameEnd("player2");
            }
        }

        // check column on identical values
        for(let i=0; i<3; i++) {
            if(board[0][i] === "x" && board[1][i] === "x" && board[2][i] === "x") {
                gameEnd("player1");
            } else if (board[0][i] === "o" && board[1][i] === "o" && board[2][i] === "o") {
                gameEnd("player2");
            }
        }

        // check diagonal left to right
        if(board[0][0] === "x" && board[1][1] === "x" && board[2][2] === "x") {
            gameEnd("player1");
        } else if (board[0][0] === "o" && board[1][1] === "o" && board[2][2] === "o") {
            gameEnd("player2");
        }

        // check diagonal right to left
        if(board[0][2] === "x" && board[1][1] === "x" && board[2][0] === "x") {
            gameEnd("player1");
        } else if (board[0][2] === "o" && board[1][1] === "o" && board[2][0] === "o") {
            gameEnd("player2");
        }

        // check if it's a tie
        for (let i=0; i<3; i++) {
            for(let j=0; j<3; j++) {
                if (board[i][j] === "") {
                    return;
                }
            }
        }
        gameEnd("tie");
    }

    function getPlayerTurn() {
        return currentPlayer;
    }

    function switchPlayer() {
        if(currentPlayer === "x") {
            currentPlayer = "o";
        } else {
            currentPlayer = "x";
        }
        pPlayerTurn.textContent = "Player: " + gameController.getPlayerTurn();
    }

    function gameEnd(endStatus) {
        if(endStatus === "player1") {
            alert("Player 1 won the game!");
        } else if (endStatus === "player2") {
            alert("Player 2 won the game!");
        } else if (endStatus === "tie") {
            alert("it's a tie")
        }

        gameBoard.clearBoard();
    }

    return {checkWinner, getPlayerTurn, switchPlayer};
})();

/**
 * 
 * Game board module
 * 
 */

const gameBoard = (function(){
    let board = [
        ["","",""],
        ["","",""],
        ["","",""]
    ];

    function setBoardCell(row, column, value) {
        board[row][column] = value;
    }

    function getBoardCell(row, column) {
        return board[row][column];
    }
    
    function getBoard() {
        return board;
    }

    function clearBoard() {
        for (let i=0; i<3; i++) {
            for(let j=0; j<3; j++) {
                board[i][j] = "";
            }
        }
        
        const cells = document.querySelectorAll(".cell");
        cells.forEach(cell => {
            cell.textContent = "";
        });
    }


    // return functions
    return {setBoardCell, getBoard, clearBoard, getBoardCell};
})();

/**
 * 
 * test logic (temp)
 * 
 */

const player1 = createPlayer("hi");
const player2 = createPlayer("oeps two");

/**
 * 
 * DOM functions
 * 
 */

const cells = document.querySelectorAll(".cell");
cells.forEach((cell) => {
    cell.addEventListener("click", () => {
        const row = cell.getAttribute("data-row");
        const col = cell.getAttribute("data-col");
        const player = gameController.getPlayerTurn();
        if(gameBoard.getBoardCell(row,col) !== "") {
            return;
        } else {
            gameBoard.setBoardCell(row,col,player);
            cell.textContent = player;
            gameController.checkWinner();
            gameController.switchPlayer();
        }
    })
})

const btnReset = document.querySelector("#reset");
btnReset.addEventListener("click", gameBoard.clearBoard);

const pPlayerTurn = document.querySelector("#playerTurn");
pPlayerTurn.textContent = "Player: " + gameController.getPlayerTurn();