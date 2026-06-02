import Image from "next/image";
import { Movie } from "@/types/movie";
import Link from "next/link";

type Props = {
  movie: Movie;
};

export default function MovieCard({
  movie,
}: Props) {
  return (
    <Link
      href={`/movies/${movie.id}`}
      className="flex flex-col bg-[var(--color-card)] rounded-xl overflow-hidden max-w-[220px] shadow-[0_20px_60px_rgba(0,0,0,0.6)] transition-transform transition-shadow duration-300 hover:scale-105 hover:shadow-[0_25px_70px_rgba(0,0,0,0.8)]"
    >

<div className="relative w-full h-[272px]">

  <Image
    src={movie.img}
    alt={movie.title}
    data-cy="movie-img"
    fill
    className="object-cover"
    sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 20vw"
  />

</div>

      <div className="py-3 px-4">
        <div className="flex items-center justify-between mb-1">
          <h2 className="text-sm font-bold mb-0.5 truncate">
            {movie.title}
          </h2>

          <Image
            src="/img/info.png"
            alt="info"
            width={16}
            height={16}
          />
        </div>

        <h3 className="text-sm font-semibold mb-0.5 text-gray-400 truncate">
          {movie.genre || "Unknown genre"}
        </h3>
      </div>
    

    </Link>
  );
}
