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

      <section className="mx-auto grid max-w-8xl gap-3 px-4 py-2 md:grid-cols-2">
        <Image
          src="/img/kidds.png"
          alt="Kids Movie Time"
          width={700}
          height={400}
          className="object-cover"
        />

        <Image
          src="/img/champagne.png"
          alt="Champagne Movie Night"
          width={700}
          height={400}
          className="object-cover"
        />
      </section>

      <section className="mx-auto grid max-w-7xl gap-3 px-4 py-2 md:grid-cols-2">
        <Image
          src="/img/action.png"
          alt="Action Night"
          width={700}
          height={400}
          className="h-full w-full object-cover"
        />

        <div className="bg-card px-5 py-2">
          <h3 className="mb-1 text-xl font-bold">
            Prislista
          </h3>

          <div className="space-y-1">
            <div className="flex justify-between text-sm">
              <span>Vuxen</span>
              <span>200kr</span>
            </div>

            <div className="flex justify-between text-sm">
              <span>Barn</span>
              <span>100kr</span>
            </div>

            <div className="flex justify-between text-sm">
              <span>Student</span>
              <span>150kr</span>
            </div>

            <div className="flex justify-between text-sm">
              <span>Pensionär</span>
              <span>150kr</span>
            </div>
          </div>

          <p className="mt-2 text-sm text-muted text-sm">
            *Andra priser gäller under evenemang.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12">
        <div className=" bg-card p-8">
          <h2 className="mb-6 text-center text-2xl font-bold">
            På Kino
          </h2>

          <div className="grid gap-8 md:grid-cols-3 justify-items-center">
            <ul className="space-y-2 text-muted">
              <li>Restaurang</li>
              <li>Bar</li>
              <li>Events</li>
            </ul>

            <ul className="space-y-2 text-muted">
              <li>Barnvagnsbio</li>
              <li>Pensionärsbio</li>
              <li>Bubbel och chark</li>
            </ul>

            <ul className="space-y-2 text-muted">
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
