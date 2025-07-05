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
                if (board[i][j] = "") {
                    console.log("next round");
                }
            }
        }
        return console.log("it's a tie!");
    }
    return {checkWinner};
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
    
    function getBoard() {
        return board;
    }

    function clearBoard() {
        for (let i=0; i<3; i++) {
            for(let j=0; j<3; j++) {
                board[i][j] === "";
                return console.log("not a tie!");
            }
        }
    }


    // return functions
    return {setBoardCell, getBoard, clearBoard};
})();

/**
 * 
 * test logic (temp)
 * 
 */

const player1 = createPlayer("hi");
const player2 = createPlayer("oeps two");

gameBoard.setBoardCell(0,0,"x");
gameBoard.setBoardCell(0,1,"x");
gameBoard.setBoardCell(0,2,"x");
gameController.checkWinner();

