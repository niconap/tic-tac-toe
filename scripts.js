//Global variables
let topRow = document.getElementById("top");
let middleRow = document.getElementById("middle");
let bottomRow = document.getElementById("bottom");
let currentPlayer = 0;
let hasWon = false;
let moves = 0;

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
                let wrapper = document.getElementById("wrapper");
                wrapper.appendChild(paragraph);
                hasWon = true;
            } else if (board[0] == "o" && board[1] == "o" && board[2] == "o" || board[3] == "o" && board[4] == "o" && board[5] == "o" || board[6] == "o" && board[7] == "o" && board[8] == "o" ||
            board[0] == "o" && board[3] == "o" && board[6] == "o" || board[1] == "o" && board[4] == "o" && board[7] == "o" || board[2] == "o" && board[5] == "o" && board[8] == "o" || 
            board[0] == "o" && board[4] == "o" && board[8] == "o" || board[2] == "o" && board[4] == "o" && board[6] == "o") {
                let paragraph = document.createElement("p");
                paragraph.setAttribute("id", "par");
                paragraph.innerHTML = "Player 2 has won!"
                let wrapper = document.getElementById("wrapper");
                wrapper.appendChild(paragraph);
                hasWon = true;
            } else if (moves == 9) {
                let paragraph = document.createElement("p");
                paragraph.setAttribute("id", "par");
                paragraph.innerHTML = "It's a tie!"
                let wrapper = document.getElementById("wrapper");
                wrapper.appendChild(paragraph);
                hasWon = true;
            } else {
                return;
            }
        }

        checkWin();
    };
    
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

    return {render};
};

// Make a player and assign a name and a shape (x or o)
const Player = (name, shape, id) => {
    const getName = name;
    const getShape = shape;

    return {getName, getShape};
};

let i = Gameboard();
i.render();