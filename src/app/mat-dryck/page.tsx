const menuSections = [
  {
    title: "🍿 Bio snacks",
    items: [
      {
        name: "Popcorn - Liten 59 kr",
        info: "Nypoppade biopopcorn med lätt sälta. Ett perfekt mindre snacks till filmen.",
      },
      {
        name: "Popcorn - Mellan 69 kr",
        info: "Vår mest populära storlek med klassisk biosmak och varm smörkänsla.",
      },
      {
        name: "Popcorn - Stor 79 kr",
        info: "Stor portion nygjorda popcorn för den ultimata biokvällen.",
      },
      {
        name: "Nachotallrik - 129 kr",
        info: "Krispiga nachos serveras med smält ost, jalapeños och dippsås. Perfekt att dela under filmen.",
      },
      {
        name: "Läsk & godis - från 35 kr",
        info: "Välj mellan kalla drycker, choklad och klassiska biosnacks.",
      },
    ],
  },
  {
    title: "🧀 Charkbrickor",
    items: [
      {
        name: "Plockbricka chark & ost - 179 kr",
        info: "En smakrik bricka med charkuterier, ostar och små tillbehör.",
      },
      {
        name: "Vegetarisk ostbricka - 179 kr",
        info: "Utvalda ostar med tillbehör för dig som vill ha ett vegetariskt alternativ.",
      },
    ],
  },
  {
    title: "🍾 Bubbel",
    items: [
      {
        name: "Cava - Glas 119 kr",
        info: "Friskt och lätt bubbel som passar perfekt till snacks och plockmat.",
      },
      {
        name: "Prosecco - Flaska 399 kr",
        info: "Ett mjukt och fruktigt bubbel för en lite lyxigare filmupplevelse.",
      },
      {
        name: "Mousserande alkoholfritt - 89 kr",
        info: "Alkoholfritt bubbel med frisk och elegant smakprofil.",
      },
      {
        name: "Champagne - Glas 169 kr",
        info: "Ett exklusivt alternativ för den perfekta biokvällen.",
      },
    ],
  },
  {
    title: "🍺 Öl",
    items: [
      {
        name: "Lager - 89 kr",
        info: "En kall och lätt lager med frisk smak som passar perfekt till popcorn och snacks.",
      },
      {
        name: "IPA - 99 kr",
        info: "Humlearomatisk IPA med fylligare smak och citruskaraktär.",
      },
      {
        name: "Pale Ale - 95 kr",
        info: "Mjuk och balanserad öl med lätt maltighet och fruktiga toner.",
      },
      {
        name: "Alkoholfri öl - 69 kr",
        info: "Ett alkoholfritt alternativ med frisk smak och klassisk ölkänsla.",
      },
    ],
  },
  {
    title: "🍸 Cocktails & vin",
    items: [
      {
        name: "Aperol Spritz - 149 kr",
        info: "Frisk cocktail med apelsintoner och bubblig karaktär. Serveras väl kyld.",
      },
      {
        name: "Espresso Martini - 159 kr",
        info: "Krämig kaffecocktail med fyllig smak och elegant finish.",
      },
      {
        name: "Rött vin - Glas 129 kr",
        info: "Fylligt vin som passar utmärkt till chark och ost.",
      },
      {
        name: "Vitt vin - Glas 129 kr",
        info: "Friskt och lätt vin som passar perfekt till lättare snacks.",
      },
      {
        name: "Alkoholfri cocktail - 99 kr",
        info: "Ett fräscht alkoholfritt alternativ med vuxen smakprofil.",
      },
    ],
  },
];

export default function MatDryckPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-background via-[#0b1017] to-background px-5 py-16 text-main sm:px-6 sm:py-20">
      <section className="mx-auto max-w-xl">
        <h1 className="mb-6 text-center text-2xl font-semibold sm:text-3xl">
          Mat & Dryck
        </h1>

        <p className="mx-auto mb-6 max-w-md text-center text-sm leading-7 text-muted">
          Välkommen att förgylla kvällen och njuta av något gott innan eller
          under filmen. Här hittar du snacks, chark, bubbel, cocktails och vin.
        </p>

        <p className="mb-14 text-center text-xs uppercase tracking-[0.3em] text-primary">
          Serveras i vår premium lounge
        </p>

        <div className="space-y-10">
          {menuSections.map((section) => (
            <MenuSection
              key={section.title}
              title={section.title}
              items={section.items}
            />
          ))}
        </div>

        <div className="relative mt-16 overflow-hidden rounded-xl border border-white/10 shadow-[0_0_40px_rgba(0,0,0,0.6)]">
          <img
            src="/img/mat-dryck.png"
            alt="Mat och dryck på bio"
            className="w-full transition duration-500 hover:scale-[1.01]"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
        </div>

        <button className="mt-8 w-full rounded-xl bg-primary px-6 py-4 text-sm font-semibold text-white shadow-lg shadow-primary/20 transition duration-300 hover:scale-[1.01] hover:bg-primary-hover">
          Boka snacks till filmen
        </button>
      </section>
    </main>
  );
}

type MenuItem = {
  name: string;
  info: string;
};

function MenuSection({
  title,
  items,
}: {
  title: string;
  items: MenuItem[];
}) {
  return (
    <section className="grid gap-4 sm:grid-cols-[150px_1fr]">
      <h2 className="text-sm font-semibold text-primary">{title}</h2>

      <div className="space-y-2">
        {items.map((item) => (
          <details
            key={item.name}
            className="group overflow-hidden border-b border-white/15 py-3 transition hover:border-primary/40"
          >
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-[13px] transition duration-200 hover:text-primary-hover sm:text-sm">
              <div className="flex items-center gap-2">
                <span>{item.name}</span>

                {(item.name.includes("Nachotallrik") ||
                  item.name.includes("Aperol") ||
                  item.name.includes("Popcorn - Stor")) && (
                  <span className="rounded-full bg-secondary px-2 py-1 text-[10px] font-semibold text-white">
                    Populär
                  </span>
                )}
              </div>

              <span className="text-muted transition duration-300 group-open:rotate-180">
                ⌄
              </span>
            </summary>

            <div className="grid grid-rows-[0fr] transition-all duration-500 ease-in-out group-open:grid-rows-[1fr]">
              <p className="overflow-hidden pt-3 text-xs leading-6 text-muted">
                {item.info}
              </p>
            </div>
          </details>
        ))}
      </div>
    </section>
  );
}