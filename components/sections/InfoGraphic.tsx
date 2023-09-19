import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";

import { cardsContent } from "@/lib/data/cards";

type cardsContentType = (typeof cardsContent)[number];

type CardProps = cardsContentType;

const Card = ({ icon, total, content }: CardProps) => {
  return (
    <div className="tw-group tw-flex tw-flex-col tw-items-center tw-justify-center tw-gap-6 tw-rounded-lg tw-bg-brandingBlue-400 tw-px-4 tw-py-12 tw-shadow-lg tw-shadow-zinc-800/30 tw-transition hover:tw-translate-y-[-10px] hover:tw-bg-brandingGreen-400">
      <div className="tw-flex tw-h-32 tw-w-32 tw-items-center tw-justify-center tw-rounded-full tw-border-4 tw-border-brandingGreen-400 tw-bg-white group-hover:tw-border-brandingPurple-400">
        <Image
          src={icon}
          alt=""
          className="tw-h-20 tw-w-20 tw-rounded-full tw-object-contain"
        />
      </div>
      <div className="tw-text-center tw-text-white group-hover:tw-text-zinc-800">
        <div className="tw-pb-4 tw-text-6xl tw-font-semibold tw-underline tw-decoration-brandingGreen-400 group-hover:tw-decoration-brandingPurple-400">
          {total}
        </div>
        <div className="tw-text-xl tw-capitalize">{content}</div>
      </div>
    </div>
  );
};

export const InfoGraphic = () => {
  return (
    <Section sectionName="infographic">
      <Container>
        <div className="tw-grid tw-gap-8 md:tw-grid-cols-3">
          {cardsContent.map((card, idx) => (
            <Card key={idx} {...card} />
          ))}
        </div>
      </Container>
    </Section>
  );
};
