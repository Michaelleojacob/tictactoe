(function(){
    "use strict";
    const game = {
        board: [0,1,2,3,4,5,6,7,8],
        botarr: [0,1,2,3,4,5,6,7,8],
        lastPlayer: "O",
        playerOrBot: "player",
        gameOver: false,
        p1: "X",
        p2: "O",
        init: function(){
            this.cacheDom();
            this.displayGrid();
            this.tileClickEvent();
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
            let playerOrBot = game.selectValue.value;
            game.selectValue.addEventListener("change", function(e){
                playerOrBot = e.target.value;
                game.handleRestartLogic();
                return playerOrBot;
            });
            return playerOrBot;
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
        resetBtn: function(e){
            game.restartbtn.addEventListener("click", game.handleRestartLogic());
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
        tileClickEvent: function(){
            game.container.addEventListener("click", function(e){
                if(game.gameOver === true)return;
                const playerOrBot = game.selectValue.value;
                const event = e;
                if(e.target.className.includes("tile")){
                    if(e.target.innerText !== ""){
                        game.error.innerText = "that tile is already taken"
                        return;
                    };
                    if(playerOrBot === "player"){
                        game.playerVsPlayer(event);
                    }
                    else if(playerOrBot === "randoRandy"){
                        game.playerVsRandoRandy(event);
                    }
                    game.error.innerText = "";
                }
            }, {once: true})
        },
        playerLogic: function(e, player){
        },
        playerVsPlayer: function(e){
        },
        playerVsRandoRandy: function(e){
            if(game.lastPlayer === "O"){
                function getIndex(target, marker){
                    return game.board[game.board.indexOf(target)] = marker;
                }
                e.target.innerText = "X";
                getIndex(e.target, "X");
                game.turnDisplay.innerText = "Turn: player O"
                game.lastPlayer = "X";
            }
        }
    }
    game.init();
})();
