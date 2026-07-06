console.log("sup mah fellas");
//imports
import { Player } from "./player.js";
import { inputMaster } from "./input.js";
import { Rails } from "./rails.js";
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

            this.obstacles= [];
            this.obstacleTimer=0;
            this.obstacleInterval=3000;

            this.obstacleCap=5;
        }
        update(deltaTime){
            this.player.update(this.input.key_up, this.input.key_down, 
            this.input.key_left, this.input.key_right, this.input.key_e,
            this.input.key_space);
            
            if(this.obstacleTimer>this.obstacleInterval && this.obstacleCap>this.obstacles.length){ 
                this.addRail();
                this.obstacleTimer=0;
            }else{
                this.obstacleTimer+=deltaTime; //MAKE SO THAT EVERY 5 SECONDS THE CAP INCREASES
            }
            this.obstacles.forEach(rail => {
                rail.update(deltaTime);
                if (rail.x<-10-rail.width){
                    this.removeRail();
                }
            })

        }
        draw(context){
            this.player.draw(context);
            this.obstacles.forEach(rail => {rail.draw(context)});
            //draw player and enemies
        }
        // addRail(){
        addRail(){//Make it so based on how much time has passed, the enemies become stronger
            this.obstacles.push(new Rails(this));
            console.log(this.obstacles);
        }

        removeRail(){
            this.obstacles.shift();
        }
        // }
    }

    const game = new Game(canvas.width, canvas.height);
    let lastTime=0;
    console.log(game);
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