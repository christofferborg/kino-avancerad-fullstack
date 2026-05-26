"use client";

import { useState } from "react";
import MovieCard from "./MovieCard";
import Button from "@/components/ui/Button";
import { Movie } from "@/types/movie";

const MOVIES_PER_PAGE = 10;

export default function MoviesGrid({
  initialMovies,
}: {
  initialMovies: Movie[];
}) {

  const [visibleCount, setVisibleCount] =
    useState(MOVIES_PER_PAGE);

  const visibleMovies =
    initialMovies.slice(0, visibleCount);

  function loadMore() {
    setVisibleCount((prev) =>
      prev + MOVIES_PER_PAGE
    );
  }

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5">

        {visibleMovies.map((movie) => (
          <MovieCard
            key={movie.id}
            movie={movie}
          />
        ))}
      </div>

      {visibleCount < initialMovies.length && (
        <div className="flex justify-center mt-15 mb-50">

          <Button
            variant="secondary"
            onClick={loadMore}
          >
            Visa mer filmer
          </Button>

        </div>
      )}
    </>
  );
}