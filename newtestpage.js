const el = document.querySelector("#gameboard");
const error = document.querySelector(".displayError");
const board = [];
let lastPlayer = "O";
let markedTileCounter = 0;
let gameOver = false;

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
    if(board[0] === player && board[1] === player && board[2] === player){
        console.log("condition 0 ran");
        return gameOver = true;
    }
    if(board[3] === player && board[4] === player && board[5] === player){
        console.log("condition 1 ran");
        error.textContent = `${player} won`;
        return gameOver = true;
    }
    if(board[6] === player && board[7] === player && board[8] === player){
        console.log("condition 2 ran");
        error.textContent = `${player} won`;
        return gameOver = true;
    }
    if(board[0] === player && board[3] === player && board[6] === player){
        console.log("condition 3 ran");
        error.textContent = `${player} won`;
        return gameOver = true;
    }
    if(board[1] === player && board[4] === player && board[7] === player){
        console.log("condition 4 ran");
        error.textContent = `${player} won`;
        return gameOver = true;
    }
    if(board[2] === player && board[5] === player && board[8] === player){
        console.log("condition 5 ran");
        error.textContent = `${player} won`;
        return gameOver = true;
    }
    if(board[0] === player && board[4] === player && board[8] === player){
        console.log("condition 6 ran");
        error.textContent = `${player} won`;
        return gameOver = true;
    }
    if(board[2] === player && board[4] === player && board[6] === player){
        console.log("condition 7 ran");
        error.textContent = `${player} won`;
        return gameOver = true;
    }
    if(board.forEach(element => element === "X" || "O")){
        console.log("condition 8 - tie ran");
        error.textContent = `tie game`;
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
            lastPlayer = player;
            checkForWinner(player)
            testing();      
        }
    }, {once : true});
}

function testing (){
    if(lastPlayer === "O"){
        player1();
    }
    else{
        player2();
    }
}
testing();


function player1(){
    renderPlayerMarkerOnClick("X");
}

function player2(){
    renderPlayerMarkerOnClick("O");
}

