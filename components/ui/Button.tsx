type ButtonProps = React.HTMLAttributes<HTMLAnchorElement>;

export const Button = ({ children, ...props }: ButtonProps) => {
  return (
    <a
      className="tw-inline-flex tw-cursor-pointer tw-rounded-md tw-bg-brandingPurple-400 tw-p-4 tw-font-medium tw-capitalize tw-text-white tw-shadow-md tw-shadow-zinc-800/30 tw-transition hover:tw-scale-105 hover:tw-shadow-lg"
      {...props}
    >
      {children}
    </a>
  );
};
