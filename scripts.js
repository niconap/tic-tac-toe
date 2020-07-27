let topRow = document.getElementById("top");
let middleRow = document.getElementById("middle");
let bottomRow = document.getElementById("bottom");
let currentPlayer = 0;

const Gameboard = () => {
    let board = [" ", " ", " ", " ", " ", " ", " ", " ", " "];
    
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
        let cells = document.querySelector("td");

        let changeState = (id) => {
            if (board[id] == " " && currentPlayer == 0) {
                board[id] = "x";
                currentPlayer = 1;
                render();
            } else if (board[id] == " " && currentPlayer == 1) {
                board[id] = "o";
                currentPlayer = 0;
                render();
            } else {
                return;
            }
        };
    }

    return {render};
};

const Player = (name, shape, id) => {
    const getName = name;
    const getShape = shape;

    return {getName, getShape};
};