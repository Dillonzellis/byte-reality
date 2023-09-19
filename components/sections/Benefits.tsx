import { Section } from "@/components/ui/Section";
import { Container } from "../ui/Container";
import { benefits } from "@/lib/data/benefits";
import { List } from "../ui/List";

export const Benefits = () => {
  return (
    <Section sectionName="benefits">
      <Container>
        <div className="tw-relative tw-mb-12 tw-w-[25ch] tw-rounded-md tw-bg-brandingBlue-400 tw-px-4 tw-py-6 tw-pr-16 tw-text-4xl tw-font-medium tw-text-white tw-shadow-lg tw-shadow-zinc-800/30 before:tw-absolute before:tw-top-[10%] before:tw-z-[-10] before:tw-h-full before:tw-w-full before:tw-border-4 before:tw-border-brandingGreen-400 before:tw-content-['']">
          What are the{" "}
          <span className="tw-font-bold tw-underline tw-decoration-brandingGreen-400">
            Benefits
          </span>{" "}
          of Bite of Reality?
        </div>
        <div className="tw-grid tw-grid-cols-2 tw-gap-8">
          <div>
            <List array={benefits} />
          </div>
          <div
            className="tw-relative tw-w-full"
            style={{ paddingBottom: "56.25%" }}
          >
            <iframe
              className="tw-absolute tw-left-0 tw-top-0 tw-h-full tw-w-full tw-rounded-lg tw-shadow tw-shadow-zinc-800/30"
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
