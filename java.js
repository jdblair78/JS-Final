// API_KEY = "ab612e22";

//  url = `http://www.omdbapi.com/?apikey=ab612e22&i=tt1285016`;

const searchInput = document.getElementById("search");
const resultsList = document.getElementById("results");

let debounceTimer;

searchInput.addEventListener("input", () => {
  clearTimeout(debounceTimer);

  debounceTimer = setTimeout(() => {
    const query = searchInput.value.trim();

    if (query.length < 3) {
      resultsList.innerHTML = "";
      return;
    }

    fetchMovies(query);
  }, 500); 
});

async function fetchMovies(searchTerm) {
  const apiKey = "ab612e22";
  const url = `https://www.omdbapi.com/?apikey=${apiKey}&s=${searchTerm}`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    const max_results = 6

    if (data.Response === "True") {
      displayResults(data.Search.slice(0,max_results));
    } else {
      resultsList.innerHTML = "<li>No results found</li>";
    }
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

function displayResults(movies) {
  results.innerHTML = "";

  movies.forEach(movie => {
    const movieCard = document.createElement("div");
    movieCard.className = "movie-card";

    const poster = document.createElement("img");
    poster.className = "poster";
    poster.src =
      movie.Poster !== "N/A"
        ? movie.Poster
        : "https://via.placeholder.com/150x225?text=No+Image";
    poster.alt = movie.Title;

    const title = document.createElement("h3");
    title.textContent = movie.Title;

    const year = document.createElement("p");
    year.textContent = movie.Year;

    movieCard.appendChild(poster);

    results.appendChild(movieCard);
  });
}