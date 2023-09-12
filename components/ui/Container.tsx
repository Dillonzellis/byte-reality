import { cn } from "@/lib/utils";

type ContainerProps = React.HTMLAttributes<HTMLDivElement>;

export const Container = ({
  children,
  className,
  ...props
}: ContainerProps) => {
  return (
    <div
      {...props}
      className={cn(
        "tw-w-full tw-mx-auto tw-max-w-[1100px] tw-px-10",
        className,
      )}
    >
      {children}
    </div>
  );
};
