function dayKey(date: Date) {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, "0");
  const d = String(date.getDate()).padStart(2, "0");
  return `${y}-${m}-${d}`;
}

export function getUpcomingStartpageScreenings(
  cmsJson: any,
  now = new Date(),
  days = 5,
  limit = 10
) {
  const todayStart = new Date(now);
  todayStart.setHours(0, 0, 0, 0);

  const rangeEnd = new Date(todayStart);
  rangeEnd.setDate(rangeEnd.getDate() + days);

  const filteredSorted = (cmsJson.data ?? [])
    .map((item: any) => {
      const a = item.attributes ?? {};
      const movieData = a.movie?.data;
      const movieAttributes = movieData?.attributes ?? {};

      return {
        id: item.id,
        startsAt: a.start_time,
        startsAtDate: a.start_time ? new Date(a.start_time) : null,
        room: a.room ?? null,
        movie: movieData
          ? {
              id: movieData.id,
              title: movieAttributes.title ?? "",
              poster: movieAttributes.image?.url ?? "",
            }
          : null,
      };
    })
    .filter((s: any) => s.startsAtDate)
    .filter((s: any) => s.startsAtDate < rangeEnd)
    .sort((a: any, b: any) => a.startsAtDate - b.startsAtDate);

  const grouped: Record<string, any[]> = filteredSorted.reduce(
    (acc: any, screening: any) => {
      const day = dayKey(screening.startsAtDate);
      (acc[day] ??= []).push(screening);
      return acc;
    },
    {}
  );

  const sortedDates = Object.keys(grouped).sort();

  const resultDays = [];
  let total = 0;

  for (const date of sortedDates) {
    const items = grouped[date];

    if (total + items.length > limit) break;

    resultDays.push({
      date,
      screenings: items,
    });

    total += items.length;
  }

  return { days: resultDays, total };
}