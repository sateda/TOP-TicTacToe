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
                return console.log("winner is player 1");
            } else if (board[i][0] === "o" && board[i][1] === "o" && board[i][2] === "o") {
                return console.log("winner is player 2");
            }
        }

        // check column on identical values
        for(let i=0; i<3; i++) {
            if(board[0][i] === "x" && board[1][i] === "x" && board[2][i] === "x") {
                return console.log("winner is player 1");
            } else if (board[0][i] === "o" && board[1][i] === "o" && board[2][i] === "o") {
                return console.log("winner is player 2");
            }
        }

        // check diagonal left to right
        if(board[0][0] === "x" && board[1][1] === "x" && board[2][2] === "x") {
            return console.log("winner is player 1");
        } else if (board[0][0] === "o" && board[1][1] === "o" && board[2][2] === "o") {
            return console.log("winner is player 2");
        }

        // check diagonal right to left
        if(board[0][2] === "x" && board[1][1] === "x" && board[2][0] === "x") {
            return console.log("winner is player 1");
        } else if (board[0][2] === "o" && board[1][1] === "o" && board[2][0] === "o") {
            return console.log("winner is player 2");
        }

        // check if it's a tie
        for (let i=0; i<3; i++) {
            for(let j=0; j<3; j++) {
                if (board[i][j] === "") {
                    console.log("next round");
                }
            }
        }
        return console.log("it's a tie!");
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
            alert("Cell is taken!");
        } else {
            gameBoard.setBoardCell(row,col,player);
            cell.textContent = player;
            gameController.checkWinner();
            gameController.switchPlayer();
        }
    })
})

