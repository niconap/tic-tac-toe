// Global variables
let topRow = document.getElementById("top");
let middleRow = document.getElementById("middle");
let bottomRow = document.getElementById("bottom");

let startbutton = document.getElementById("start");
let firstInput = document.getElementById("textinput1");
let secondInput = document.getElementById("textinput2");
let wrapper = document.getElementById("wrapper");
let input = document.getElementById("input");

let currentPlayer = 0;
let moves = 0;
let hasWon = false;

// Global functions

// Start the game when the start button is pressed
// Make two players and assign their shapes (use the Player "class")
// Display the two players and their shapes on the page
startbutton.addEventListener("click", function () {
    if (!firstInput.value == "" && !secondInput.value == "") {
        let playerOne = Player(firstInput.value, "cross");
        let playerTwo = Player(secondInput.value, "circle");
        let interface = Interface();
        interface.displayPlayer(playerOne, playerTwo);
        let game = Gameboard();
        game.render();
    }
});

// Render the gameboard
// Check if a player has won
// Manage player input
const Gameboard = () => {
    let board = [" ", " ", " ", " ", " ", " ", " ", " ", " "];
    
    // Render the gameboard based on an array
    let render = () => {
        topRow.innerHTML = "";
        middleRow.innerHTML = "";
        bottomRow.innerHTML = "";
        for (let i = 0; i < 3; i++) {
            let cell = topRow.insertCell();
            cell.setAttribute("data-id", i);
            cell.addEventListener("click", getId = () => {
                let cellId = cell.getAttribute("data-id");
                changeState(cellId);
            });
            cell.innerHTML = board[i];
        }
        for (let i = 3; i < 6; i++) {
            let cell = middleRow.insertCell();
            cell.setAttribute("data-id", i);
            cell.addEventListener("click", getId = () => {
                let cellId = cell.getAttribute("data-id");
                changeState(cellId);
            });
            cell.innerHTML = board[i];
        }
        for (let i = 6; i < 9; i++) {
            let cell = bottomRow.insertCell();
            cell.setAttribute("data-id", i);
            cell.addEventListener("click", getId = () => {
                let cellId = cell.getAttribute("data-id");
                changeState(cellId);
            });
            cell.innerHTML = board[i];
        }

        // Check if there's three of the same symbols in a row
        let checkWin = () => {
            if (board[0] == "x" && board[1] == "x" && board[2] == "x" || board[3] == "x" && board[4] == "x" && board[5] == "x" || board[6] == "x" && board[7] == "x" && board[8] == "x" || 
            board[0] == "x" && board[3] == "x" && board[6] == "x" || board[1] == "x" && board[4] == "x" && board[7] == "x" || board[2] == "x" && board[5] == "x" && board[8] == "x" ||
            board[0] == "x" && board[4] == "x" && board[8] == "x" || board[2] == "x" && board[4] == "x" && board[6] == "x") {
                let paragraph = document.createElement("p");
                paragraph.setAttribute("id", "par");
                paragraph.innerHTML = "Player 1 has won!"
                wrapper.appendChild(paragraph);
                hasWon = true;
                let reset = Interface();
                reset.resetButton();
            } else if (board[0] == "o" && board[1] == "o" && board[2] == "o" || board[3] == "o" && board[4] == "o" && board[5] == "o" || board[6] == "o" && board[7] == "o" && board[8] == "o" ||
            board[0] == "o" && board[3] == "o" && board[6] == "o" || board[1] == "o" && board[4] == "o" && board[7] == "o" || board[2] == "o" && board[5] == "o" && board[8] == "o" || 
            board[0] == "o" && board[4] == "o" && board[8] == "o" || board[2] == "o" && board[4] == "o" && board[6] == "o") {
                let paragraph = document.createElement("p");
                paragraph.setAttribute("id", "par");
                paragraph.innerHTML = "Player 2 has won!"
                wrapper.appendChild(paragraph);
                hasWon = true;
                let reset = Interface();
                reset.resetButton();
            } else if (moves == 9) {
                let paragraph = document.createElement("p");
                paragraph.setAttribute("id", "par");
                paragraph.innerHTML = "It's a tie!"
                wrapper.appendChild(paragraph);
                hasWon = true;
                let reset = Interface();
                reset.resetButton();
            } else {
                return;
            }
        }
        checkWin();
    }

    let resetBoard = () => {
        board = [" ", " ", " ", " ", " ", " ", " ", " ", " "]
        currentPlayer = 0;
        hasWon = false;
        render();
    }
    
    // Change the content of the cells in the gameboard 
    // Make sure that the symbol matches the current player
    let changeState = (id) => {
        if (hasWon == false) {
            if (board[id] == " " && currentPlayer == 0) {
                board[id] = "x";
                currentPlayer = 1;
                moves++;
                render();
            } else if (board[id] == " " && currentPlayer == 1) {
                board[id] = "o";
                currentPlayer = 0;
                moves++;
                render();
            } else {
                return;
            }
        }
    }

    return {render, resetBoard};
};

// Make a player and assign a name 
const Player = (name, shape) => {
    const getName = name;
    const getShape = shape;

    return {getName, getShape};
};

// Manipulate the DOM (excluding the game board)
const Interface = () => {
    let displayPlayer = (player1, player2) => {
        let display = document.createElement("paragraph");
        display.innerHTML = `${player1.getName} ${player1.getShape}`;
        wrapper.appendChild(display);
        let display2 = document.createElement("paragraph");
        display2.innerHTML = `${player2.getName} ${player2.getShape}`;
        wrapper.appendChild(display2);
        removeUI();
    }

    let removeUI = () => {
        input.removeChild(firstInput);
        input.removeChild(secondInput);
        input.removeChild(startbutton);
    }

    let resetButton = () => {
        let button = document.createElement("button");
        button.innerHTML = "Restart";
        button.addEventListener("click", function () {
            moves = 0;
            let reset = Gameboard();
            reset.resetBoard();
            wrapper.removeChild(button);
            let paragraph = document.getElementById("par");
            wrapper.removeChild(paragraph);
        });
        wrapper.appendChild(button);
    }

    return {displayPlayer, resetButton};
}
