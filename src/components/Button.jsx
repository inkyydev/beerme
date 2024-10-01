export default function Button({ title, href, ...props }) {
  return (
    <div className="btn-wrapper">
      <a href={href} {...props}>
        <span>{title}</span>
      </a>
    </div>
  );
}
