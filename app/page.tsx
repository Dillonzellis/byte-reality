import { Resources } from "@/components/sections/Resources";
import { Benefits } from "@/components/sections/Benefits";
import { Chapter } from "@/components/sections/Chapter";
import { ImgCollage } from "@/components/sections/ImgCollage";
import { InfoGraphic } from "@/components/sections/InfoGraphic";
import { VideoSection } from "@/components/sections/VideoSection";
import { Hero } from "@/components/sections/hero/Hero";
import { Intro } from "@/components/sections/intro/Intro";

export default function Home() {
  return (
    <main>
      <Hero />
      <Intro />
      <InfoGraphic />
      <VideoSection />
      <Benefits />
      <ImgCollage />
      <Chapter />
      <Resources />
    </main>
  );
}
