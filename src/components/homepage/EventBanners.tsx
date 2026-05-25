import Image from "next/image";

export default function EventBanners() {
    return (
        
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

    );
}