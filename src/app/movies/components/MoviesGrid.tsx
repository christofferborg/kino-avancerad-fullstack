"use client";

import { useState } from "react";
import MovieCard from "./MovieCard";
import Button from "@/components/ui/Button";
import { Movie } from "@/types/movie";


export default function MoviesGrid({
  initialMovies,
}: {
  initialMovies: Movie[];
}) {

  const [movies, setMovies] = useState(initialMovies);
  const [page, setPage] = useState(1);

  async function loadMore() {

    const nextPage = page + 1;

    const res = await fetch(
      `/api/movies?page=${nextPage}`
    );

    const data = await res.json();

    setMovies([...movies, ...data]);
    setPage(nextPage);

    console.log(movies);
  }
 
  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5">

        {movies.map((movie) => (
          <MovieCard
            key={movie.id}
            movie={movie}
          />
        ))}
      </div>

      <div className="flex justify-center mt-15 mb-50">
        <Button
          variant="secondary"
          onClick={loadMore}
        >
          Visa mer filmer
        </Button>
      </div>
    </>
  );
} 