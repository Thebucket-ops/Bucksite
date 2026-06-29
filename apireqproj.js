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
      document.getElementById("main").appendChild(a);

      var div = document.createElement("div");
      div.setAttribute("class", "projectsel");
      div.innerHTML= 
                                                                //make so that the content is inside this and then is appended



      document.getElementById("repoLink"+i).appendChild(div);
      
      var content = document.createElement("div");
      content.setAttribute("id", "projContent");
      div.appendChild(content); //

      var title = document.createElement("pre");
      title.setAttribute("id", "repoTitle"+i);
      title.setAttribute("class", "pen");
      title.innerHTML = repoName[i];
      content.appendChild(title);

      content.appendChild(document.createElement("br"));

      var desc= document.createElement("pre");
      desc.setAttribute("id", "repoDescription"+i);
      desc.setAttribute("class", "projDesc");
      desc.innerHTML = repoDescription[i];
      content.appendChild(desc);

      var img = document.createElement("img");
      img.setAttribute("class", "projImg"+i);
      div.appendChild(img);

    }




  for (let i =0;i<sortedRepos.length;i++){
    $(".repoLink"+i).attr('href', repoLink[i]);
    $("#repoTitle"+i).html(repoName[i]);
    $("#repoStars"+i).html(repoStars[i]);
    $("#repoDescription"+i).html(repoDescription[i]);
    }
  })

})