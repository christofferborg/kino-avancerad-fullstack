import Link from "next/link";

export default function Navbar() {
  return (
    <header className="w-full bg-black md:fixed md:top-0 md:left-0 md:z-[1000] md:px-8 md:py-4">

      {/* Desktop Navbar */}
      <div className="hidden md:flex items-center justify-start gap-8">

        <Link href="/" className="logo">
          <img
            src="/img/Exclude.png"
            alt="Kino"
            className="h-[50px]"
          />
        </Link>

        <nav className="flex items-center">
          <ul className="flex gap-8 list-none m-0 p-0">
           
            
            <li>
              <Link
                href="#"
                className="text-gray-400 hover:text-white transition"
              >
                Evenemang
              </Link>
            </li>

            <li>
              <Link
                href="/movies"
                className="text-gray-400 hover:text-white transition"
              >
               
               Filmer
              </Link>
            </li>

            <li className="relative group">
              <button className="flex items-center gap-1 text-gray-400 hover:text-white transition">
                Mer ▾
              </button>

              <ul className="hidden group-hover:block absolute top-full left-0 bg-black rounded-md min-w-[150px] p-2 z-50">



                <li className="p-2">
                  <Link href="/about" className="text-gray-400 hover:text-white">
                    Om biografen
                  </Link>
                </li>

                <li className="p-2">
                  <Link href="#" className="text-gray-400 hover:text-white">
                    Erbjudanden
                  </Link>
                </li>

                <li className="p-2">
                  <Link href="#" className="text-gray-400 hover:text-white">
                    Kontakt & oss
                  </Link>
                </li>

                <li className="p-2">
                  <Link href="#" className="text-gray-400 hover:text-white">
                    Mat & Dryck
                  </Link>
                </li>

                <li className="p-2">
                  <Link href="#" className="text-gray-400 hover:text-white">
                    Presentkort
                  </Link>
                </li>

                <li className="p-2">
                  <Link href="/signup" className="text-gray-400 hover:text-white">
                    Signup
                  </Link>
                </li>

              </ul>
            </li>

          </ul>
        </nav>

        <div className="ml-auto flex items-center gap-4">
          <Link
            href="/login"
            className="text-gray-400 hover:text-white transition"
          >
            Logga in
          </Link>

          <button className="text-gray-400 hover:text-white transition">
            Umeå ▾
          </button>
        </div>
      </div>

      {/* Mobile Navbar */}
      <nav className="fixed bottom-0 left-0 right-0 h-[100px] bg-zinc-900 flex justify-around items-center z-[3000] pb-12 md:hidden">

        <Link
          href="/"
          className="text-gray-400 hover:text-white transition"
        >
          Hem
        </Link>


        <Link
          href="/movies"
          className="text-gray-400 hover:text-white transition"
        >
          Filmer
        </Link>

        <Link
          href="#"
          className="text-gray-400 hover:text-white transition"
        >
          Events
        </Link>

        <button className="text-gray-400 hover:text-white transition">
          ☰
        </button>

      </nav>
    </header>
  );
}
