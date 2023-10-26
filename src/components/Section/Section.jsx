export const Section = ({ title, children }) => {
  return (
    <section>
      <h1 title={title}>{title}</h1>
      {children}
    </section>
  );
};
