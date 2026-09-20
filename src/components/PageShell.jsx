export default function PageShell({ eyebrow, title, text, children }) {
  return <>
    <section className="page-hero"><div className="container"><span>{eyebrow}</span><h1>{title}</h1>{text && <p>{text}</p>}</div></section>
    {children}
  </>;
}
