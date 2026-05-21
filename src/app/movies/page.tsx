import MovieCard from "./components/MovieCard";
import Button from "@/components/ui/Button";
import {
  DropdownMenuDay,
  DropdownMenuTime
} from "@/app/movies/components/DropdownMenus";
import SearchBar from "./components/SearchBar";
import MoviesGrid from "./components/MoviesGrid";

async function getMovies(page: number) {

  const res = await fetch(
    `https://www.omdbapi.com/?s=movie&type=movie&page=${page}&apikey=${process.env.OMDB_API_KEY}`,
  );

  const data = await res.json(); 

  return data.Search;
}

export default async function MoviesPage() {

  const initialMovies = await getMovies(1);

  return (

    <div className="mx-auto w-fit">

      <div className="flex gap-2 mb-8">
        <Button variant="tag">Senaste filmerna</Button>
        <Button variant="tag">Barnbio</Button>
        <Button variant="tag">Klassiker</Button>
      </div>

      <div
        className="
          w-full
          flex
          flex-col
          lg:flex-row
          lg:items-center
          lg:justify-between
          gap-4
          mb-15
        "
      >
        {/* Left side */}
        <div className="flex gap-5">
          <DropdownMenuDay />
          <DropdownMenuTime />
        </div>

        {/* Right side */}
        <SearchBar />
      </div>

      <div>
      <MoviesGrid initialMovies={initialMovies} />
      </div>

    </div>
  );
}