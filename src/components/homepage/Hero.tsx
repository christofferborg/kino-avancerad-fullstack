import Button from "@/components/ui/Button";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="mx-auto flex max-w-7xl flex-col items-center px-4 py-12 text-center">
      <div className="flex flex-wrap justify-center gap-4">
        
        <Link href="/movies">
          <Button variant="secondary">
            Mer filmer
          </Button>
        </Link>

        <Button variant="primary">
          Boka nu
        </Button>
      </div>
    </section >
  );
}