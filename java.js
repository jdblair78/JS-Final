// API_KEY = "ab612e22";

//  url = `http://www.omdbapi.com/?apikey=ab612e22&i=tt1285016`;

const searchInput = document.getElementById("search");
const resultsList = document.getElementById("results");
const filterSelect = document.getElementById("filter")

let debounceTimer;
let currentMovies = []

searchInput.addEventListener("input", () => {
  clearTimeout(debounceTimer);

  debounceTimer = setTimeout(() => {
    const query = searchInput.value.trim();

    console.log("USER TYPED:", query)

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

  console.log("API URL:", url)

  try {
    const response = await fetch(url);
    const data = await response.json();
    const max_results = 6
    
     console.log("FULL API RESPONSE:", data)

    

    if (data.Response === "True") {

      currentMovies = data.Search.slice(0, max_results);
        displayResults(currentMovies);

      
    } 
    
    else {
      resultsList.innerHTML = "<li>No results found</li>";
    }
  } 
  
  catch (error) {
    console.error("FETCH ERROR:", error);
  }
}

function displayResults(movies) {
  results.innerHTML = "";

  movies.forEach(movie => {

    console.log("MOVIE OBJECT:", movie)

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
    movieCard.appendChild(title)
    movieCard.appendChild(year)
    
    resultsList.appendChild(movieCard);
  });
}

filterSelect.addEventListener("change", () => {
  if (currentMovies.length === 0)  
    return    
  
  const filter = filterSelect.value
  let sortedMovies = [...currentMovies]
    


    if (filter === 'A_TO_Z') {
      sortedMovies.sort((a, b) => (a.Title.localeCompare(b.Title)))
    }

    if (filter === 'Z_TO_A') {
      sortedMovies.sort((a, b) => (b.Title.localeCompare(a.Title)) )
    }

    if (filter === 'RELEASE_ASC') {
      sortedMovies.sort((a, b) => parseInt(a.Year) - parseInt(b.Year))
    }
    if (filter === 'RELEASE_DSC') {
      sortedMovies.sort((a, b) => parseInt(b.Year) - parseInt(a.Year))
    }

    displayResults(sortedMovies)
  })

