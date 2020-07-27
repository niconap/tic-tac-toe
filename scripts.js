let topRow = document.getElementById("top");
let middleRow = document.getElementById("middle");
let bottomRow = document.getElementById("bottom");

const Gameboard = () => {
    let board = ["o", "x", "x", "x", "o", "x", "o", "x", "o"];
    
    let render = (board) => {
        for (let i = 0; i < 3; i++) {
            let cell = topRow.insertCell();
            cell.innerHTML = board[i];
        }
        for (let i = 3; i < 6; i++) {
            let cell = middleRow.insertCell();
            cell.innerHTML = board[i];
        }
        for (let i = 6; i < 9; i++) {
            let cell = bottomRow.insertCell();
            cell.innerHTML = board[i];
        }
    }
    
    return {render};
};

const Player = (name) => {
    const getName = name;
    return {getName};
};