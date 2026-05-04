export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[50vh] gap-6 p-8">
      {/* Testar h1 och primary-text färg */}
      <h1 className="text-4xl md:text-6xl font-bold">Välkommen till Kino</h1>

      {/* Testar secondary-text och Open Sans (font-sans) */}
      <p className="text-secondary-text text-lg max-w-md text-center">
        Detta är ett test för att se att typsnittet Open Sans och den mörka
        bakgrunden laddas korrekt.
      </p>

      <div className="flex gap-4">
        {/* Testar orange-brand färg och hover-effekt */}
        <button className="bg-orange-brand hover:bg-orange-hover text-primary-text px-6 py-3 rounded-md transition-colors font-semibold">
          Boka biljett
        </button>

        {/* Testar blue-brand färg */}
        <button className="bg-blue-brand hover:bg-blue-hover text-primary-text px-6 py-3 rounded-md transition-colors font-semibold">
          Läs mer
        </button>
      </div>

      {/* Testar card-färg */}
      <div className="bg-card p-6 rounded-xl border border-secondary-text/20 mt-8">
        <p className="text-sm">Detta kort ska ha färgen #0E131B.</p>
      </div>
    </div>
  );
}
