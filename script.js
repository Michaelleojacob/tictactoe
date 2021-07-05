(function(){
    "use strict";
    const game = {
        board: [],
        init: function(){
            this.cacheDom();
            this.displayGrid();
        },
        cacheDom: function(){
            this.el = document.querySelector("#gameboard");
        },
        displayGrid: function(){
            let numOfGrids = 0;
            while(numOfGrids < 9){
                const nineGrids = document.createElement("div");
                nineGrids.classList.add("tile", numOfGrids);
                this.el.appendChild(nineGrids);
                this.board.push(nineGrids)
                numOfGrids++;
            };
        },
        player1: function(){
            this.el.addEventListener("click", function(e){
                console.log(e);
            })
        },
    }
    game.init();
})();