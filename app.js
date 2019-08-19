console.log("hello");

function addon() {

    var search = document.getElementById("Addin");

    let apiKey ="dcbc738b";
    let urlData = (`http://www.omdbapi.com/?apikey=${apiKey}&t=${search.value}`);

    console.log(search.value);
    console.log(urlData);
}

// first take search 



// add the value to api search 


// taking the api result 


//showing it on display (using the creat node element )