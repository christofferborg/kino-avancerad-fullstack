import { NextResponse } from "next/server";
import { getUpcomingStartpageScreenings } from "@/lib/screenings";

export async function GET() {
  try {
    const res = await fetch(
      "https://plankton-app-xhkom.ondigitalocean.app/api/screenings?populate=movie"
    );

    const cmsJson = await res.json();

    const result = getUpcomingStartpageScreenings(cmsJson);

    return NextResponse.json(result);
  } catch (error) {
    console.error("SCREENINGS ERROR:", error);

    return NextResponse.json(
      { error: "Could not load screenings" },
      { status: 500 }
    );
  }
}