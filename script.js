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

function gameController() {
    

}

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
        console.log(board);
        // return board;
    }

    function clearBoard() {
        board = [
            ["","",""],
            ["","",""],
            ["","",""]
        ];
    }


    // return functions
    return {setBoardCell, getBoard, clearBoard};
})();

/**
 * 
 * test logic (temp)
 * 
 */

gameBoard.setBoardCell(2,2, "X");
gameBoard.getBoard();
gameBoard.setBoardCell(1,1,"O");
gameBoard.clearBoard();

