// first take search 
window.onload = function() {
  document.querySelector(".hidden").style.display = 'none';
};



let buttonCLick = document.querySelector(".btnSub").addEventListener("click",  function () {

    document.getElementById("searchform").onsubmit = function(e) {
       let searchTextall = document.getElementById("searchText").value;
        getmovies(searchTextall);
        e.preventDefault();
       
    }
});


function hidden() {
    var x = document.querySelector(".hidden");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }





function getmovies(searchTextall){
   
  let searchKey = searchTextall;
  let replacedKey = searchKey.split(' ').join('+');

    let apiKey ="dcbc738b";
    let urlData = "http://www.omdbapi.com/?apikey=" + apiKey + "&s=" + replacedKey; 
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
    let imdbId = document.getElementById('imdbId');


    let release = document.getElementById('release');
    title.innerHTML = data.Search[0].Title;
    console.log(title);
    img.src = data.Search[0].Poster; 
     
    release.innerHTML = data.Search[0].Year;
    imdbId.innerHTML = data.Search[0].imdbID;
  
     hidden();

});
}


// add the value to api search 




// taking the api result 


//showing it on display (using the creat node element )