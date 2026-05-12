export default function Footer() {
  return (
    <footer className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]">
      <div className="w-full rounded-md bg-[#0E131B] text-white mt-8 mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-[2fr_1fr_1fr_1fr] gap-6 md:gap-0 px-4 py-8 md:px-8 md:pb-20">
          
          <ul className="list-none m-8 bg-transparent">
            <li className="font-bold mb-2 text-base">Öppettider</li>
            <li className="text-base font-light py-1">Måndag - Fredag:</li>
            <li className="text-base font-light py-1 mb-4">16:00-22:00</li>
            <li className="text-base font-light py-1">Lördag - Söndag:</li>
            <li className="text-base font-light py-1">12:00-23:00</li>
          </ul>

          <ul className="list-none m-8 bg-transparent">
            <li className="font-bold mb-2 text-base">Om oss</li>
            <li className="text-base font-light py-1">Om Kino Umeå</li>
            <li className="text-base font-light py-1">Vår biograf</li>
            <li className="text-base font-light py-1">Hitta hit</li>
            <li className="text-base font-light py-1">Evenemang</li>
          </ul>

          <ul className="list-none m-8 bg-transparent">
            <li className="font-bold mb-2 text-base">Kontakt</li>
            <li className="text-base font-light py-1">Kontakta oss</li>
            <li className="text-base font-light py-1">Kundservice</li>
            <li className="text-base font-light py-1">Sociala medier</li>
          </ul>

          <ul className="list-none m-8 bg-transparent">
            <li className="font-bold mb-2 text-base">Vanliga frågor</li>
            <li className="text-base font-light py-1">Biljetter</li>
            <li className="text-base font-light py-1">Presentkort</li>
            <li className="text-base font-light py-1">Tillgänglighet</li>
          </ul>

        </div>
      </div>
    </footer>
  );
}
