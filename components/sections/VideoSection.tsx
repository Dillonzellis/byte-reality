import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";

export const VideoSection = () => {
  return (
    <Section sectionName="videos">
      <div className="tw-bg-brandingPurple-400 tw-py-12">
        <Container>
          <div className="tw-pb-8 tw-text-center tw-text-3xl tw-font-semibold tw-uppercase tw-text-white tw-underline tw-decoration-brandingGreen-400 md:tw-text-5xl">
            what is bite of reality?
          </div>
          <div className="">
            <div
              className="tw-relative tw-w-full"
              style={{ paddingBottom: "56.25%" }}
            >
              <iframe
                className="tw-absolute tw-left-0 tw-top-0 tw-h-full tw-w-full tw-rounded-lg tw-shadow tw-shadow-zinc-800/30"
                src="https://www.youtube.com/embed/gq8gqsymlH0?si=Xpccr5ii5gzVJex4"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </Container>
      </div>
    </Section>
  );
};
