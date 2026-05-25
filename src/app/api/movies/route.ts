import { NextRequest, NextResponse } from "next/server";

interface MovieObject {
  id: string;
  title: string;
  plot: string;
  rating: string;
  genre: string;
  img: string;
}

export async function GET(req: NextRequest) {

  // Pagination
  const page =
    Number(req.nextUrl.searchParams.get("page")) || 1;

  const perPage = 10; //Movie per page

  const start = (page - 1) * perPage;
  const end = start + perPage;

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
    "tt17490712",
    "tt30825738",
    "tt30460310",
    "tt0427340",
    "tt15047880",
    "tt29355505",
    "tt8814476",
    "tt32890033",
    "tt27419466",
    "tt33764258",
    "tt22084616",
  ];

  // Only fetch movies for current page
  const paginatedIDs =
    listOfMovieIDs.slice(start, end);

  const apiKey = process.env.OMDB_API_KEY;

  try {

    const moviePromises = paginatedIDs.map(async (id) => {

      const url =
        `https://www.omdbapi.com/?apikey=${apiKey}&i=${id}`;

      const response = await fetch(url);

      const rawData: any = await response.json();

      console.log(rawData);

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

    const movies =
      await Promise.all(moviePromises);

    return NextResponse.json(movies);

  } catch (error) {

    return NextResponse.json(
      { error: "Kunde inte hämta filmer" },
      { status: 500 }
    );
  }
}