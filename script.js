(function(){
    "use strict";
    const game = {
        board: [],
        init: function(){
            this.cacheDom();
            this.displayGrid();
            this.playerTurn();
        },
        cacheDom: function(){
            this.el = document.querySelector("#gameboard");
            this.error = document.querySelector(".displayError");
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
        renderPlayerMarkerOnClick: function(player){
            this.el.addEventListener("click", function(e){
                if(e.target.innerHTML !== "")return;
                if(e.target.className.includes("tile")){
                    e.target.innerHTML = player;
                }
            })
        },
        player1: function(){
            this.renderPlayerMarkerOnClick("X");
        },
        player2: function(){
            this.renderPlayerMarkerOnClick("O");
        },
        playerTurn: function(){
            let lastPlayer= 1;
            if(lastPlayer === 1){
                this.player1();
                lastPlayer = 0;
            }
            else{
                this.player2();
                lastPlayer = 1;
            }
        },
    }
    game.init();
})();