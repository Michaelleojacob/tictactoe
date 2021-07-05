const el = document.querySelector("#gameboard");
const error = document.querySelector(".displayError");
const board = [];
let lastPlayer = "O"

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

// function renderPlayerMarkerOnClick(player){
//     el.addEventListener("click", function(e){
//         if(e.target.innerHTML !== ""){
//             error.textContent = "This tile has already been picked.";
//             return;
//         }
//         if(e.target.className.includes("tile")){
//             e.target.innerHTML = player;
//             error.textContent = "";
//         }
//     })
// }

function renderPlayerMarkerOnClick(player){
    el.addEventListener("click", function(e){
        console.log(e);
        if(e.target.innerHTML !== ""){
            error.textContent = "This tile has already been picked.";
            return;
        }
        if(e.target.className.includes("tile")){
            e.target.innerHTML = player;
            error.textContent = "";
        }
    }, {once : true});
}
renderPlayerMarkerOnClick("X");

// function player1(){
//     renderPlayerMarkerOnClick("X");
//     lastPlayer = "X";
// }

// function player2(){
//     renderPlayerMarkerOnClick("O");
//     lastPlayer = "O";
// }

// function decideTurn(turn){
//     if(turn === "O"){
//         return player1();
//     }
//     else return player2();
// }