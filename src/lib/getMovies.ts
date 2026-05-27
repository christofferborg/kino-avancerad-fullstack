import { Movie } from "@/types/movie";

const listOfMovieIDs = [
  "tt0110912",
  "tt0109830",
  "tt0068646",
  "tt0105665",
  "tt5104604",
  "tt0096283",
  "tt0111161",
  "tt1204342",
  "tt1757678",
];

export async function getMovies(page = 1) {
  const perPage = 10;

  const start = (page - 1) * perPage;
  const end = start + perPage;

  const paginatedIDs = listOfMovieIDs.slice(start, end);

  const apiKey = process.env.OMDB_API_KEY;

  if (!apiKey) {
    throw new Error("OMDB_API_KEY is missing");
  }

  const baseUrl = "https://www.omdbapi.com/";

  const moviePromises = paginatedIDs.map(async (id) => {
    const url = `${baseUrl}?apikey=${apiKey}&i=${id}`;
    const res = await fetch(url);
    const rawData = await res.json();

    if (rawData.Response === "False") return null;

    return {
      id: rawData.imdbID,
      title: rawData.Title,
      plot: rawData.Plot,
      rating: rawData.imdbRating,
      genre: rawData.Genre,
      img: rawData.Poster,
    } satisfies Movie;
  });

  const movies = await Promise.all(moviePromises);

  return movies.filter(Boolean) as Movie[];
}