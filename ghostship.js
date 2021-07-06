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
            this.restartOnClick();
        },
        cacheDom: function(){
            this.el = document.querySelector("#gameboard");
            this.container = document.querySelector("#gameboard");
            this.error = document.querySelector(".displayError");
            this.restartbtn = document.querySelector(".restart");
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
        handleRenderLogic: function(e, player){
            if(e.target.className.includes("tile")){
                e.target.innerHTML = player;
                game.error.textContent = "";
                game.board[game.board.indexOf(e.target)] = player;
                game.lastPlayer = player;
                game.checkForWinner(player);
                return game.playerTurn();
            }
        },
        renderPlayerMarkerOnClick: function(player){
            this.el.addEventListener("click", function(e){
                const myEvent = e;
                if(game.gameOver === true) return;
                if(e.target.innerHTML !== ""){
                    game.error.textContent = "This tile has already been picked.";
                    return game.playerTurn();
                }
                game.handleRenderLogic(myEvent, player);
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
            game.checkForTie(game.board);
            game.handleWinnerLogic(player, game.board);
        },
        checkForTie: function(arr){
            if(arr.every(x => (x === "X") || (x === "O"))){
                game.error.textContent = "tie game!"
                return game.gameOver = true;
            }
        },
        handleWinnerLogic: function(player, board){
            function displayResults(){
                game.error.textContent = `player ${player} won`;
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
        },
        restartOnClick: function(){
            game.restartbtn.addEventListener("click", function(e){
                const event = e;
                game.handleRestartLogic(event);
            })
        },
        handleRestartLogic: function(e){
            //clear and remake array list
            game.board = [];
            const nineGrids = document.querySelectorAll(".tile");
            game.board = Array.from(nineGrids);
            //remove innerText from each tile.
            nineGrids.forEach(element => element.innerText = "");
            game.lastPlayer = "O";
            //remove error text
            game.error.innerText = "";
            //handle if game is over
            game.gameOver = false;
        },
    }
    game.init();
})();
