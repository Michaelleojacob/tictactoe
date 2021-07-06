(function(){
    "use strict";
    const game = {
        board: [],
        lastPlayer: "O",
        gameOver: false,
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
                if(game.gameOver === true) return;
                if(e.target.innerHTML !== ""){
                    game.error.textContent = "This tile has already been picked.";
                    return game.playerTurn();
                }
                if(e.target.className.includes("tile")){
                    e.target.innerHTML = player;
                    game.error.textContent = "";
                    game.board[game.board.indexOf(e.target)] = player;
                    game.lastPlayer = player;
                    game.checkForWinner(player);
                    return game.playerTurn();
                }
            }, { once : true })
        },
        player1: function(){
            game.renderPlayerMarkerOnClick("X");
        },
        player2: function(){
            game.renderPlayerMarkerOnClick("O");
        },
        playerTurn: function(){
            if(game.lastPlayer === "O"){
                game.player1();
            }
            else{
                game.player2();
            }
        },
        checkForWinner: function(player){
            const board = this.board;
            function displayResults(){
                game.error.textContent = `${player} won`;
                return game.gameOver =true;
            }
            if(board[0] === player && board[1] === player && board[2] === player){
                return displayResults();
            }
            if(board[3] === player && board[4] === player && board[5] === player){
                return displayResults();
            }
            if(board[6] === player && board[7] === player && board[8] === player){
                return displayResults();
            }
            if(board[0] === player && board[3] === player && board[6] === player){
                return displayResults();
            }
            if(board[1] === player && board[4] === player && board[7] === player){
                return displayResults();
            }
            if(board[2] === player && board[5] === player && board[8] === player){
                return displayResults();
            }
            if(board[0] === player && board[4] === player && board[8] === player){
                return displayResults();
            }
            if(board[2] === player && board[4] === player && board[6] === player){
                return displayResults();
            }
            if(board.forEach(element => element === "X" || "O")){
                error.textContent = `tie game`;
                return gameOver = true;
            }
        }
    }
    game.init();
})();