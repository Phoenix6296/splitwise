export const Card = ({ title, author }) => {
  return (
    <div className="flex flex-col justify-between gap-5 w-96 h-40 border-2 rounded-md p-3">
      <p>{title}</p>
      <p>{author}</p>
    </div>
  );
};
