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
                numOfGrids++;
                return nineGrids;
            }
            console.log(nineGrids);
        }
    }
    game.init();
})();