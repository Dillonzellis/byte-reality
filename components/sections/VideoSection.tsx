import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";

export const VideoSection = () => {
  return (
    <Section sectionName="videos">
      <Container>
        <div className="tw-grid tw-grid-cols-2 tw-gap-4">
          <div
            className="tw-relative tw-w-full"
            style={{ paddingBottom: "56.25%" }}
          >
            <iframe
              className="tw-absolute tw-left-0 tw-top-0 tw-h-full tw-w-full"
              src="https://www.youtube.com/embed/gq8gqsymlH0?si=Xpccr5ii5gzVJex4"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
          <div
            className="tw-relative tw-w-full"
            style={{ paddingBottom: "56.25%" }}
          >
            <iframe
              className="tw-absolute tw-left-0 tw-top-0 tw-h-full tw-w-full"
              src="https://www.youtube.com/embed/ppHQ9k4xAkU?si=hBWWGJumjQebFYq7"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </Container>
    </Section>
  );
};
