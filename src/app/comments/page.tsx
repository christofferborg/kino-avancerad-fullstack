import { prisma } from "@/generated";

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
      <h1 className="text-center font-bold text-3xl mb-6 lg:text-center lg:mt-12">
        Recensioner
      </h1>
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
