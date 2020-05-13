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






    // let outputall = '';

    //     data.forEach(function(data){
    //         outputall +=  `
    //         <ul>
    //             <li> ID : ${data.id}</li>
    //             <li> Name : ${data.name}</li>
    //             <li> username : ${data.username}</li>
    //             <li> email : ${data.email}
    //         </ul    
    //         `;
    //     })

      
    //     document.querySelector(".userCall").innerHTML = outputall
    //     document.querySelector(".userCall").classList.add("box");
    // };






// Go button 



// let buttonCLick = document.querySelector(".btnSub").addEventListener("click",  function () {

//     document.getElementById("searchform").onsubmit = function(e) {
//        let searchTextall = document.getElementById("searchText").value;
//         getmovies(searchTextall);
//         e.preventDefault();
       
//     }
// });

// hidden function program

// function hidden() {
//     var x = document.querySelector(".hidden");
//     if (x.style.display === "none") {
//       x.style.display = "block";
//     } else {
//       x.style.display = "none";
//     }
// }


// to get movie from the db using api 

// function getmovies(searchTextall){
   
//   let searchKey = searchTextall;
//   let replacedKey = searchKey.split(' ').join('+');

//     let apiKey ="dcbc738b";
//     let urlData = "http://www.omdbapi.com/?apikey=" + apiKey + "&s=" + replacedKey; 
//     console.log(urlData);
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


//   fetch(urlData)
//   .then(response => response.json())
//   .then(data => {

//     console.log(data);
//     console.log(data.Poster);
//     let img = document.getElementById('imgShow');
//     let title = document.getElementById('all');
//     let imdbId = document.getElementById('imdbId');


//     let release = document.getElementById('release');
//     title.innerHTML = data.Search[0].Title;
//     console.log(title);
//     img.src = data.Search[0].Poster; 
     
//     release.innerHTML = data.Search[0].Year;
//     imdbId.innerHTML = data.Search[0].imdbID;
  
//      hidden();

// });
// }

// use async await

// get the whole like many pages list 


//showing it on display (using the creat node element )