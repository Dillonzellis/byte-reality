import { cn } from "@/lib/utils";

type SectionProps = React.HTMLAttributes<HTMLElement> & {
  sectionName: string;
};

export const Section = ({
  sectionName,
  children,
  className,
  ...props
}: SectionProps) => {
  return (
    <section {...props} className={cn(`${sectionName} tw-py-8`, className)}>
      {children}
    </section>
  );
};
