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

  const perPage = 10; //Movies per page

  const start = (page - 1) * perPage;
  const end = start + perPage;

  const paginatedIDs =
    listOfMovieIDs.slice(start, end);

  const apiKey = process.env.OMDB_API_KEY;

  const moviePromises = paginatedIDs.map(async (id) => {

    const res = await fetch(
      `https://www.omdbapi.com/?apikey=${apiKey}&i=${id}`
    );

    const rawData = await res.json();

    return {
      id: rawData.imdbID, //gjorde om id till imdbID så det ser ut som i omdb
      title: rawData.Title,
      plot: rawData.Plot,
      rating: rawData.imdbRating,
      genre: rawData.Genre,
      img: rawData.Poster,
    } satisfies Movie;
  });

  return Promise.all(moviePromises);
  
}