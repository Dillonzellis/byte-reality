import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";

const TestingPage = () => {
  return (
    <main>
      <Container className="tw-flex tw-flex-col tw-gap-12">
        <SectionTitle>Default Variants</SectionTitle>
        <SectionTitle intent="purple" size="small" width="full">
          Purple/Small/Full Width Variant
        </SectionTitle>
      </Container>
    </main>
  );
};

export default TestingPage;
