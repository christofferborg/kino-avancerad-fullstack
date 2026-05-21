async function getAllMovies() {
  const listOfMovieIDs: string[] = [];
  const apiKey = process.env.OMDB_API_KEY;
  const movies: any[] = [];

  for (const id of listOfMovieIDs) {
    const url = `http://www.omdbapi.com/?apikey=${apiKey}&i=${id}`;

    const response = await fetch(url);
    const data = await response.json();
    movies.push(data);
  }
  return movies;
}

/* async function getAllMovies() {
  const listOfMovieIDs: string[] = ["tt0111161", "tt0068646"];
  const apiKey = process.env.OMDB_API_KEY;

  // 1. Skapa en array av Promise-objekt (anropen startar direkt)
  const moviePromises = listOfMovieIDs.map(async (id) => {
    const url = `http://www.omdbapi.com/?apikey=${apiKey}&i=${id}`;
    const response = await fetch(url);
    return response.json();
  });

  // 2. Vänta tills ALLA hämtningar är klara samtidigt
  const movies = await Promise.all(moviePromises);

  return movies;
} */