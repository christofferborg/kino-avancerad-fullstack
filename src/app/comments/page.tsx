import { prisma } from "@/generated";
import Link from "next/link";

export default async function Comments({
  searchParams,
}: {
  searchParams: Promise<{ page?: string }>;
}) {
  const params = await searchParams;
  const pageSize = 6;
  const currentPage = Number(params.page) || 1;
  const skip = (currentPage - 1) * pageSize;
  //const {id} = await params; Denna rad aktiveras när filmsidan finns.

  const [comments, totalComments] = await Promise.all([
    prisma.comment.findMany({
      orderBy: [{ createdAt: "desc" }],
      take: pageSize,
      skip: skip,
    }),
    prisma.comment.count(),
  ]);
  const totalPages = Math.ceil(totalComments / pageSize) || 1;
  return (
    <div className="w-md mx-auto lg:w-4xl xl:w-6xl">
      <div className="flex flex-row justify-between items-center w-full mb-6">
        <Link className="text-3xl hover:text-muted" href="/movies">
          {/* Denna rad aktiveras när filmsidan finns  href={`/movies/${id}`} */}
          &lt;
        </Link>

        <h1 className="text-center font-bold text-3xl">Recensioner</h1>
        <div className="text-3xl invisible" aria-hidden="true">
          &lt;
        </div>
      </div>
      <div>
        <ul className="lg:grid lg:grid-cols-2 lg:grid-rows-3 lg:w-full">
          {comments.map((item: any) => (
            <li key={item.id} className="m-2 bg-card p-8 rounded-lg">
              <p className="">⭐️ {item.rating}/5</p>
              <p className="mt-4">"{item.comment}"</p>
              <p className="mt-8 font-bold">{item.name}</p>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex flex-row justify-center w-full mt-4 lg:mt-16">
        <Link
          href={currentPage <= 1 ? "#" : `/comments?page=${currentPage - 1}`}
          className={`font-bold m-4 ${currentPage <= 1 ? "opacity-30 cursor-not-allowed" : "hover:text-muted"}`}
        >
          &lt;
        </Link>
        <p className="font-bold m-4">
          {currentPage} / {totalPages}
        </p>
        <Link
          href={
            currentPage >= totalPages
              ? "#"
              : `/comments?page=${currentPage + 1}`
          }
          className={`font-bold m-4 ${currentPage >= totalPages ? "opacity-30 cursor-not-allowed" : "hover:text-muted"}`}
        >
          &gt;
        </Link>
      </div>
    </div>
  );
}
