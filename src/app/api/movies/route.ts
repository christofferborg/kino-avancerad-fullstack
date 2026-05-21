import { NextResponse } from "next/server";

interface MovieObject {
  id: string;
  title: string;
  plot: string;
  rating: string;
  genre: string,
  img: string;
}

export async function GET() {
  const listOfMovieIDs: string[] = [
    "tt0110912",
    "tt0109830",
    "tt0068646",
    "tt0105665",
    "tt5104604",
    "tt0096283",
    "tt0111161",
    "tt1204342",
    "tt1757678",
    "tt2953050",
  ];
  const apiKey = process.env.OMDB_API_KEY;

  try {
    const moviePromises = listOfMovieIDs.map(async (id) => {
      const url = `http://www.omdbapi.com/?apikey=${apiKey}&i=${id}`;
      const response = await fetch(url);
      const rawData: any = await response.json();
      //console.log(rawData)
      
      const movieObject: MovieObject = {
        id: rawData.id,
        title: rawData.Title || "Ingen titel tillgänglig",
        plot: rawData.Plot || "Ingen handling tillgänglig",
        rating: rawData.imdbRating || "-",
        genre: rawData.Genre || "Ingen genre tillgänglig",
        img: rawData.Poster || "Ingen poster tillgänglig",
      };
      return movieObject;
    });

    const movies = await Promise.all(moviePromises);

    return NextResponse.json(movies, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "Kunde inte hämta filmer" },
      { status: 500 },
    );
  }
}
