import { prisma } from "@/db";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const { name, rating, comment, movieId } = data;
    if (!name || !rating || !comment || !movieId) {
      return NextResponse.json(
        { fel: "Alla fält måste vara ifyllda." },
        { status: 400 },
      );
    }
    await prisma.comment.create({
      data: {
        name: name,
        rating: Number(rating),
        comment: comment,
        movieId: movieId,
      },
    });
    return NextResponse.json(
      { meddelande: "Recension sparad!" },
      { status: 200 },
      
    );
   
  } catch {
    return NextResponse.json(
      { fel: "Kunde inte spara i databasen" },
      { status: 500 },
    );
  }
}
