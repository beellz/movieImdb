// first take search 

window.onload = function () {

    document.getElementById("searchform").onsubmit = function(e) {
       let searchTextall = document.getElementById("searchText").value;
        getmovies(searchTextall);
        e.preventDefault();
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
    let release = document.getElementById('release');
    title.innerHTML = (data.Title);
    img.src = (data.Poster); 
    release.innerHTML = (data.Released);
//     let output = '<h2>'
//     let title = Title;
//     let img = Poster;
//   console.log(Title);
//   classAll.innerHTML = title; 
});
}


// add the value to api search 




// taking the api result 


//showing it on display (using the creat node element )