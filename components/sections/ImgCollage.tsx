import Image from "next/image";

import { Container } from "../ui/Container";
import { Section } from "../ui/Section";

import one from "@/public/one.png";
import two from "@/public/two.png";
import three from "@/public/three.png";
import four from "@/public/four.png";
import five from "@/public/five.png";
import six from "@/public/six.png";
import seven from "@/public/seven.png";
import eight from "@/public/eight.png";
import nine from "@/public/nine.png";

export const ImgCollage = () => {
  const images = [one, two, three, four, five, six, seven, eight, nine];

  return (
    <Section sectionName="img-collage">
      <div className="tw-flex tw-flex-wrap tw-justify-center tw-bg-brandingBlue-400 tw-py-8">
        {images.map((img, index) => (
          <Image
            key={index}
            src={img}
            alt=""
            className="tw-max-w-[400px] tw-object-cover tw-brightness-75"
          />
        ))}
      </div>
    </Section>
  );
};
