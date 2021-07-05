(function(){
    "use strict";
    const game = {
        board: [],
        lastPlayer: "O",
        init: function(){
            this.cacheDom();
            this.displayGrid();
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
                console.log(player)
                console.log(game.lastPlayer);
                if(game.lastPlayer === player)return;
                if(e.target.innerHTML !== ""){
                    game.error.textContent = "This tile has already been picked.";
                    return;
                }
                if(e.target.className.includes("tile")){
                    e.target.innerHTML = player;
                    game.error.textContent = "";
                    console.log(game.lastPlayer);
                }
                return game.lastPlayer = player;
            })
        },
        player1: function(){
            this.renderPlayerMarkerOnClick("X");
        },
        player2: function(){
            this.renderPlayerMarkerOnClick("O");
        },
        playerTurn: function(){
            console.log(game.lastPlayer);
            if(game.lastPlayer === "O"){
                this.player1();
            }
            else{
                this.player2();
            }
        },
    }
    game.init();
})();