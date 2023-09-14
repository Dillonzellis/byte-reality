import Image from "next/image";
import hero from "@/public/hero.jpg";
import { HeroContent } from "./HeroContent";

export const Hero = () => {
  return (
    <section>
      <div className="tw-relative">
        <Image
          src={hero}
          alt="hero"
          className="tw-max-h-[500px] tw-object-cover tw-brightness-50"
        />
        <HeroContent />
      </div>
    </section>
  );
};
