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
        <div className="tw-grid tw-grid-cols-2 tw-items-center">
          <div>
            <Image
              src={bite}
              alt=""
              className="tw-rounded-lg tw-object-fill tw-shadow-lg tw-shadow-zinc-800/30"
            />
          </div>
          <div>
            <SectionTitle>
              How can my chapter or credit union participate?
            </SectionTitle>
            <List array={participate} />
            <SectionTitle>
              What does my chapter or credit union need to put on a Bite of
              Reality event?
            </SectionTitle>
            <List array={need} />
          </div>
        </div>
      </Container>
    </Section>
  );
};
