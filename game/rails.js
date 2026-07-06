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
    }
    update(deltaTime){
        if(this.frameTimer>this.frameInterval){
            this.frameTimer=0;

            this.x-=this.speed;
        
        }else{
            this.frameTimer+=deltaTime;
        }
        
    }
    draw(context){
        context.fillRect(this.x, this.y, this.width, this.height);
        context.drawImage(this.image, 0, 0, this.width, this.height, 
            this.x, this.y, this.width, this.height); 
    }
}