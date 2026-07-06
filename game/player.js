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
        this.terminalVelocity=-20;
    }
    update(key_up, key_down, key_left, key_right,
        key_e, key_space
    ){
        // movement
        // this.x+= this.speed;
        

        // this.speed=(this.maxSpeed*key_right)-(this.maxSpeed*key_left);
        
        
        if(this.vspeed>this.terminalVelocity){
        this.vspeed+=this.gravity
        
        
        
        if(this.vspeed>(this.game.height-(this.y+this.height))){
            this.vspeed=(this.game.height-(this.y+this.height));    //avoids the player from clipping in ground
        }

        if (this.y>this.game.height-this.height)this.vspeed=0;
        }
        if (key_space==1){
            this.vspeed=-this.jump;
        }
        // console.log(this.y);
        this.y+= this.vspeed;

        //Boundaries
        if (this.x<0) this.x=0;
        if (this.x>this.game.width-this.width) this.x=this.game.width-this.width;
        // if (this.y<0) this.y=0;
        
        
    }
    draw(context){
        
        context.fillRect(this.x, this.y, this.width, this.height);
        context.drawImage(this.image, 0, 0, this.width, this.height, 
            this.x, this.y, this.width, this.height);
    }
};