const API_KEY = "ab612e22";

const url = `http://www.omdbapi.com/?i=tt3896198&apikey=ab612e22`;

fetch(url)
  .then(res => res.json())
  .then(data => {
    console.log(data);
  });


 