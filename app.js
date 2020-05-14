// first take search 
window.onload = function() {
  // document.querySelector(".hidden").style.display = 'none';
  document.getElementById("searchForm").addEventListener("submit", (event) => {
  event.preventDefault();
  let searchText = document.getElementById("searchText").value
   getMovies(searchText); 
  console.log(searchText);
  })
};

function getMovies(searchText){
  console.log("text is " + searchText)
  let box = document.querySelector(".row").innerHTML
  axios.get('http://www.omdbapi.com/?apikey=dcbc738b&s=' + searchText)
  .then((response) => {
    console.log(response);
    let moviesAll = response.data.Search;
    let output = '';
    // let title = document.querySelector('.row')
    // title.innerHTML = response.data.Search[0].Title;
    // console.log(response.data.Search[0].Title);

    
    // movies.forEach(function(index, movies) {
      moviesAll.forEach(function(moviesAll){
      output += `
      <div class="col-md-3">
          <div class="well text-center">
              <img src=${moviesAll.Poster}>
                <h5>${moviesAll.Title}</h5>
              <a onclick="movieSelected('${moviesAll.imdbID}')" class="btn btn-primary" href="#">Movie Details</a>
          </div>
      </div>
      `;
      document.querySelector(".row").innerHTML = output
    })
});
       
}


function movieSelected(id) {
    sessionStorage.setItem('movieId', id);
    window.location = "movies.html";
    return false;
}


function getMovie() {

    let movieId = sessionStorage.getItem('movieId');
    axios.get('http://www.omdbapi.com/?apikey=dcbc738b&i=' + movieId)
    .then((response) => {
    console.log(response);
    let movie = response.data;

    let output = `
    <div class="row">
    <div class="col-md-4">
    <img src=${movie.Poster} class="thumbnail">
    </div>
    <div class="col-md-8">
    <h2>${movie.Title}</h2>
    <ul class="list-group">
        <li class="list-group-item"><strong>Genre:</strong> ${movie.Genere}</li>
        <li class="list-group-item"><strong>Released:</strong> ${movie.Released}</li>          <li class="list-group-item"><strong>Rated:</strong> ${movie.Rated}</li>
        <li class="list-group-item"><strong>IMDB Rating:</strong> ${movie.imdbRating}</li>
        <li class="list-group-item"><strong>Director:</strong> ${movie.Director}</li>
        <li class="list-group-item"><strong>Writer:</strong> ${movie.Writer}</li>
    <li class="list-group-item"><strong>Actors:</strong> ${movie.Actors}</li>

</ul>
</div>
</div>
<div class="row">
    <div class="well">
    <h3>Plot</h3>
    ${movie.Plot}
<hr>
    <a href="http://imdb.com/title/${movie.imdbID}" target="_blank" class="btn btn-primary"> View iMDB</a>
    <a href="index.html" class="btn btn-default" > GO Back To Search </a>
</div>
</div>

    `;
    document.querySelector(".well").innerHTML = output    
    });
}


