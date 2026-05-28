import { NextResponse } from "next/server";
import { getMovies } from "@/lib/getMovies";

export async function GET() {
  try {
    const movies = await getMovies();
    return NextResponse.json(movies, { status: 200 });
  } catch {
    return NextResponse.json(
      { error: "Kunde inte hämta filmer" },
      { status: 500 }
    );
  }
}