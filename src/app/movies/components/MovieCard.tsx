import Image from "next/image";
import { Movie } from "@/types/movie";

type MovieCardProps = {
  movie: Movie;
};

export default function MovieCard({
  movie,
}: MovieCardProps) {
  return (
<div
  className="
  flex flex-col 
  bg-[var(--color-card)] 
  rounded-xl overflow-hidden 
  max-w-[220px] 
  shadow-[0_20px_60px_rgba(0,0,0,0.6)] 
  transition-transform transition-shadow 
  duration-300 
  hover:scale-105 
  hover:shadow-[0_25px_70px_rgba(0,0,0,0.8)]"
>
      <div>
        <Image
          className="w-full h-[272px] object-cover"
          src={movie.Poster}
          alt={movie.Title}
          width={220}
          height={272}
        />
      </div>

      <div className="py-3 px-4">
        <div className="flex items-center justify-between mb-1">
          <h2 className="text-sm font-bold mb-0.5">
            {movie.Title}
          </h2>

          <Image
            src="/img/info.png"
            alt="info"
            width={16}
            height={16}
          />
        </div>

        <h3 className="text-sm font-semibold mb-0.5 text-gray-400">
          {movie.Year || "Unknown year"}
        </h3>
      </div>
    </div>
  );
}