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
              
          </div>
      </div>
      `;
      document.querySelector(".row").innerHTML = output
    })
});
      
};

