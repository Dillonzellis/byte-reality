import { Section } from "@/components/ui/Section";
import { Container } from "../ui/Container";
import { benefits } from "@/lib/data/benefits";
import { List } from "@/components/ui/List";
import { SectionTitle } from "../ui/SectionTitle";

export const Benefits = () => {
  return (
    <Section sectionName="benefits">
      <Container>
        <SectionTitle className="md:tw-mb-8">
          What are the{" "}
          <span className="tw-font-bold tw-underline tw-decoration-brandingGreen-400">
            Benefits
          </span>{" "}
          of Bite of Reality?
        </SectionTitle>
        <div className="tw-grid tw-items-center tw-gap-8 md:tw-grid-cols-2">
          <div>
            <List array={benefits} />
          </div>
          <img
            className="tw-rounded-lg tw-shadow-lg tw-shadow-zinc-800/30"
            src="https://lscu.coop/foundation/bite-of-reality/imgs/benefits-cta.jpg.jpg"
          />
        </div>
      </Container>
    </Section>
  );
};
