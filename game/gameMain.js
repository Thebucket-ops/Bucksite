console.log("sup mah fellas");
//imports
import { Player } from "./player.js";
import { inputMaster } from "./input.js";
//
window.addEventListener('load',function(){
    const canvas= document.getElementById('ominousbucket')
    const ctx = canvas.getContext('2d');

    canvas.width= 1366;     //TODO to change
    canvas.height=300;

    class Game{
        constructor(width,height){
            this.width=width;
            this.height=height;

            this.player=new Player(this);
                        
            this.input= new inputMaster();
            //add fuunctions that call player, input, and enemies
        }
        update(deltaTime){
            this.player.update(this.input.key_up, this.input.key_down, 
            this.input.key_left, this.input.key_right, this.input.key_e,
            this.input.key_space);
            
        }
        draw(context){
            this.player.draw(context);
            //draw player and enemies
        }
        // addRail(){


        // }
    }

    const game = new Game(canvas.width, canvas.height);
    let lastTime=0;
    function animate(timeStamp){
        const deltaTime= timeStamp-lastTime;
        
        lastTime=timeStamp;
        ctx.clearRect(0,0,canvas.width,canvas.height);
        game.update(deltaTime);
        game.draw(ctx);
        requestAnimationFrame(animate);
    }
    animate(0);


})