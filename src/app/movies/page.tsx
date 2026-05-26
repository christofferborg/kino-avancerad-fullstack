import Button from "@/components/ui/Button";
import {
  DropdownMenuDay,
  DropdownMenuTime
} from "@/app/movies/components/DropdownMenus";
import SearchBar from "./components/SearchBar";
import MoviesGrid from "./components/MoviesGrid";

async function getMovies() {
  const res = await fetch("http://localhost:3000/api/movies", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch movies");
  }

  return res.json();
}

export default async function MoviesPage() {

  const initialMovies = await getMovies();

  return (

    <div className="mx-auto w-fit">

      <div className="flex gap-2 mb-8">
        <Button variant="tag">Senaste filmerna</Button>
        <Button variant="tag">Barnbio</Button>
        <Button variant="tag">Klassiker</Button>
      </div>

      <div className="w-full flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-15">
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