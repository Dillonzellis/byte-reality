import { Section } from "@/components/ui/Section";
import { Container } from "../ui/Container";
import { benefits } from "@/lib/data/benefits";
import { List } from "@/components/ui/List";
import { SectionTitle } from "../ui/SectionTitle";

export const Benefits = () => {
  return (
    <Section sectionName="benefits">
      <Container>
        <SectionTitle>
          What are the{" "}
          <span className="tw-font-bold tw-underline tw-decoration-brandingGreen-400">
            Benefits
          </span>{" "}
          of Bite of Reality?
        </SectionTitle>
        <div className="tw-grid tw-grid-cols-2 tw-gap-8">
          <div>
            <List array={benefits} />
          </div>
          <div
            className="tw-relative tw-w-full"
            style={{ paddingBottom: "56.25%" }}
          >
            <iframe
              className="tw-absolute tw-left-0 tw-top-0 tw-h-full tw-w-full tw-rounded-lg tw-shadow-lg tw-shadow-zinc-800/30"
              src="https://www.youtube.com/embed/ppHQ9k4xAkU?si=hBWWGJumjQebFYq7"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </Container>
    </Section>
  );
};
