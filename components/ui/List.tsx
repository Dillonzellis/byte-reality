import { cn } from "@/lib/utils";
import { VariantProps, cva } from "class-variance-authority";

type ListVariants = VariantProps<typeof ListVariants>;

type ListProps = ListVariants &
  React.HTMLAttributes<HTMLUListElement> & {
    array: readonly string[];
  };

const ListVariants = cva("", {
  variants: {
    size: {
      large: "md:tw-text-lg",
      small: "tw-text-base",
    },
  },
  defaultVariants: {
    size: "large",
  },
});

export const List = ({ size, className, array, ...props }: ListProps) => {
  return (
    <ul className="tw-list-inside tw-list-disc" {...props}>
      {array.map((arr, idx) => (
        <li key={idx} className={cn(ListVariants({ size }), className)}>
          {arr}
        </li>
      ))}
    </ul>
  );
};
