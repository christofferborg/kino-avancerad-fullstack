import Image from "next/image";

interface MovieObject {
  id: string;
  title: string;
  plot: string;
  rating: string;
  genre: string;
  img: string;
}

async function getMovies() {
  const res = await fetch("http://localhost:3000/api/movies", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch movies");
  }

  return res.json();
}

export default async function MovieInfoPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {

  const { id } = await params;

  const movies: MovieObject[] = await getMovies();


  const movie = movies.find(
    (movie) => movie.id === id
  );

  if (!movie) {
    return <div>Filmen kunde inte hittas.</div>;
  }

  return (
    <section className="flex justify-center px-4 mb-[200px]">

      <div className="flex flex-col lg:flex-row gap-4 items-center mx-auto">

        {/* Poster */}
        <Image
          src={movie.img}
          alt={movie.title}
          width={400}
          height={600}
          loading="eager"
          className="w-[400px] h-[600px] object-cover rounded-[10px]"
        />

        {/* Right Side */}
        <div className="flex flex-col items-center">

          {/* Info Box */}
          <div className="bg-card p-8 w-[400px] rounded-[10px] lg:h-[426px]">

            <p className="text-white mb-4">
               ⭐️ {movie.rating}
            </p>

            <h1 className="text-4xl font-bold mb-4">
              {movie.title}
            </h1>

            <p className="text-muted mb-4 ">
              {movie.genre}
            </p>

            <p className="text-main leading-8">
              {movie.plot}
            </p>

          </div>

          {/* Review Buttons */}
          <button className="flex items-center justify-between bg-card text-main text-left text-base h-[72px] w-[400px] mt-4 px-8 rounded-[10px] hover:text-muted transition">

            <span>Recensioner</span>

            <span>›</span>

          </button>

          <button className="flex items-center justify-between bg-card text-main text-left text-base h-[72px] w-[400px] mt-4 px-8 rounded-[10px] hover:text-muted transition">

            <span>Skriv recension</span>

            <span>›</span>

          </button>

        </div>

      </div>

    </section>
  );
}

