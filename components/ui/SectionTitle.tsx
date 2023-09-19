import { cn } from "@/lib/utils";

type SectionTitleProps = React.HTMLAttributes<HTMLDivElement>;

export const SectionTitle = ({
  children,
  className,
  ...props
}: SectionTitleProps) => {
  return (
    <div
      {...props}
      className={cn(
        "tw-relative tw-mb-12 tw-w-[25ch] tw-rounded-md tw-bg-brandingBlue-400 tw-px-4 tw-py-6 tw-pr-16 tw-text-4xl tw-font-medium tw-text-white tw-shadow-lg tw-shadow-zinc-800/30 before:tw-absolute before:tw-top-[10%] before:tw-z-[-10] before:tw-h-full before:tw-w-full before:tw-border-4 before:tw-border-brandingGreen-400 before:tw-content-['']",
        className,
      )}
    >
      {children}
    </div>
  );
};
