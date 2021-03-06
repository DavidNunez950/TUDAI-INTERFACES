import { Game } from "./game/game.js";

let game = new Game();


let gameContainer = document.querySelector(".game-container");
let playerBtn = document.querySelectorAll(".game-character-container > .btn-game-circle");
let screenContainer = document.querySelector("#screen-container");
let screenStart = document.querySelector("#screen-start");
let screenMenu = document.querySelector("#screen-menu");
let goBtn = document.querySelector("#btn-go");
let restartBtn = document.querySelector("#btn-restart");
let startBtn = document.querySelector("#btn-start");
startBtn.addEventListener("click", () => {
    screenMenu.classList.toggle("d-none");
    screenStart.classList.toggle("d-none")
});
let playerSelected  = false;
let playerName  = false;
playerBtn.forEach( btn => btn.addEventListener("click", () => {
    playerBtn.forEach( btn =>  btn.classList.remove("active") );
    btn.classList.add("active");
    goBtn.classList.remove("disabled");
    playerSelected = true;
    playerName = btn.querySelector("div").getAttribute("data-character")
}));
goBtn.addEventListener("click", () => {
    if(playerSelected) {
        screenContainer.classList.toggle("hide-up")
        setTimeout(() => {
            screenMenu.classList.toggle("d-none")
            screenContainer.classList.toggle("d-none")
        }, 200);
        game.gameStart(playerName)
    }
});


// let screenContainer = document.querySelector("#screen-container");
// let restartBtn = document.querySelector("#btn-restart");
gameContainer.addEventListener("game-end", ()=> {
    restartBtn.classList.toggle("d-none");
    restartBtn.parentElement.classList.toggle("d-none");
    screenContainer.classList.toggle("d-none")
    screenContainer.classList.toggle("hide-up")
});
restartBtn.addEventListener("click", () => {   
    restartBtn.classList.toggle("d-none");
    restartBtn.parentElement.classList.toggle("d-none");
    screenStart.classList.toggle("d-none")
    game.restartGame();
});

