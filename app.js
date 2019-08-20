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
    let OurRequest = new XMLHttpRequest();
    OurRequest.open('GET', urlData)
    OurRequest.onload = function() {
    let ourdata = JSON.parse(OurRequest.responseText);
    // let meaning =
        console.log(ourdata);
    
    }
    OurRequest.send();
}
// add the value to api search 




// taking the api result 


//showing it on display (using the creat node element )