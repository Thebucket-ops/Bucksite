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

//callback: when a function
//function(name of other function to make after){
//code + callback(); <-to start function after
//}

//setTimeout(funct(){} delay in milliseconds 3000 for 3 secs) 

//how to api 101:
//fetch{url,{options}}<- like a dog but goes on to find sites
//       .then to tell it what to do
//       .catch(error => console.error(error))-> in case the 
//        dog falls off a cliff and dies so at least the mountain doesnt crumble
// JSON.parse(filename)[eventual array pos].variable



let splashtext =['<a href="https://youtu.be/tYzMYcUty6s?si=yoMmFTHR7PbMrvK4">NEVER GIVE UP</a>',"Made by Mary!",
    "Eat lemons -Sun Tzu",
    "random splash texts my beloveds","100% organic no OGM!",
    "li mortacci.","daje.","running out of splash texts ideas very quikcly",
    "Banana.","still too little splash texts",
    "go listen to Takanaka, hes a cool ass japanese guy!",
    "theres only 1 pacific rim film",
    "insert splash text here","now with 300% more grammatical errors!","spdow","from Italy with fury"
];

//need 68 sealion texts

let sealioncaretext =[
"this is Fred, hes a sea lion","Fred notices you",
"you clicked Fred, hes happy :3", "you gave the Fred belly rubs, he's enthusiastic about it","Fred really likes you"

];


document.getElementById("splash").innerHTML=splashtext[Math.floor(Math.random()*splashtext.length)];
//ricordate de differenziare in base alla pagina in cui si è (progetti o main)

let sealionclicks=0;
document.getElementById("tooltiptext").textContent=sealioncaretext[(sealionclicks%sealioncaretext.length)];


document.getElementById("seal").onclick = function(){
  sealionclicks+=1;
    
    document.getElementById('sealionid').play();
  //TODO CHANGE TO TEXT SHOWING UP ON TOP
  
    if(sealionclicks==68){
    document.getElementById("tooltiptext").textContent="spdow";
    }else{
    document.getElementById("tooltiptext").textContent=sealioncaretext[(sealionclicks%sealioncaretext.length)];
    console.log(sealionclicks);
    }

  //YAY IT WORKSS
}


//TODO make so that when clicked shows a gif of the sea lion dancing cuz hes cute




//REMEMBER remove this when new project is ready ;)

//changes content that has a specific id (can do dat with classes too) or use ${}
//.onclick starts function as 
//user interface how to set it up idk




// //var repoName=[sortedRepos.length];
//   var repoDescription=[sortedRepos.length];
//   var repoLink=[sortedRepos.length];
//   var repoStars=[sortedRepos.length];
//   for(let i =0; i < sortedRepos.length;i++){
//   repoName[i] = sortedRepos[i].name;
//   repoDescription[i] = sortedRepos[i].description;
//   repoLink[i] = sortedRepos[i].html_url;
//   repoStars[i] = sortedRepos[i].stargazers_count;
//   }

//// API ////
var url = "https://api.github.com/users/Thebucket-ops/repos?per_page=100";

$.get(url, function(data) {
  var sortedRepos = data.sort((a,b) => parseFloat(b.stargazers_count) - parseFloat(a.stargazers_count));
  


  let repoName= [];
  let repoDescription= [];
  let repoLink= [];
  let repoStars = [];

  for(let i= 0; i<sortedRepos.length;i++){
      repoName[i]= sortedRepos[i].name;
      repoDescription[i]= sortedRepos[i].description;
      repoLink[i]= sortedRepos[i].html_url;
      repoStars[i] = sortedRepos[i].stargazers_count;
      console.log(repoName);
    }


    
  $(document).ready(function() {
    
    for (let i =0;i<4;i++){
    $(".repoLink"+i).attr('href', repoLink[i]);
    $("#repoTitle"+i).html(repoName[i]);
    $("#repoStars"+i).html(repoStars[i]);
    $("#repoDescription"+i).html(repoDescription[i]);
    }
  })

})