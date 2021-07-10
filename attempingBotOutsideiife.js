"use strict";
const board = document.querySelector("#gameboard");
let arr = [0,1,2,3,4,5,6,7,8];
let botarr = [0,1,2,3,4,5,6,7,8];

for(let el in arr){
    let tile = document.createElement('div');
    tile.classList.add("tile", el);
    board.appendChild(tile);
}

function playerLogic(e){
    let currTarget = e.target.classList[1];
        currTarget = parseInt(currTarget);
        arr[arr.indexOf(currTarget)] = "X";
        delete botarr[botarr.indexOf(currTarget)];
        botarr = botarr.filter(Number.isFinite);
        e.target.innerText = "X";
}

function getRandomInt(max){
    if (max<=1)return;
    const randomNumIndex = Math.floor(Math.random() * max);
    let botSelect = botarr[randomNumIndex];
    botSelect = parseInt(botSelect);
    return botSelect;
}

board.addEventListener("click", function(e){
    let myEvent = e; 
    if(e.target.className.includes("tile")){
        playerLogic(myEvent);
        let botSelect = getRandomInt(botarr.length);

        let boxes = board.querySelectorAll(".tile");
        let boxArr = Array.from(boxes);

        for(let i=0; i<boxArr.length; i++){
            if(boxArr[i].classList[1].includes(botSelect)){
                boxArr[i].innerText = "O";
                delete botarr[botarr.indexOf(botSelect)];
                botarr = botarr.filter(Number.isFinite);
                arr[arr.indexOf(botSelect)] = "O";
            }
        }
    }
})

// function logic(event){
//     console.log(event);
//     board.removeEventListener("click", logic)
// }

// board.addEventListener("click", logic)