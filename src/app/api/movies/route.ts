import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {

  const page =
    req.nextUrl.searchParams.get("page") || "1";

  const res = await fetch(
    `https://www.omdbapi.com/?s=batman&page=${page}&apikey=${process.env.OMDB_API_KEY}`
  );

  const data = await res.json();

  return NextResponse.json(data.Search);
}