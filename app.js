// first take search 

window.onload = function () {

    document.getElementById("searchform").onsubmit = function(e) {
       let searchTextall = document.getElementById("searchText").value;
        getmovies(searchTextall);
        e.preventDefault();
       
    }
}


function hidden() {
    var x = document.querySelector("hidden");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }

function getmovies(searchTextall){
   
    let apiKey ="dcbc738b";
    let urlData = "http://www.omdbapi.com/?apikey=" + apiKey + "&t=" + searchTextall; 
    console.log(urlData);
    // let OurRequest = new XMLHttpRequest();
    // OurRequest.open('GET', urlData)
    // OurRequest.onload = function() {
    // let ourdata = JSON.parse(OurRequest.responseText);
    //  console.log(ourdata);    
    // }
    // OurRequest.send();
         
// fetch(urlData)
// .then(function(response){
//     console.log(response.json);
// })


fetch(urlData)
.then(response => response.json())
.then(data => {

    console.log(data);
    console.log(data.Poster);
    let img = document.getElementById('imgShow');
    let title = document.getElementById('all');
    let Plot = document.getElementById('plot');
    let rating = document.getElementById('rating');

    let release = document.getElementById('release');
    title.innerHTML = (data.Title);
    img.src = (data.Poster); 
    release.innerHTML = (data.Released);
    Plot.innerHTML = (data.Plot);
    rating.innerHTML = (data.imdbRating);
    hidden();

});
}


// add the value to api search 




// taking the api result 


//showing it on display (using the creat node element )