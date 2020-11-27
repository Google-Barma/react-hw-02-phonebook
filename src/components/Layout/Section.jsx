export default function Section({ children, title }) {
  return (
    <section>
      {title ? <h2>{title}</h2> : null}
      {children}
    </section>
  );
}
