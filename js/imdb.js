var search = document.getElementById("search");
search.addEventListener("keyup", e => {
  //   console.log(e.target.value);
  var searchText = e.target.value;
  getMovies(searchText);
});

function getMovies(searchText) {
  const imdbApi = `http://www.omdbapi.com/?s=${searchText}&apikey=d6db1162`;
  window
    .fetch(imdbApi)
    .then(movies => {
      movies
        .json()
        .then(data => {
          const movieData = data.Search;
          var output = [];
          for (let movie of movieData) {
            output += `
                        <div class="container">
                            <section id="movies">
                                <h1>${movie.Title}</h1>
                                <span class="badge badge-success">${movie.Year}</span>
                                <span class="badge badge-primary">${movie.Rated}</span>
                                <span class="badge badge-info">${movie.Released}</span>
                                <span class="badge badge-dark">${movie.Runtime}</span>
                                <span class="badge badge-danger">${movie.Genre}</span>
                                <p>
                                    <img src="${movie.Poster}" class="img-poster"/>
                                </p
                                <p>${movie.Director}</p>
                                <p>${movie.Language}</p>
                                <p>${movie.Plot}</p>                                
                                <p><button class="btn btn-dark btn-block">Go to Movie</button></p>                                

                            </section>
                        </div>`;

            document.getElementById("template").innerHTML = output;
          }
        })
        .catch(err => console.log(err));
    })
    .catch(err => console.log(err));
}
