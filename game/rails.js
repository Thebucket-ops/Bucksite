import {Player} from "./player.js";
export class Rails{

    constructor(game){
        this.game=game;
        this.image =document.getElementById('player'); //Note to change placeholder

        this.speed= 9;
        this.fps=60;
        this.frameInterval=1000/this.fps;
        this.frameTimer=0;
        //change below for each individual rail
        this.width=310;
        this.height=100;

        this.x= this.game.width;
        this.y= this.game.height-this.height;
        this.gracespace=25;
    }
    update(deltaTime){
        if(this.frameTimer>this.frameInterval && !this.game.player.gameRestart){
            this.frameTimer=0;

            this.x-=this.speed;
        
        }else{
            this.frameTimer+=deltaTime;
        }
        //                             //The gracespace may cause problems check on it
         if((this.game.player.x+this.game.player.width-this.gracespace>this.x && this.game.player.x<=(this.x+this.width)) && ((this.game.player.y+this.game.player.height)>this.y+1) && !this.game.player.gameRestart){
             this.game.player.defeat();
             console.log(this.game.player.gameRestart)
        }else if((this.game.player.x+this.game.player.width-this.gracespace>this.x && this.game.player.x<=(this.x+this.width)) && !this.game.player.gameRestart){

            if(this.game.player.vspeed>(this.game.height-(this.game.player.y+this.game.player.height+this.height))){
            this.game.player.vspeed=(this.game.height-(this.game.player.y+this.game.player.height+this.height));    //avoids the player from clipping in ground
        } //fix when inside because it launches player in the stratosphere
        
    }
    }
    draw(context){
        context.fillRect(this.x, this.y, this.width, this.height);
        context.drawImage(this.image, 0, 0, this.width, this.height, 
            this.x, this.y, this.width, this.height); 
    }
}