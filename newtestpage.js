const el = document.querySelector("#gameboard");
const error = document.querySelector(".displayError");
const board = [];
let lastPlayer = "O";
let markedTileCounter = 0;
let gameOver = false;
const winningCombinations = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
];

function makeGrid(){
    let numOfGrids = 0;
    while(numOfGrids < 9){
        const nineGrids = document.createElement("div");
        nineGrids.classList.add("tile", numOfGrids);
        el.appendChild(nineGrids);
        board.push(nineGrids)
        numOfGrids++;
    }
}
makeGrid();

function checkForWinner(player){
    // if there is a winner
    // change gameOver to true

    //logic to check if there is a winner
    if(board[0] === player && board[1] === player && board[2] === player){
        console.log("condition 0 ran");
        return gameOver = true;
    }
    if(board[3] === player && board[4] === player && board[5] === player){
        console.log("condition 1 ran");
        return gameOver = true;
    }
    if(board[6] === player && board[7] === player && board[8] === player){
        console.log("condition 2 ran");
        return gameOver = true;
    }
    if(board[0] === player && board[3] === player && board[6] === player){
        console.log("condition 3 ran");
        return gameOver = true;
    }
    if(board[1] === player && board[4] === player && board[7] === player){
        console.log("condition 4 ran");
        return gameOver = true;
    }
    if(board[2] === player && board[5] === player && board[8] === player){
        console.log("condition 5 ran");
        return gameOver = true;
    }
    if(board[0] === player && board[4] === player && board[8] === player){
        console.log("condition 6 ran");
        return gameOver = true;
    }
    if(board[2] === player && board[4] === player && board[6] === player){
        console.log("condition 7 ran");
        return gameOver = true;
    }
    if(board.forEach(element => element === "X" || "O")){
        console.log("condition 8 - tie ran");
        return gameOver = true;
    }
}

function renderPlayerMarkerOnClick(player){
    el.addEventListener("click", function(e){
        if(gameOver === true)return;
        if(e.target.innerHTML !== ""){
            error.textContent = "This tile has already been picked.";
            testing();
            return;
        }
        if(e.target.className.includes("tile")){
            e.target.innerHTML = player;
            error.textContent = "";
            board[board.indexOf(e.target)] = player;
            checkForWinner(player)
            testing();      
        }
    }, {once : true});
}

function testing (){
    if(lastPlayer === "O"){
        player1();
        console.log(board);
        // checkForWinner("X");
        // renderPlayerMarkerOnClick("X");
        // lastPlayer = "X";
    }
    else{
        player2();
        console.log(board)
        // checkForWinner("O");
        // renderPlayerMarkerOnClick("O");
        // lastPlayer = "O";
    }
}
testing();


function player1(){
    renderPlayerMarkerOnClick("X");
    lastPlayer = "X";
}

function player2(){
    renderPlayerMarkerOnClick("O");
    lastPlayer = "O";
}

