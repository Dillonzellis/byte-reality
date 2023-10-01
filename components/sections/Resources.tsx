import { Container } from "../ui/Container";
import { Section } from "../ui/Section";

const resources = [
  {
    label: "App Download Instructions – STUDENT VERSION",
    href: "https://lscu.coop/foundation/bite-of-reality/docs/Bite-of-reality-flyer-nonstudents.pdf",
  },
  {
    label: "App Download Instructions – NON-STUDENT VERSION",
    href: "https://lscu.coop/foundation/bite-of-reality/docs/Bite-of-reality-flyer-students.pdf",
  },
  {
    label: "request event code",
    href: "https://lscu.coop/foundation/bite-of-reality/form.php",
  },
];

export const Resources = () => {
  return (
    <Section sectionName="resources" className="tw-pb-0">
      <div className="tw-bg-brandingPurple-400 tw-py-8">
        <Container className="tw-text-white">
          <div className="tw-text-3xl tw-font-medium tw-underline tw-decoration-brandingGreen-400">
            Event Resources
          </div>
          <ul className="tw-list-inside tw-list-disc tw-pt-4">
            {resources.map((resource, idx) => (
              <li key={idx} className="tw-text-lg">
                <a
                  className="tw-capitalize tw-transition hover:tw-text-brandingGreen-400"
                  href={resource.href}
                >
                  {resource.label}
                </a>
              </li>
            ))}
          </ul>
        </Container>
      </div>
    </Section>
  );
};
