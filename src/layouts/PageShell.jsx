/**
 * PageShell
 * - By default it offsets page content by the fixed navbar height (`--nav-h`).
 * - Set `offsetTop={false}` for pages that intentionally want their background
 *   to start at the very top (e.g. Landing hero with its own internal offset).
 */
export default function PageShell({
  offsetTop = true,
  className = "",
  children,
}) {
  return (
    <div
      className={className}
      style={offsetTop ? { paddingTop: "var(--nav-h, 104px)" } : undefined}
    >
      {children}
    </div>
  );
}
