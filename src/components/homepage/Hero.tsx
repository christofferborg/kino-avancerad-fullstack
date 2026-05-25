import Button from "@/components/ui/Button";

export default function Hero() {
    return (
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
            );
}