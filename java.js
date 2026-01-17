// API_KEY = "ab612e22";

//  url = `http://www.omdbapi.com/?apikey=ab612e22&i=tt1285016`;

async function main(){
const url = await fetch("https://www.omdbapi.com/?apikey=ab612e22&s=Avengers")
const moviesData = await url.json()
const movieListEl = document.querySelector('.movie-card');
console.log(moviesData)
movieListEl.innerHTML = moviesData
  .Search.map((movie) => {
    return `<div class="movie-card">
      <div class="movie-card__container">
        <h3>${movie.Title}</h3>
          <img src="${movie.Poster}" class="poster__img" />
      </div>
    </div>`
  }
  )
}

main();