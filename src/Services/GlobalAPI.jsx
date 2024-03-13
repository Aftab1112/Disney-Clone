const movieBaseUrl = "https://api.themoviedb.org/3";
const apiKey = "5b60bd9828ea456804d40c824a8b38fe";

async function getTrendingMovies() {
  const response = await fetch(
    `${movieBaseUrl}/trending/all/day?api_key=${apiKey}`
  );
  const movies = await response.json();
  return movies;
}

export default { getTrendingMovies };
