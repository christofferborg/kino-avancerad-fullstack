import MovieCard from "./components/MovieCard";
import Button from "@/components/ui/Button";
import {
  DropdownMenuDay,
  DropdownMenuTime
} from "@/app/movies/components/DropdownMenus";

export default function MoviesPage() {
  return (

<div className="max-w-fit mx-auto mb-10">

<div className="flex gap-2 mb-8">
<Button variant="tag">Senaste filmerna</Button>
<Button variant="tag">Barnbio</Button>
<Button variant="tag">Klassiker</Button>
</div>

<div className="flex gap-5 mb-15">
<DropdownMenuDay />
<DropdownMenuTime />
</div>

<div
  className="
    max-w-fit
    mx-auto
    grid
    grid-cols-1
    grid-cols-2
    sm:grid-cols-3
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