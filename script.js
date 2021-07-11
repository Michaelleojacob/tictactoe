(function(){
    "use strict";
    const game = {
        board: [0,1,2,3,4,5,6,7,8],
        botarr: [0,1,2,3,4,5,6,7,8],
        lastPlayer: "O",
        opponent: "player",
        gameOver: false,
        playerScore: 0,
        opponentScore: 0,
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
            this.pScore = this.wrapper.querySelector(".pScore");
            this.oppScore = this.wrapper.querySelector(".oppScore");
        },
        getDropDownValue:function(){
            let opponent = game.selectValue.value;
            game.selectValue.addEventListener("change", function(e){
                game.container.removeEventListener("click", game.pTurnFunctionality);
                game.container.removeEventListener("click", game.randoLogic);
                game.playerScore = 0;
                game.opponentScore = 0;
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
                game.turnDisplay.innerText = `turn: game over`;
                player === "X" ? game.playerScore++ : game.opponentScore++ ;
                game.pScore.innerText = `X: ${game.playerScore}`;
                game.oppScore.innerText = `O: ${game.opponentScore}`;
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
            game.turnDisplay.innerText = "turn: player X";
            game.gameOver = false;
            game.lastPlayer = "O";
            game.botarr = [0,1,2,3,4,5,6,7,8];
            game.board = [0,1,2,3,4,5,6,7,8];
            game.pScore.innerText = "";
            game.oppScore.innerText = "";
        },
        gameinit: function(opponent){
            if(game.gameOver === true)return;
            if(opponent === "player"){
                game.playerVsPlayer();
            }
            if(opponent === "randoRandy"){
                game.playerVsRandoRandy();
            }
        },
        legalMoveCheck: function(event){
            if(game.gameOver === true)return false;
            if(!event.target.className.includes("tile"))return false;
            if(event.target.innerText !==""){
                game.error.innerText = `that tile has already been selected`
                return false; 
            }
            else return true;
        },
        playerVsPlayer: function(){
            game.container.addEventListener("click", game.pTurnFunctionality);
        },
        pTurnFunctionality: function(event){
            let isLegalMove =  game.legalMoveCheck(event);
            if(isLegalMove === false) return;
            let player = game.checkTurn(game.lastPlayer);
            game.lastPlayer = player;
            game.playerLogic(event, player);
            game.checkForGameState(player, game.board);
        },
        checkTurn: function(turn){
            let player = "";
            turn === "O" ?  player = "X" :  player = "O";
            return player;
        },
        playerLogic: function(e, p){
            let playerTarget = e.target.classList[1];
            playerTarget = parseInt(playerTarget);
            game.board[playerTarget] = p;
            e.target.innerText = p;
            delete game.botarr[game.botarr.indexOf(playerTarget)];
            game.botarr = game.botarr.filter(Number.isFinite);
            game.lastPlayer = p
            p === "X" ? game.turnDisplay.innerText = `turn: player O` : game.turnDisplay.innerText = `turn: player X`;
        },
        getRandomInt: function(max){
            if(max<=1)return;
            const randomNumIndex = Math.floor(Math.random() * max);
            let botSelect = game.botarr[randomNumIndex];
            botSelect = parseInt(botSelect);
            return botSelect;
        },
        randoLogic: function(event){
            let isLegalMove =  game.legalMoveCheck(event);
            if(isLegalMove === false) return;
            game.legalMoveCheck(event);
            game.playerLogic(event, "X");
            game.checkForGameState("X", game.board);
            if(game.gameOver === true)return;
            let botSelect = game.getRandomInt(game.botarr.length);
            let boxes = game.container.querySelectorAll(".tile");
            let boxArr = Array.from(boxes);
            for(let i=0; i<boxArr.length; i++){
                setTimeout(() => {
                    if(boxArr[i].classList[1].includes(botSelect)){
                        boxArr[i].innerText = "O";
                        delete game.botarr[game.botarr.indexOf(botSelect)];
                        game.botarr = game.botarr.filter(Number.isFinite);
                        game.board[game.board.indexOf(botSelect)] = "O";
                        game.checkForGameState("O", game.board);
                        game.turnDisplay.innerText = `turn: player X`;
                    }    
                }, 150);
                
            }
        },
        playerVsRandoRandy: function(){
            game.container.addEventListener("click", game.randoLogic);
        },
    }
    game.init();
})();