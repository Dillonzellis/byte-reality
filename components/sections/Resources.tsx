import { Container } from "../ui/Container";
import { Section } from "../ui/Section";

export const Resources = () => {
  return (
    <Section sectionName="resources" className="tw-pb-0">
      <div className="tw-bg-brandingBlue-400 tw-py-8">
        <Container className="tw-rounded-lg tw-bg-accentBlue-400 tw-py-8 tw-text-white tw-shadow-lg tw-shadow-zinc-800/30">
          <div>Event Resources</div>
        </Container>
      </div>
    </Section>
  );
};
