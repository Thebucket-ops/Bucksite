import {Player} from "./player.js";

export class points{
    constructor(game){
        this.game=game;
        this.size=20;
        this.points=0;

        this.fps=60;
        this.frameInterval=1000/this.fps;
        this.frameTimer=0;
    }
    update(deltaTime, special){
        

        if(this.frameTimer>this.frameInterval){
            //update number
            if(this.game.player.onRail==true && special){
                    this.points+=100;
                }else if(this.game.player.onRail==true){this.points+=10}
            if(!this.game.player.gameRestart){this.points+=1;}
            console.log(this.points);

            //position update in case digits increase
        }else{
            this.frameTimer+=deltaTime;
        }

    }
    draw(context){
        context.font = "50px Arial";            //PLACEHOLDER TO CHANGE
        context.fillText(this.points, 10, 60);

    }



}