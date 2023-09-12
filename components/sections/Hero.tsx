import Image from "next/image";
import hero from "@/public/hero.jpg";

export const Hero = () => {
  return (
    <section>
      <div className="tw-relative">
        <Image
          src={hero}
          alt="hero"
          className="tw-max-h-[500px] tw-object-cover tw-brightness-75"
        />
        <div className="tw-absolute tw-top-1/2 tw-left-1/2 tw--translate-x-1/2 tw-text-3xl tw-text-white">
          Hero Text
        </div>
      </div>
    </section>
  );
};
