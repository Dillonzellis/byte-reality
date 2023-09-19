import Image from "next/image";

import { Container } from "@/components/ui/Container";
import { List } from "@/components/ui/List";
import { Section } from "@/components/ui/Section";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { participate, need } from "@/lib/data/benefits";
import bite from "@/public/bite-reality.jpg";

export const Chapter = () => {
  return (
    <Section sectionName="chapter">
      <Container>
        <div className="tw-grid tw-items-center lg:tw-grid-cols-2 lg:tw-gap-4">
          <div>
            <Image
              src={bite}
              alt=""
              className="tw-mx-auto tw-mb-8 tw-rounded-lg tw-object-fill tw-shadow-lg tw-shadow-zinc-800/30 lg:tw-m-[unset]"
            />
          </div>
          <div>
            <div className="tw-pb-8">
              <SectionTitle className="tw-mb-6 tw-w-full tw-bg-brandingPurple-400 tw-text-xl">
                How can my chapter or credit union{" "}
                <span className="tw-font-bold tw-underline tw-decoration-brandingGreen-400">
                  participate?
                </span>
              </SectionTitle>
              <List array={participate} />
            </div>
            <div className="tw-pb-8">
              <SectionTitle className="tw-mb-6 tw-w-full tw-bg-brandingPurple-400 tw-text-xl">
                What does my chapter or credit union{" "}
                <span className="tw-font-bold tw-underline tw-decoration-brandingGreen-400">
                  need
                </span>{" "}
                to put on a Bite of Reality event?
              </SectionTitle>
              <List array={need} />
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};
