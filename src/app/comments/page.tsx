import { prisma } from "@/generated";
import Link from "next/link"

export default async function Comments() {
  const comments = await prisma.comment.findMany({
    orderBy: [
      {
        createdAt: "desc",
      },
    ],
  });

  return (
    <div>
      <div className="relative flex items-center justify-center w-full">
        <Link className="mb-4 text-3xl absolute left-4 hover:text-muted" href="/movies">
          &lt;
        </Link>
        <h1 className="text-center font-bold text-3xl mb-6 lg:text-center lg:mt-12 align-center">
          Recensioner
        </h1>
      </div>
      <div>
        <ul>
          {comments.map((item: any) => (
            <li
              key={item.id}
              className="m-4 bg-card p-8 lg:max-w-screen-lg lg:mx-auto rounded-lg"
            >
              <p className="">⭐️ {item.rating}/5</p>
              <p className="mt-4">"{item.comment}"</p>
              <p className="mt-8 font-bold">{item.name}</p>
            </li>
          ))}
        </ul>
      </div>
      <p>pagination</p>
    </div>
  );
}
