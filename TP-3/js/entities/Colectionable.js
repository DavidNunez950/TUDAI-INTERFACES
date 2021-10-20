import { Entity } from "./Entity.js";

export { Colectionable };

class Colectionable extends Entity{
    //#region constructor
    /**
     * initialize a new instance of a Colectionable
     * @param {number} x 
     * @param {number} y 
     * @param {number} h 
     * @param {number} w 
     * @param {HTMLElement} html 
     */
    constructor(x, y, h, w, html) {
        super(x, y, h, w, html);
    }
    //#endregion

    //#region methods
    /**
     * 
     * @param {Function} remove 
     * @param {Player} player 
     */
    collide(remove, player) {
        player.score += 1;
        this.html.classList.add("coin-dissapear");
        setTimeout(()=> {remove(this.html)}, 1000)
        let up = ()=>setTimeout(()=>{this.y+=10;up()}, 10)
        up();
    }
    //#endregion
}