const API_KEY = "ab612e22";

const url = `http://www.omdbapi.com/?apikey=ab612e22`;

fetch(url)
  .then(res => res.json())
  .then(data => {
    console.log(data);
  });

async function main(){
  const movies = await fetch("http://www.omdbapi.com/?apikey=ab612e22")
  const moviesData = await movies.json();
  console.log(moviesData)
  const x = `<div class="movie-card">
      <div class="movie-card__container">
        <h3>Movie Title</h3>
        <p><b>Rating:</b>00/10</p>
      </div>
    </div>`
  
}

main();