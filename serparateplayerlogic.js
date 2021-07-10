(function(){
    "use strict";
    const game = {
        board: [0,1,2,3,4,5,6,7,8],
        botarr: [0,1,2,3,4,5,6,7,8],
        lastPlayer: "O",
        opponent: "player",
        gameOver: false,
        init: function(){
            this.cacheDom();
            this.displayGrid();
            this.resetBtn();
            this.getDropDownValue();
        },
        cacheDom: function(){
            this.wrapper = document.querySelector(".wrapper");
            this.el = this.wrapper.querySelector("#gameboard");
            this.container = this.wrapper.querySelector("#gameboard");
            this.error = this.wrapper.querySelector(".displayError");
            this.restartbtn = this.wrapper.querySelector(".restart");
            this.turnDisplay = this.wrapper.querySelector(".turn");
            this.selectValue = this.wrapper.querySelector(".playerOrBot");
        },
        getDropDownValue:function(){
            let opponent = game.selectValue.value;
            game.selectValue.addEventListener("change", function(e){
                opponent = e.target.value;
                game.handleRestartLogic();
                return game.gameinit(opponent);
            });
            return game.gameinit(opponent);
        },
        displayGrid: function(){
            for(let item of game.board){
                let tile = document.createElement('div');
                tile.classList.add("tile", item);
                game.container.appendChild(tile);
            }
        },
        checkForTie: function(arr){
            if(arr.every(x => (x === "X") || (x === "O"))){
                game.error.innerText = "tie game!"
                return game.gameOver = true;
            }
        },
        checkForGameState: function(player){
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
        resetBtn: function(e){
            game.restartbtn.addEventListener("click", game.handleRestartLogic);
        },
        handleRestartLogic: function(){
            let boxes = game.container.querySelectorAll(".tile");
            let boxArr = Array.from(boxes);
            for(let box of boxArr) box.innerText = "";
            game.error.innerText = "";
            game.turnDisplay.innerText = "Turn: player X";
            game.gameOver = false;
            game.lastPlayer = "O";
            game.botarr = [0,1,2,3,4,5,6,7,8];
            game.board = [0,1,2,3,4,5,6,7,8];
        },
        gameinit: function(opponent){
            //if gameover = true => end game; also inits game and who opponent is.
            if(game.gameOver === true)return;
            if(opponent === "player"){
                game.playerVsPlayer();
            }
            if(opponent === "randoRandy"){
                console.log("rando")
            }
        },
        playerLogic: function(e, p){
            let playerTarget = e.target.classList[1];
            playerTarget = parseInt(playerTarget);
            game.board[playerTarget] = p;
            e.target.innerText = p;
            game.lastPlayer = p;
            delete game.botarr[game.botarr.indexOf(playerTarget)];
            game.botarr = game.botarr.filter(Number.isFinite);
            return game.lastPlayer = p
        },
        checkTurn: function(turn){
            let player = "";
            if(turn === "O") return player = "X";
            else return player = "O";
        },
        playerTurn: function(){
            game.container.addEventListener("click", function(e){
                if(game.gameOver === true)return;
                if(e.target.className.includes("tile")){
                    let myEvent = e;
                    let player = game.checkTurn(game.lastPlayer);
                    game.playerLogic(myEvent, player);
                    game.checkForGameState(player, game.board);
                }
            })
        },
        playerVsPlayer: function(){
            game.playerTurn();

        },
        playerVsRandoRandy: function(){
        },
    }
    game.init();
})();
