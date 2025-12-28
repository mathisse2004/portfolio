export function Button({ href, download, target, rel, children, ...props }) {
  if (href) {
    return (
      <a
        className="btn"
        href={href}
        download={download}
        target={target}
        rel={rel}
        {...props}
      >
        {children}
      </a>
    );
  }

  return (
    <button className="btn" {...props}>
      {children}
    </button>
  );
}
