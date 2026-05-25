 export default function KinoInfo() {
  return (
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
        );
}