const gameboard = (function(){
    let board = function(){
        const htmlgameboard = document.querySelector("#gameboard");
        let boxes = [];
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
    }
    board();
})();

