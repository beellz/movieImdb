// console.log("hello");

// function addon() {

//     var search = document.getElementById("Addin");

//     let apiKey ="dcbc738b";
//     let urlData = (`http://www.omdbapi.com/?apikey=${apiKey}&t=${search.value}`);

//     console.log(search.value);
//     console.log(urlData);
// }

// first take search 

window.onload = function () {

    document.getElementById("searchform").onsubmit = function(e) {
       let searchTextall = document.getElementById("searchText").value;
        getmovies(searchTextall);
        e.preventDefault();
    }
}

function getmovies(searchTextall){
   
    var apiKey ="dcbc738b";
    var urlData = "http://www.omdbapi.com/?apikey=" + apiKey + "&t=" + searchTextall; 
    console.log(urlData);
}
// add the value to api search 


// taking the api result 


//showing it on display (using the creat node element )