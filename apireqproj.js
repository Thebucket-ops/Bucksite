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