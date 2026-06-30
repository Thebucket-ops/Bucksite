let splashtext =["Made by Mary!","Eat lemons -Sun Tzu",
    "random splash texts my beloveds","100% organic no OGM!",
    "li mortacci.","daje.","running out of splash texts ideas very quikcly",
    "Banana.","NEVER GIVE UP","still too little splash texts",
    "go listen to Takanaka, hes a cool ass japanese guy!",
    "theres only 1 pacific rim film",
    "insert splash text here","now with 300% more grammatical errors!","spdow","from Italy with fury"
];

//need 68 sealion texts
//NB sealion texts show up starting from the 2nd one and show the first one at last bcs im bad at coding
let sealioncaretext =[
"this is Fred, hes a sea lion","Fred notices you",
"you clicked Fred, hes happy :3", "you gave the Fred belly rubs, he's enthusiastic about it","Fred really likes you"

];


document.getElementById("splash").textContent=splashtext[Math.floor(Math.random()*splashtext.length)];
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







var url = "https://api.github.com/users/Thebucket-ops/repos?per_page=100";

document.querySelector("select").addEventListener('change',$.get)

$.get(url, function(data) {
  console.log(document.querySelector("select").value);

  var sortType= 'stargazers_count';
  if (document.querySelector("select").value=='stars'){
   sortType='stargazers_count';
  }else if (document.querySelector("select").value=='updated'){
   sortType='updated_at';
  }else if (document.querySelector("select").value=='created'){
    sortType='created_at';
  }

  var sortedRepos = data.sort((a,b) => parseFloat(b.sortType) - parseFloat(a.sortType));
  console.log(sortedRepos);


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
    for (let i =0;i<sortedRepos.length;i++){
      
      var a = document.createElement("a");
      a.setAttribute("class", "repoLink"+i);
      a.setAttribute("href", repoLink[i]);
      a.innerHTML='<div class="projectsel"><div id="projContent"><pre id="repoTitle'+i+'" class="pen"></pre></br><pre id="repoDescription'+i+'" class="projDesc"></pre></div><img class="projImg'+i+'" src="images/buck&buck/buck&buck.png" alt="proj img"></div>';
      document.getElementById("main").appendChild(a);

    }




  for (let i =0;i<sortedRepos.length;i++){
    $(".repoLink"+i).attr('href', repoLink[i]);
    $("#repoTitle"+i).html(repoName[i]);
    $("#repoStars"+i).html(repoStars[i]);
    $("#repoDescription"+i).html(repoDescription[i]);
    }
  })

})