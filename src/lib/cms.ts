const BASE = "https://plankton-app-xhkom.ondigitalocean.app/api/screenings";

export async function getScreenings() {
  const res = await fetch(`${BASE}/screenings?populate=movie`);

  if (!res.ok) {
    throw new Error("CMS fetch failed");
  }

  return res.json();
}