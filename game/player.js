

export class Player {
    constructor(game){
        this.game=game;
        this.width=60;
        this.height=120;
        this.x=this.game.width/6-this.width;
        this.y=this.game.height/2-this.height;
        this.image =document.getElementById('player');
        this.speed=0;
        this.vspeed=0;
        this.maxSpeed=5;
        this.gravity=1;
        this.jump=15;
        this.smalljump=10;
        this.hasjumped=false;
        this.terminalVelocity=20;
        this.gameRestart=false;
        this.onGround=false;
        this.onRail=false;
    } 
    update(key_up, key_down, key_left, key_r,
        key_e, key_space, check                     //add key r to restart game
    ){
        // movement

        if((this.vspeed<this.terminalVelocity) && ((!this.onGround && !this.onRail))){
            this.vspeed+=this.gravity;
            // console.log("g")
        }

        if( this.vspeed>(this.game.height-(this.y+this.height)) && !check){
            this.vspeed=(this.game.height-(this.y+this.height));    //avoids the player from clipping in ground
        }


        if (this.y>=this.game.height-this.height){
            this.onGround=true;
            this.y=this.game.height-this.height;
            this.hasjumped=false;
        }else{this.onGround=false;}

       



        // console.log(this.y);
        if(this.onGround||this.onRail){
            this.vspeed=0;
            // console.log("groundrail");
        }

        if (key_space==1 && !this.gameRestart && !this.hasjumped){
            this.vspeed=-this.jump;
            this.hasjumped=true;
        }

        if (key_e==1 && !this.gameRestart && !this.hasjumped){
            this.vspeed=-this.smalljump;
            this.hasjumped=true;
        }

        this.y+= this.vspeed;

        //Boundaries
        if (this.x<0) this.x=0;
        if (this.x>this.game.width-this.width) this.x=this.game.width-this.width;
        // if (this.y<0) this.y=0;
        
        
    }
    draw(context){
        context.fillStyle= "blue";
        context.shadowColor = "black";
        context.shadowBlur = 0;
        context.fillRect(this.x, this.y, this.width, this.height);
        
        context.drawImage(this.image, 0, 0, this.width, this.height, 
            this.x, this.y, this.width, this.height);
    }

    defeat(){
        
        this.gameRestart=true;
    }
};