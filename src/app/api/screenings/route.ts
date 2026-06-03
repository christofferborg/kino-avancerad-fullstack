import { NextResponse } from "next/server";

export async function GET() {
  const screenings = [
    // DAY 1
    {
      id: 1,
      startsAt: "2026-05-27T15:00:00Z",
      room: "Salong Atlas",
      movie: {
        title: "Moana",
        poster:
          "https://m.media-amazon.com/images/M/MV5BMTQ1OTQ2Y2UtMzllNS00ODFiLWFkNGItNGRjOWRlMjIwNTRlXkEyXkFqcGc@._V1_.jpg",
      },
    },
    {
      id: 2,
      startsAt: "2026-05-27T18:30:00Z",
      room: "Salong Lumiére",
      movie: {
        title: "Pulp Fiction",
        poster:
          "https://m.media-amazon.com/images/M/MV5BNGNhMDIzZTUtNTBlZi00MTRlLWFjM2ItYzViMjE3YzI5MjljXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
      },
    },
    {
      id: 3,
      startsAt: "2026-05-27T20:00:00Z",
      room: "Salong Bijou",
      movie: {
        title: "The Godfather",
        poster:
          "https://m.media-amazon.com/images/M/MV5BNGEwYjgwOGQtYjg5ZS00Njc1LTk2ZGEtM2QwZWQ2NjdhZTE5XkEyXkFqcGc@._V1_.jpg",
      },
    },
    {
      id: 4,
      startsAt: "2026-05-27T21:15:00Z",
      room: "Salong Lumiére",
      movie: {
        title: "Spider-Man: Brand New Day",
        poster:
          "https://m.media-amazon.com/images/M/MV5BOWNjYWM3NWItOGE0ZS00MWRjLThiZWEtYjc4ZmNmMmU5ZTVmXkEyXkFqcGc@._V1_.jpg",
      },
    },

    // DAY 2
    {
      id: 5,
      startsAt: "2026-05-28T16:00:00Z",
      room: "Salong Atlas",
      movie: {
        title: "Avatar: Fire and Ash",
        poster:
          "https://m.media-amazon.com/images/M/MV5BZDYxY2I1OGMtN2Y4MS00ZmU1LTgyNDAtODA0MzAyYjI0N2Y2XkEyXkFqcGc@._V1_.jpg",
      },
    },
    {
      id: 6,
      startsAt: "2026-05-28T18:30:00Z",
      room: "Salong Bijou",
      movie: {
        title: "The Odyssey",
        poster:
          "https://m.media-amazon.com/images/M/MV5BN2MyYjk2MWMtODMyZS00MDUyLWE0OGQtOTQ3MGY0MDE0ZjVmXkEyXkFqcGc@._V1_.jpg",
      },
    },
    {
      id: 7,
      startsAt: "2026-05-28T20:00:00Z",
      room: "Salong Bijou",
      movie: {
        title: "Moana",
        poster:
          "https://m.media-amazon.com/images/M/MV5BMTQ1OTQ2Y2UtMzllNS00ODFiLWFkNGItNGRjOWRlMjIwNTRlXkEyXkFqcGc@._V1_.jpg",
      },
    },
    {
      id: 8,
      startsAt: "2026-05-28T22:30:00Z",
      room: "Salong Lumiére",
      movie: {
        title: "The Godfather",
        poster:
          "https://m.media-amazon.com/images/M/MV5BNGEwYjgwOGQtYjg5ZS00Njc1LTk2ZGEtM2QwZWQ2NjdhZTE5XkEyXkFqcGc@._V1_.jpg",
      },
    },

  
    {
      id: 9,
      startsAt: "2026-05-28T15:30:00Z",
      room: "Salong Atlas",
      movie: {
        title: "Spider-Man: Brand New Day",
        poster:
          "https://m.media-amazon.com/images/M/MV5BOWNjYWM3NWItOGE0ZS00MWRjLThiZWEtYjc4ZmNmMmU5ZTVmXkEyXkFqcGc@._V1_.jpg",
      },
    },
    {
      id: 10,
      startsAt: "2026-05-29T18:00:00Z",
      room: "Salong Bijou",
      movie: {
        title: "Pulp Fiction",
        poster:
          "https://m.media-amazon.com/images/M/MV5BNGNhMDIzZTUtNTBlZi00MTRlLWFjM2ItYzViMjE3YzI5MjljXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
      },
    },
    {
      id: 11,
      startsAt: "2026-05-29T20:30:00Z",
      room: "Salong Lumiére",
      movie: {
        title: "Avatar: Fire and Ash",
        poster:
          "https://m.media-amazon.com/images/M/MV5BZDYxY2I1OGMtN2Y4MS00ZmU1LTgyNDAtODA0MzAyYjI0N2Y2XkEyXkFqcGc@._V1_.jpg",
      },
    },
    {
      id: 12,
      startsAt: "2026-05-28T23:00:00Z",
      room: "Salong Atlas",
      movie: {
        title: "The Odyssey",
        poster:
          "https://m.media-amazon.com/images/M/MV5BN2MyYjk2MWMtODMyZS00MDUyLWE0OGQtOTQ3MGY0MDE0ZjVmXkEyXkFqcGc@._V1_.jpg",
      },
    },
  ];

  // grouping (samma som innan)
  const grouped: Record<string, any[]> = {};

  for (const s of screenings) {
    const d = new Date(s.startsAt);
    d.setHours(0, 0, 0, 0);

    const key = d.toISOString().split("T")[0];

    if (!grouped[key]) grouped[key] = [];
    grouped[key].push(s);
  }

  const days = Object.entries(grouped)
    .map(([date, screenings]) => ({
      date,
      screenings,
    }))
    .sort((a, b) => a.date.localeCompare(b.date));

  return NextResponse.json({ days });
}