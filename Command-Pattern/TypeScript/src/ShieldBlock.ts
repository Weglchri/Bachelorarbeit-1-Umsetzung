import {Command} from "./Command"
import {Knight} from "./Knight"

export class ShieldBlock implements Command {
   
    knight:Knight;
    
    constructor(knight:Knight) {
        this.knight = knight;
    }
    
    execute():void {
        this.knight.shieldblock();
    }
    
}
