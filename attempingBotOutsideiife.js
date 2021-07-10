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
        console.log(e.target.classList[1])
        currTarget = parseInt(currTarget);
        arr[arr.indexOf(currTarget)] = "X";
        delete botarr[botarr.indexOf(currTarget)];
        // botarr = botarr.filter(item => item);
        botarr = botarr.filter(Number.isFinite);
        e.target.innerText = "X";

        // console.log(arr);
        // console.log(botarr);

        function getRandomInt(max){
            return Math.floor(Math.random() * max);
        }
        let randomNumFromBotarr = getRandomInt(botarr.length);
        console.log(randomNumFromBotarr);
        let boxes = document.querySelectorAll(".tile");
        let boxArr = Array.from(boxes);
        // console.log(boxArr[0].classList[1]);
        for(let i=0; i<boxArr.length; i++){
            // console.log(boxArr[i].classList[1])
            if(boxArr[i].classList[1].includes(randomNumFromBotarr)){
                boxArr[i].innerText = "O";
                delete botarr[botarr.indexOf(randomNumFromBotarr)];
                botarr = botarr.filter(Number.isFinite);
                arr[arr.indexOf(randomNumFromBotarr)] = "O";
            }
        }
    }
})