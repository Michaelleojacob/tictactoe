const board = document.querySelector("#gameboard");
let arr = [0,1,2,3,4,5,6,7,8];
let botarr = [0,1,2,3,4,5,6,7,8];

for(el in arr){
    let tile = document.createElement('div');
    tile.classList.add("tile", el);
    board.appendChild(tile);
}

board.addEventListener("click", function(e){
    if(e.target.className.includes("tile")){
        if(e.target.innerText !== "") return;
        let currTarget = e.target.classList[1];
        currTarget = parseInt(currTarget);
        arr[arr.indexOf(currTarget)] = "X";
        delete botarr[botarr.indexOf(currTarget)];
        // botarr = botarr.filter(item => item);
        botarr = botarr.filter(Number.isFinite);
        e.target.innerText = "X";

        console.log(arr);
        console.log(botarr);

        function getRandomInt(max){
            return Math.floor(Math.random() * max);
        }
        let randomNumFromBotarr = getRandomInt(botarr.length);
        console.log(randomNumFromBotarr);

    }
})