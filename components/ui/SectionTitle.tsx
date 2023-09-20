import { cn } from "@/lib/utils";
import { type VariantProps, cva } from "class-variance-authority";

type TitleVariants = VariantProps<typeof TitleVariants>;

type SectionTitleProps = TitleVariants & React.HTMLAttributes<HTMLDivElement>;

const TitleVariants = cva(
  "tw-py-4 tw-pl-4 tw-relative md:tw-px-4 md:tw-py-6 tw-mb-4 tw-rounded-md  tw-font-medium tw-text-white tw-shadow-lg tw-shadow-zinc-800/30 before:tw-absolute before:tw-top-[10%] before:tw-z-[-10] before:tw-h-full before:tw-w-full before:tw-border-4 before:tw-border-brandingGreen-400 before:tw-content-[''] md:tw-mb-12 ",
  {
    variants: {
      intent: {
        purple: "tw-bg-brandingPurple-400",
        blue: "tw-bg-brandingBlue-400",
      },
      size: {
        medium: "tw-text-2xl md:tw-text-4xl",
        small: "tw-text-xl md:tw-text-2xl",
      },
      width: {
        small: "md:tw-w-[25ch] md:tw-pr-16",
        full: "tw-w-full",
      },
    },
    defaultVariants: {
      intent: "blue",
      size: "medium",
      width: "small",
    },
  },
);

export const SectionTitle = ({
  intent,
  size,
  width,
  children,
  className,
  ...props
}: SectionTitleProps) => {
  return (
    <div
      {...props}
      className={cn(TitleVariants({ intent, size, width }), className)}
    >
      {children}
    </div>
  );
};
