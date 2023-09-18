import { Benefits } from "@/components/sections/Benefits";
import { VideoSection } from "@/components/sections/VideoSection";
import { Hero } from "@/components/sections/hero/Hero";
import { Intro } from "@/components/sections/intro/Intro";

export default function Home() {
  return (
    <main>
      <Hero />
      <Intro />
      <VideoSection />
      <Benefits />
    </main>
  );
}
