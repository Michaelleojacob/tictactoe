(function(){
    "use strict";
    const game = {
        board: [],
        lastPlayer: "O",
        gameOver: false,
        init: function(){
            this.cacheDom();
            this.displayGrid();
            this.singleEventListener();
        },
        cacheDom: function(){
            this.wrapper = document.querySelector(".wrapper");
            this.el = this.wrapper.querySelector("#gameboard");
            this.container = this.wrapper.querySelector("#gameboard");
            this.error = this.wrapper.querySelector(".displayError");
            this.restartbtn = this.wrapper.querySelector(".restart");
            this.turnDisplay = this.wrapper.querySelector(".turn");
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
        checkForTie: function(arr){
            console.log(arr);
            if(arr.every(x => (x === "X") || (x === "O"))){
                game.error.innerText = "tie game!"
                return game.gameOver = true;
            }
        },
        checkForWinner: function(player){
            game.checkForTie(game.board);
            game.handleWinnerLogic(player, game.board);

        },
        handleWinnerLogic: function(player, board){
            function displayResults(){
                game.error.innerText = `player ${player} won`;
                game.turnDisplay.innerText = `Turn: game over`;
                return game.gameOver = true;
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
        handleRestartLogic: function(){
            game.board = [];
            const playtiles = document.querySelectorAll(".tile");
            game.board = Array.from(playtiles);
            playtiles.forEach(element => element.innerText = "");
            game.error.innerText = "";
            game.turnDisplay.innerText = "Turn: player X";
            game.gameOver = false;
            game.lastPlayer = "O";
        },
        singleEventListener: function(){
            game.wrapper.addEventListener("click", function(e){
                const event = e;
                if(e.target.className.includes("restart")){
                    game.handleRestartLogic();
                }
                if(game.gameOver === true)return;
                if(e.target.className.includes("tile")){
                    if(e.target.innerText !== ""){
                        game.error.innerText = "that tile is already taken"
                        return;
                    };
                    game.renderPlayerMarkerOnClick(event);
                    game.error.innerText = "";
                    game.checkForWinner("X");
                    game.checkForWinner("O");
                }
            })
        },
        renderPlayerMarkerOnClick: function(e){
            if(game.lastPlayer === "O"){
                e.target.innerText = "X";
                game.board[game.board.indexOf(e.target)] = "X";
                game.turnDisplay.innerText = "Turn: player O"
                return game.lastPlayer = "X";
            }
            if(game.lastPlayer === "X"){
                e.target.innerText = "O";
                game.board[game.board.indexOf(e.target)] = "O";
                game.turnDisplay.innerText = "Turn: player X"
                return game.lastPlayer = "O";
            }
        },
    }
    game.init();
})();
