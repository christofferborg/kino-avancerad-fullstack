import MovieCard from "./components/MovieCard";
import Button from "@/components/ui/Button";
import {
  DropdownMenuDay,
  DropdownMenuTime
} from "@/app/movies/components/DropdownMenus";
import SearchBar from "./components/SearchBar"; 

export default function MoviesPage() {
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

<div
  className="
     grid
      grid-cols-2
      md:grid-cols-3
      lg:grid-cols-4
      xl:grid-cols-5
      gap-5
  "
>
     <MovieCard />
     <MovieCard />
     <MovieCard />
     <MovieCard />        
     <MovieCard />

     <MovieCard />
     <MovieCard />
     <MovieCard />
     <MovieCard />        
     <MovieCard />
        </div>

  <div className="flex justify-center mt-15 mb-50">
  <Button variant="secondary">Visa mer filmer</Button>
  </div>

  </div>
  );
}