type ListProps = React.HTMLAttributes<HTMLUListElement> & {
  array: readonly string[];
};

export const List = ({ array, ...props }: ListProps) => {
  return (
    <ul className="tw-list-inside tw-list-disc" {...props}>
      {array.map((arr, idx) => (
        <li key={idx} className="md:tw-text-lg">
          {arr}
        </li>
      ))}
    </ul>
  );
};
