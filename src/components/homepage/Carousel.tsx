"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Movie } from "@/types/movie";

export default function Carousel() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    async function fetchMovies() {
      const res = await fetch("/api/movies");
      const data = await res.json();

      setMovies(data);
    }

    fetchMovies();
  }, []);

  useEffect(() => {
    if (movies.length === 0 || isPaused) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) =>
        prev === movies.length - 1 ? 0 : prev + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [movies, isPaused]);

  function nextSlide() {
    setCurrentSlide((prev) =>
      prev === movies.length - 1 ? 0 : prev + 1
    );
  }

  function prevSlide() {
    setCurrentSlide((prev) =>
      prev === 0 ? movies.length - 1 : prev - 1
    );
  }

  if (movies.length === 0) {
    return null;
  }

  const movie = movies[currentSlide];

  return (
    <section className="mx-auto max-w-7xl px-4 py-8">
      <div className="relative rounded-2xl bg-[#080B10] p-6"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        >

        {/* Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-3 top-1/2 z-10 -translate-y-1/2 cursor-pointer"
        >
          <Image
            src="/img/arrow-left-circle.png"
            alt="Previous"
            width={48}
            height={48}
          />
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-3 top-1/2 z-10 -translate-y-1/2 cursor-pointer"
        >
          <Image
            src="/img/arrow-right-circle.png"
            alt="Next"
            width={48}
            height={48}
          />
        </button>

        {/* Slide */}
        <div key={movie.id} className="animate-fade">
          <div className="flex md:h-[360px] items-center justify-center overflow-hidden rounded-xl bg-[#080B10]">
            <Image
              src={movie.img}
              alt={movie.title}
              width={1200}
              height={360}
              className="h-full w-full object-contain"
              priority={false}
            />
          </div>

          <h2 className="mt-4 text-center text-2xl font-bold text-main">
            {movie.title}
          </h2>
        </div>
      </div>
    </section>
  );
}