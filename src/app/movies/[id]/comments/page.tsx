import { prisma } from "@/db";
import Link from "next/link";
export default async function Comments({
  searchParams,
  params,
}: {
  searchParams: Promise<{ page?: string }>;
  params: Promise<{ id: string }>;
}) {
  const resolvedSearchParams = await searchParams;
  const { id } = await params;

  const pageSize = 6;
  const currentPage = Number(resolvedSearchParams.page) || 1;
  const skip = (currentPage - 1) * pageSize;
  const [comments, totalComments] = await Promise.all([
    prisma.comment.findMany({
      where: { movieId: id }, 
      orderBy: [{ createdAt: "desc" }],
      take: pageSize,
      skip: skip,
    }),
    prisma.comment.count({
      where: { movieId: id }, 
    }),
  ]);

  const totalPages = Math.ceil(totalComments / pageSize) || 1;

  return (
    <div className="w-md mx-auto lg:w-4xl xl:w-6xl">
      <div className="flex flex-row justify-between items-center w-full mb-6">
        <Link className="text-3xl hover:text-muted" href={`/movies/${id}`}>
          &lt;
        </Link>

        <h1 className="text-center font-bold text-3xl">Recensioner</h1>
        <div className="text-3xl invisible" aria-hidden="true">
          &lt;
        </div>
      </div>
      <div>
        {comments.length === 0 ? (
          <p className="text-center my-12 text-muted">
            Inga recensioner för den här filmen ännu.
          </p>
        ) : (
          <ul className="lg:grid lg:grid-cols-2 lg:grid-rows-3 lg:w-full">
            {comments.map((item: any) => (
              <li key={item.id} className="m-2 bg-card p-8 rounded-lg">
                <p className="">⭐️ {item.rating}/5</p>
                <p className="mt-4">"{item.comment}"</p>
                <p className="mt-8 font-bold">{item.name}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
      <div className="flex flex-row justify-center w-full mt-4 lg:mt-16">
        <Link
          href={currentPage <= 1 ? "#" : `?page=${currentPage - 1}`}
          className={`font-bold m-4 ${currentPage <= 1 ? "opacity-30 cursor-not-allowed" : "hover:text-muted"}`}
        >
          &lt;
        </Link>
        <p className="font-bold m-4">
          {currentPage} / {totalPages}
        </p>
        <Link
          href={currentPage >= totalPages ? "#" : `?page=${currentPage + 1}`}
          className={`font-bold m-4 ${currentPage >= totalPages ? "opacity-30 cursor-not-allowed" : "hover:text-muted"}`}
        >
          &gt;
        </Link>
      </div>
    </div>
  );
}
