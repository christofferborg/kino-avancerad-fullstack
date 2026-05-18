import MovieCard from "./components/MovieCard";
import Button from "@/components/ui/Button";

export default function MoviesPage() {
  return (

<div>
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