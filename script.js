//console.log('Hello there')

//window.alert('this are like those thinghies that tell you if you quit the site will lose progress ')
//window.prompt() does the same but asks for an input
//let x; declaration
//x=100; assignment or let x =132; (can put it in console.log easy peasy (or with ${variable name}))
//html:label lets me input stuff
//      button used to submit
//strings with "" 
//booleans are just normal 
// to convert variables make this
// varname= Number/String/etc.(varname);

//math:
//.PI .E = respective numbers
//.round -> to nearest .floor -> to lower .ceil ->to higher
//.pow potenza .sqrt radice quad
//.sin .cos .tan in radianti
//.abs val assoluto
//.max .min trova min max tra set di elementi
//.random numero random tra 0 e 1 abbastanza lungo nei decimale
//Math.floor(Math.random()*num) numero tra num-1 e 0
// man this sucks ass wdym only half an hour 

//callback: when a function
//function(name of other function to make after){
//code + callback(); <-to start function after
//}

//setTimeout(funct(){} delay in milliseconds 3000 for 3 secs) 

//how to api:
//fetch{url,{options}}<- like a dog but goes on to find sites
//       .then to tell it what to do
//       .catch(error => console.error(error))-> in case the 
//        dog falls off a cliff and dies so at least the mountain doesnt crumble


//TODO link NEVER GIVE UP chinese guy whe splash text pops up
let splashtext =["Made by Mary!","Eat lemons -Sun Tzu",
    "random splash texts my beloveds","larptime.","100% organic no OGM!",
    "li mortacci.","daje.","running out of splash texts ideas very quikcly",
    "Banana.","NEVER GIVE UP","still too little splash texts",
    "go listen to Takanaka, hes a cool ass japanese guy!",
    "theres only 1 pacific rim film",
    "insert splash text here",
]

document.getElementById("splash").textContent=splashtext[Math.floor(Math.random()*splashtext.length)];
//ricordate de differenziare in base alla pagina in cui si è (progetti o main)

document.getElementById("seal").onclick = function(){

window.alert('you clicked a sea lion, he happy :3')

}
  let audioPlayer = document.getElementById('sealionid');
  function play(){
    audioPlayer.load(); 
    audioPlayer.play();
  }

//TODO make so that when clicked shows a gif of the sea lion dancing cuz hes cute

document.getElementById("ominousbucket").onclick = function(){
window.alert('sorry, this is still a work in progress -Buck')
}


//REMEMBER remove this when new project is ready ;)

//changes content that has a specific id (can do dat with classes too) or use ${}
//.onclick starts function as 
//user interface how to set it up idk
