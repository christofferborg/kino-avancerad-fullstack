"use client";
import Image from "next/image";

import { useEffect, useState } from "react";

export default function UpcomingScreening() {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch("/api/screenings");
      const json = await res.json();
      setData(json);
    }

    fetchData();
  }, []);

  if (!data) {
    return (
      <div className="grid gap-4 md:grid-cols-2">
        <div className="h-24 animate-pulse bg-white/5 rounded-xl" />
        <div className="h-24 animate-pulse bg-white/5 rounded-xl" />
      </div>
    );
  }

  return (
    <section className="mx-auto max-w-7xl px-4 py-8 text-center">
      <h2 className="mb-6 text-2xl font-bold">
        Kommande visningar
      </h2>
      <div className="grid gap-6 md:grid-cols-2">
        {data.days.map((day: any) => (
          <div
            key={day.date}
            className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#11151d] p-5 shadow-2xl"
          >
            {/* Gradient bar */}
            <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-blue-500 to-orange-400" />

            <h3 className="mb-5 text-center text-lg font-bold capitalize">
              {new Date(day.date).toLocaleDateString("sv-SE", {
                weekday: "long",
                day: "numeric",
                month: "long",
              })}
            </h3>

            <div className="space-y-4">
              {day.screenings.map((screening: any) => (
                <div
                  key={screening.id}
                  className="flex items-center gap-4 border-t border-white/10 pt-4 first:border-none first:pt-0"
                >
                  {/* Poster placeholder */}
                  <div className="relative h-[84px] w-[56px] overflow-hidden rounded-xl border border-white/10">
                    <Image
                      src={screening.movie.poster}
                      alt={screening.movie?.title ?? "Film poster"}
                      fill
                      sizes="56px"
                      className="object-cover"
                    />
                  </div>

                  {/* Info */}
                  <div className="flex flex-col">
                    <p className="text-lg font-semibold">
                      Filmvisning
                    </p>

                    <p className="text-sm text-gray-300">
                      {new Date(
                        screening.startsAt
                      ).toLocaleTimeString("sv-SE", {
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </p>

                    <div className="mt-1 inline-flex w-fit rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-gray-400">
                      {screening.room}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>

  );
}