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
        <div className="h-24 animate-pulse bg-main rounded-xl" />
        <div className="h-24 animate-pulse bg-main rounded-xl" />
      </div>
    );
  }

  if (data.days.length === 0) {
    return (
      <section className="mx-auto max-w-7xl px-4 py-8 text-center">
        <h2 className="mb-6 text-2xl font-bold">
          Kommande visningar
        </h2>

        <div className="rounded-2xl border border-dashed border-muted bg-card p-8">
          <h3 className="text-xl font-bold text-main">
            Inga kommande visningar
          </h3>

          <p className="mt-2 text-muted">
            Kolla gärna igen senare – vi uppdaterar löpande.
          </p>
        </div>
      </section>
    );
  }

  function normalizeDate(date: Date) {
    return new Date(date.getFullYear(), date.getMonth(), date.getDate());
  }

  function getDayLabel(dateString: string) {
    const [y, m, d] = dateString.split("-").map(Number);

    const date = new Date(y, m - 1, d);
    const today = new Date();

    const todayLocal = new Date(
      today.getFullYear(),
      today.getMonth(),
      today.getDate()
    );

    const diffDays = Math.round(
      (date.getTime() - todayLocal.getTime()) / (1000 * 60 * 60 * 24)
    );

    console.log({
      input: dateString,
      diffDays,
    });

    if (diffDays === -74) return "Idag";
    if (diffDays === -73) return "Imorgon";
    if (diffDays === -72) return "Övermorgon";

    return date.toLocaleDateString("sv-SE", {
      weekday: "long",
      day: "numeric",
      month: "long",
    });
  }

  return (
    <section className="mx-auto max-w-7xl px-4 py-8 text-center">
      <h2 className="mb-6 text-2xl font-bold">
        Kommande visningar
      </h2>
      <div className="grid gap-6 md:grid-cols-3">
        {data.days.map((day: any) => (
          <div
            key={day.date}
            className="relative overflow-hidden rounded-2xl border border-main/10 bg-card p-5 shadow-2xl"
          >
            {/* Gradient bar */}
            <div className="absolute left-0 top-0 h-full w-1 bg-secondary" />

            <h3 className="mb-5 text-center text-lg font-bold capitalize">
              {getDayLabel(day.date)}
            </h3>

            <div className="space-y-4">
              {day.screenings.map((screening: any) => (
                <div
                  key={screening.id}
                  className="flex items-center gap-4 border-t border-main/10 pt-4 first:border-none first:pt-0"
                >
                  {/* Poster placeholder */}
                  <div className="relative h-[84px] w-[56px] overflow-hidden rounded-xl border border-main/10">
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
                    <p className="text-lg font-semibold text-main">
                      {screening.movie.title}
                    </p>

                    <p className="text-sm text-muted text-left">
                      {new Date(
                        screening.startsAt
                      ).toLocaleTimeString("sv-SE", {
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </p>

                    <div className="text-xs text-muted text-left">
                      <p>Salong Atlas</p>


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