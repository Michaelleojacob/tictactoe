const gameboard = (function(){
    let board = function(){
        const htmlgameboard = document.querySelector("#gameboard");
        let boxes = new Array();
        boxCount = 0;
        while(boxCount<9){
            boxes.push("box" + boxCount);
            boxCount++;
        };
        console.log(boxes);
        for(box of boxes){
            let tiles = document.createElement("div");
            tiles.classList.add("tiles");
            htmlgameboard.appendChild(tiles);
            tiles.textContent = box;
        }
        // const box = document.createElement("div");
        // box.classList.add("box");
        // document.body.appendChild(box);
    }
    board();
})()