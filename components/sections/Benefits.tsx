import { Section } from "@/components/ui/Section";
import { Container } from "../ui/Container";
import { benefits } from "@/lib/data/benefits";
import { Button } from "../ui/Button";

export const Benefits = () => {
  return (
    <Section sectionName="benefits">
      <Container>
        <div className="">
          <div className="tw-relative tw-w-[50ch] tw-rounded-md tw-bg-brandingPurple-400 tw-p-4 tw-text-2xl tw-font-semibold tw-text-white tw-shadow-lg tw-shadow-zinc-800/30 before:tw-absolute before:tw-z-[-10] before:tw-h-full before:tw-w-full before:tw-border-4 before:tw-border-brandingGreen-400 before:tw-content-['']">
            What are the benefits of Bite of Reality?
          </div>
          <ul className="tw-list-inside tw-list-disc">
            {benefits.map((li) => (
              <li>{li}</li>
            ))}
          </ul>
        </div>
        <div className="tw-space-x-4">
          <Button>event resources</Button>
          <Button>request event code</Button>
        </div>
      </Container>
    </Section>
  );
};
