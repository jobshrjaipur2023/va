import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { DestinationsMarquee } from "@/components/DestinationsMarquee";
import { Destinations } from "@/components/Destinations";

export default function Home() {
  return (
    <>
      <Hero />
      <DestinationsMarquee />
      <Features />
      <Destinations />
    </>
  );
}
