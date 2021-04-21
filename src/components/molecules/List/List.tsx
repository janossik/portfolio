const List = ({ id, list }: { id: string; list: string[] }) => (
  <ul>
    {list.map((content) => (
      <li key={id + content}>{content}</li>
    ))}
  </ul>
);

export default List;
