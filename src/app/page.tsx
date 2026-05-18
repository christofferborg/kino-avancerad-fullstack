import Button from "@/components/ui/Button";
import Image from "next/image";


export default function Home() {
  return (
    <main className="min-h-screen bg-background text-main">

      <section className="mx-auto flex max-w-7xl flex-col items-center px-4 py-12 text-center">


        <div className="flex flex-wrap justify-center gap-4">
          <Button variant="secondary">
            Mer filmer
          </Button>

          <Button variant="primary">
            Boka nu
          </Button>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-8 text-center">
        <h2 className="mb-6 text-2xl font-bold">
          Kommande visningar
        </h2>
      </section>

      <section className="grid gap-6 md:mx-auto md:max-w-7xl md:px-4 py-2 md:gap-3 md:grid-cols-2">
        <Image
          src="/img/kidds.png"
          alt="Kids Movie Time"
          width={700}
          height={400}
          className="h-auto w-full object-cover"
        />

        <Image
          src="/img/champagne.png"
          alt="Champagne Movie Night"
          width={700}
          height={400}
          className="h-auto w-full object-cover"
        />
      </section>

      <section className="mt-5 grid gap-6 md:mx-auto md:mt-0 md:max-w-7xl md:px-4 md:gap-3 md:grid-cols-[1.7fr_0.7fr]">
        <Image
          src="/img/action.png"
          alt="Action Night"
          width={700}
          height={400}
          className="h-full w-full object-cover"
        />

        <div className="bg-card px-10 py-8 md:px-5 md:py-2">
          <h3 className="mb-4 text-center text-xl font-bold md:mb-1">
            Prislista
          </h3>

          <div className="space-y-1">
            <div className="mx-auto flex max-w-[220px] justify-between text-sm md:max-w-none">
              <span>Vuxen</span>
              <span>200kr</span>
            </div>

            <div className="mx-auto flex max-w-[220px] justify-between text-sm md:max-w-none">
              <span>Barn</span>
              <span>100kr</span>
            </div>

            <div className="mx-auto flex max-w-[220px] justify-between text-sm md:max-w-none">
              <span>Student</span>
              <span>150kr</span>
            </div>

            <div className="mx-auto flex max-w-[220px] justify-between text-sm md:max-w-none">
              <span>Pensionär</span>
              <span>150kr</span>
            </div>
          </div>

          <p className="mt-6 text-center text-xs text-muted md:mt-2 md:text-left">
            *Andra priser gäller under evenemang.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl md:px-4 py-6 ">
        <div className=" bg-card p-8 rounded-sm md:py-4">
          <h2 className="mb-6 text-center text-2xl md:py-4 font-bold">
            På Kino
          </h2>

          {/* MOBILE */}
          <div className="md:hidden">
            <p className="mb-6 text-center text-main">
              Bubbel & chark
            </p>

            <div className="grid grid-cols-2 gap-y-3 text-main justify-items-center">
              <div className="space-y-2">
                <p>Restaurang</p>
                <p>Bar</p>
                <p>Events</p>
                <p>Barnvagnsbio</p>
              </div>

              <div className="space-y-2">
                <p>Klassiker</p>
                <p>Barnbio</p>
                <p>Kiosk</p>
                <p>Pensionärsbio</p>
              </div>
            </div>
          </div>

          {/* DESKTOP */}
          <div className="hidden justify-items-center md:pb-12 gap-8 md:grid md:grid-cols-3">
            <ul className="space-y-2 text-main">
              <li>Restaurang</li>
              <li>Bar</li>
              <li>Events</li>
            </ul>

            <ul className="space-y-2 text-main">
              <li>Barnvagnsbio</li>
              <li>Pensionärsbio</li>
              <li>Bubbel och chark</li>
            </ul>

            <ul className="space-y-2 text-main">
              <li>Klassiker</li>
              <li>Barnbio</li>
              <li>Kiosk</li>
            </ul>
          </div>
        </div>
      </section>

    </main >
  );
}
