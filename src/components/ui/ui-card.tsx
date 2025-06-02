export const UICard: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => {
  return (
    <div className="shadow-lg w-100 p-5">
      <h3 className="text-red">{title}</h3>
      {children}
    </div>
  );
};
