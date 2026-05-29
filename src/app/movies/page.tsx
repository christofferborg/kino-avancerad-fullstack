import Button from "@/components/ui/Button";
import {
  DropdownMenuDay,
  DropdownMenuTime
} from "@/app/movies/components/DropdownMenus";
import SearchBar from "./components/SearchBar";
import MoviesGrid from "./components/MoviesGrid";
import { getMovies } from "@/lib/getMovies";

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
        <div className="flex gap-5">
          <DropdownMenuDay />
          <DropdownMenuTime />
        </div>
        <SearchBar />
      </div>

      <div>
        <MoviesGrid initialMovies={initialMovies} />
      </div>

    </div>
  );
}