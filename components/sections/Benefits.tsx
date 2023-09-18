import { Section } from "@/components/ui/Section";
import { Container } from "../ui/Container";

export const Benefits = () => {
  return (
    <Section sectionName="benefits">
      <Container>
        <div className="tw-relative tw-w-[50ch]">
          <div className="tw-rounded-md tw-bg-brandingPurple-400 tw-p-4 tw-text-2xl tw-font-semibold tw-text-white tw-shadow-lg tw-shadow-zinc-800/30 before:tw-absolute before:tw-z-[-10] before:tw-h-full before:tw-w-full before:tw-border-4 before:tw-border-brandingGreen-400 before:tw-content-['']">
            What are the benefits of Bite of Reality?
          </div>
        </div>
      </Container>
    </Section>
  );
};
