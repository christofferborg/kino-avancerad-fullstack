"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type Screening = {
  id: number;
  startsAt: string;
  room: string;
  movie: {
    title: string;
    poster: string;
  };
};

type Day = {
  screenings: Screening[];
};

type ApiResponse = {
  days: Day[];
};

const labels = ["Idag", "Imorgon", "I övermorgon"];

export default function UpcomingScreenings() {
  const [data, setData] = useState<ApiResponse | null>(null);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch("/api/screenings");
      if (!res.ok) return;

      const json = (await res.json()) as ApiResponse;

      // sortera screenings per dag
      json.days.forEach((day) => {
        day.screenings.sort(
          (a, b) =>
            new Date(a.startsAt).getTime() -
            new Date(b.startsAt).getTime()
        );
      });

      setData(json);
    }

    fetchData();
  }, []);

  if (!data) {
    return (
      <div className="grid gap-4 md:grid-cols-3">
        <div className="h-24 animate-pulse bg-white/5 rounded-xl" />
        <div className="h-24 animate-pulse bg-white/5 rounded-xl" />
        <div className="h-24 animate-pulse bg-white/5 rounded-xl" />
      </div>
    );
  }

  return (
    <section className="mx-auto max-w-7xl px-4 py-8 text-center">
      <h2 className="mb-6 text-2xl font-bold">Kommande visningar</h2>

      <div className="grid gap-6 md:grid-cols-3">
        {labels.map((label, index) => {
          const day = data.days[index];

          return (
            <div
              key={label}
              className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#11151d] p-5 shadow-2xl"
            >
              <div className="absolute left-0 top-0 h-full w-1 bg-secondary" />

              <h3 className="mb-5 text-center text-lg font-bold">
                {label}
              </h3>

              {/* om ingen data finns */}
              {!day || day.screenings.length === 0 ? (
                <p className="text-sm text-muted">
                  Inga visningar
                </p>
              ) : (
                <div className="space-y-4">
                  {day.screenings.map((s) => (
                    <div
                      key={s.id}
                      className="flex items-center gap-4 border-t border-white/10 pt-4 first:border-none first:pt-0"
                    >
                      <div className="relative h-[84px] w-[56px] overflow-hidden rounded-xl border border-white/10">
                        <Image
                          src={s.movie.poster}
                          alt={s.movie.title}
                          fill
                          sizes="56px"
                          className="object-cover"
                        />
                      </div>

                      <div className="flex flex-col text-left">
                        <p className="text-lg font-semibold text-main">
                          {s.movie.title}
                        </p>

                        <p className="text-sm text-muted">
                          {new Date(s.startsAt).toLocaleTimeString(
                            "sv-SE",
                            {
                              hour: "2-digit",
                              minute: "2-digit",
                            }
                          )}
                        </p>

                        <div className="text-xs text-muted">
                          {s.room}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}