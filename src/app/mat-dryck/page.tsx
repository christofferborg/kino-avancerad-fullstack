import Image from "next/image";

const menuSections = [
  {
    title: "Biosnacks",
    items: [
      {
        name: "Popcorn - Liten",
        price: "59 kr",
        info: "Nypoppade popcorn med lätt sälta. Perfekt för den mindre hungern.",
      },
      {
        name: "Popcorn - Mellan",
        price: "69 kr",
        info: "Vår mest populära storlek med klassisk biosmak och generös portion.",
      },
      {
        name: "Popcorn - Stor",
        price: "79 kr",
        info: "En stor portion nygjorda popcorn för den ultimata bioupplevelsen.",
      },
      {
        name: "Nachotallrik",
        price: "129 kr",
        info: "Krispiga nachos serverade med ostsås, salsa och jalapeños.",
      },
      {
        name: "Läsk & godis",
        price: "Från 35 kr",
        info: "Klassiska biogodisfavoriter och kalla drycker i flera storlekar.",
      },
    ],
  },
  {
    title: "Charkbrickor",
    items: [
      {
        name: "Plockbricka chark & ostbricka",
        price: "179 kr",
        info: "En smakrik bricka med charkuterier, utvalda ostar och små tillbehör.",
      },
      {
        name: "Vegetarisk ostbricka",
        price: "179 kr",
        info: "Ett vegetariskt alternativ med ostar, kex och passande tillbehör.",
      },
    ],
  },
  {
    title: "Bubbel",
    items: [
      {
        name: "Cava - Glas",
        price: "119 kr",
        info: "Friskt och lätt bubbel som passar bra till både snacks och chark.",
      },
      {
        name: "Prosecco - Flaska",
        price: "399 kr",
        info: "Ett mjukt och fruktigt bubbel för en lite lyxigare filmkväll.",
      },
      {
        name: "Mousserande alkoholfritt",
        price: "89 kr",
        info: "Ett alkoholfritt alternativ med frisk smak och festlig känsla.",
      },
      {
        name: "Champagne - Glas",
        price: "169 kr",
        info: "Ett exklusivare glas bubbel för en extra speciell biokväll.",
      },
    ],
  },
  {
    title: "Öl",
    items: [
      {
        name: "Lager",
        price: "89 kr",
        info: "Ljus och frisk lager som passar perfekt till popcorn och snacks.",
      },
      {
        name: "IPA",
        price: "99 kr",
        info: "Humlearomatisk IPA med fruktiga toner och tydligare beska.",
      },
      {
        name: "Pale Ale",
        price: "95 kr",
        info: "Mjuk och balanserad öl med lätt maltighet och fruktig karaktär.",
      },
      {
        name: "Alkoholfri öl",
        price: "69 kr",
        info: "Frisk ölkänsla utan alkohol. Ett bra alternativ till snacks och mat.",
      },
    ],
  },
  {
    title: "Cocktails & vin",
    items: [
      {
        name: "Aperol Spritz",
        price: "149 kr",
        info: "Frisk cocktail med apelsintoner och bubblig karaktär.",
      },
      {
        name: "Espresso Martini",
        price: "159 kr",
        info: "Krämig kaffecocktail med fyllig smak och elegant finish.",
      },
      {
        name: "Rött vin - Glas",
        price: "129 kr",
        info: "Fylligt vin som passar utmärkt till chark och ost.",
      },
      {
        name: "Vitt vin - Glas",
        price: "129 kr",
        info: "Friskt och lätt vin som passar bra till snacks och lättare tilltugg.",
      },
      {
        name: "Alkoholfri cocktail",
        price: "99 kr",
        info: "Ett fräscht alkoholfritt alternativ med vuxen smakprofil.",
      },
    ],
  },
];

export default function MatDryckPage() {
  return (
    <main className="min-h-screen bg-background px-3 py-16 text-main sm:px-6 sm:py-24">
      <section className="mx-auto w-full max-w-[950px]">
        <div className="mb-16 text-center sm:mb-20">
          <h1 className="mb-6 text-[28px] font-semibold">
            Mat & Dryck
          </h1>

          <p className="mx-auto max-w-[650px] text-[16px] leading-7 text-muted">
            Välj mellan vanliga biosnacks och något gott att äta innan
            föreställningen.
          </p>

          <p className="mx-auto mt-2 max-w-[650px] text-[16px] leading-7 text-muted">
            Charkbrickor, bubbel, öl, cocktails och alkoholfritt finns också.
          </p>
        </div>

        <div className="space-y-10">
          {menuSections.map((section) => (
            <MenuSection
              key={section.title}
              title={section.title}
              items={section.items}
            />
          ))}
        </div>

        <div className="mt-10 -mx-3 sm:mx-0">
          <Image
            src="/img/mat-dryck.png"
            alt="Mat och dryck på bio"
            width={850}
            height={560}
            style={{
              width: "100%",
              height: "auto",
            }}
            priority
          />
        </div>
      </section>
    </main>
  );
}

type MenuItem = {
  name: string;
  price: string;
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
    <section className="grid gap-3 sm:grid-cols-[160px_1fr]">
      <h2 className="text-[16px] font-semibold text-main">
        {title}
      </h2>

      <div className="space-y-2">
        {items.map((item) => (
          <details key={item.name} className="group">
            <summary className="flex cursor-pointer list-none items-center justify-between px-2 py-2 text-[16px] text-main transition hover:bg-card">
              <span>{item.name}</span>

              <span className="text-muted transition group-open:rotate-180">
                ⌄
              </span>
            </summary>

            <div className="px-2 pb-2 pt-1">
              <p className="text-[16px] leading-7 text-muted">{item.info}</p>

              <p className="mt-2 text-[16px] font-semibold text-main">
                {item.price}
              </p>
            </div>
          </details>
        ))}
      </div>
    </section>
  );
}