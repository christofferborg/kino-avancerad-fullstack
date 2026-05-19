import KinoInfo from "@/components/homepage/KinoInfo";
import UpcomingScreening from "@/components/homepage/UpcomingScreening";
import EventBanners from "@/components/homepage/EventBanners";
import PriceSections from "@/components/homepage/PriceSections";
import Hero from "@/components/homepage/Hero";
import Carousel from "@/components/homepage/Carousel";



export default function Home() {
  return (
    <main className="min-h-screen bg-background text-main">

      <Carousel />

      <Hero />

      <UpcomingScreening />

      <EventBanners />

      <PriceSections />

      <KinoInfo />

    </main >
  );
}
