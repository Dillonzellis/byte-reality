import { Container } from "@/components/ui/Container";
import { List } from "@/components/ui/List";
import { Section } from "@/components/ui/Section";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { participate, need } from "@/lib/data/benefits";

type SubHeaderProps = React.HTMLAttributes<HTMLDivElement>;

const SubHeader = ({ children }: SubHeaderProps) => {
  return <div className="tw-pb-1 tw-text-lg tw-font-medium">{children}</div>;
};

export const Chapter = () => {
  return (
    <Section sectionName="chapter">
      <Container>
        <div className="tw-grid tw-items-center tw-gap-8 lg:tw-grid-cols-2 lg:tw-gap-12">
          <div>
            <div className="tw-pb-4 tw-text-2xl tw-font-semibold tw-capitalize tw-underline tw-decoration-brandingGreen-400 md:tw-text-3xl">
              volunteer training video
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
          <div>
            <div className="tw-pb-8">
              <SectionTitle
                intent="purple"
                width="full"
                size="small"
                className="md:tw-mb-8"
              >
                How can my chapter or credit union{" "}
                <span className="tw-font-bold tw-underline tw-decoration-brandingGreen-400">
                  participate?
                </span>
              </SectionTitle>
              <SubHeader>
                Contact the Southeastern Credit Union Foundation, which will
                supply:
              </SubHeader>
              <List size="small" array={participate} />
            </div>
            <div className="tw-pb-8">
              <SectionTitle
                intent="purple"
                width="full"
                size="small"
                className="md:tw-mb-8"
              >
                What does my chapter or credit union{" "}
                <span className="tw-font-bold tw-underline tw-decoration-brandingGreen-400">
                  need
                </span>{" "}
                to put on a Bite of Reality event?
              </SectionTitle>
              <List size="small" array={need} />
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};
