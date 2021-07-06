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

function renderPlayerMarkerOnClick(player){
    el.addEventListener("click", function(e){
        if(e.target.innerHTML !== ""){
            error.textContent = "This tile has already been picked.";
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
        // renderPlayerMarkerOnClick("X");
        // lastPlayer = "X";
    }
    else{
        player2();
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

