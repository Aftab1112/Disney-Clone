import React, { useEffect } from "react";

function GlobalAPI() {
  const movieBaseUrl = "https://api.themoviedb.org/3";
  const apiKey = "5b60bd9828ea456804d40c824a8b38fe";

  useEffect(() => {
    async function getTrendingMovies() {
      const response = await fetch(
        `${movieBaseUrl}/trending/all/day?api_key=${apiKey}`
      );
      const movies = await response.json();
      console.log(movies);
    }
    getTrendingMovies();
  }, []);
}

export default GlobalAPI;
