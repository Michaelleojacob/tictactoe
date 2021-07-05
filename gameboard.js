const gameboard = (function(){
    let boxes = [];
    const htmlgameboard = document.querySelector("#gameboard");
    boxCount = 0;
    while(boxCount<9){
        boxCount++;
        boxes.push("box" + boxCount);
    };
    for(box of boxes){
        let tiles = document.createElement("div");
        tiles.classList.add("tiles");
        htmlgameboard.appendChild(tiles);
        tiles.setAttribute('id', box);
    }
    console.log(boxes);
    return {boxes}
})();
// boxes = gameboard;
// boxes = gameboard.boxes
// gameboard.boxes
boxes = gameboard.boxes
console.log(boxes);