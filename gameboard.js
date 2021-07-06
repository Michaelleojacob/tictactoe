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

function renderPlayerMarkerOnClick(player){
    el.addEventListener("click", function(e){
        if(e.target.innerHTML !== ""){
            error.textContent = "This tile has already been picked.";
            testing();
            return;
        }
        if(e.target.className.includes("tile")){
            e.target.innerHTML = player;
            error.textContent = "";
            testing();
        }
    }, {once : true});
}

function testing (){
    if(lastPlayer === "O"){
        player1();
        console.log(board);
        // renderPlayerMarkerOnClick("X");
        // lastPlayer = "X";
    }
    else{
        player2();
        console.log(board)
        // renderPlayerMarkerOnClick("O");
        // lastPlayer = "O";
    }
}
testing();


function player1(){
    renderPlayerMarkerOnClick("X");
    lastPlayer = "X";
    markedTileCounter++;
}

function player2(){
    renderPlayerMarkerOnClick("O");
    lastPlayer = "O";
    markedTileCounter++;
}

function checkForWinner(player){
    // if there is a winner
    // change gameOver to true

    //logic to check if there is a winner

}