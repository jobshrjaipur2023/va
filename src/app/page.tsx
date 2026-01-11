import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { DestinationsMarquee } from "@/components/DestinationsMarquee";
import { Destinations } from "@/components/Destinations";
import { TestimonialsMarquee } from "@/components/TestimonialsMarquee";
import { FAQSection } from "@/components/FAQSection";
import { ContactSection } from "@/components/ContactSection";

export default function Home() {
  return (
    <>
      <Hero />
      <DestinationsMarquee />
      <Features />
      <Destinations />
      <TestimonialsMarquee />
      <FAQSection />
      <ContactSection />
    </>
  );
}
