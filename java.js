const API_KEY = "97fda536b4a1f3d474285cfc3cabf0a29a0f3e09";

const url = `https://api.example.com/comics?apikey=${API_KEY}`;

fetch(url)
  .then(res => res.json())
  .then(data => {
    console.log(data);
  });


  