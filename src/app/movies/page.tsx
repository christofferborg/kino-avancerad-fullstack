import MovieCard from "./components/MovieCard";

export default function MoviesPage() {
  return (


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
  
  );
}