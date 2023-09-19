type ListProps = React.HTMLAttributes<HTMLUListElement> & {
  array: string[];
};

export const List = ({ array, ...props }: ListProps) => {
  return (
    <ul className="tw-list-inside tw-list-disc" {...props}>
      {array.map((arr, idx) => (
        <li key={idx} className="tw-text-lg">
          {arr}
        </li>
      ))}
    </ul>
  );
};
