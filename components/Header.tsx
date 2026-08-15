export default function Header() {
  return (
    <header className="header">
      <div className="container nav">
        <a className="brand" href="/">
          <span className="logo">T</span>
          <span>TokenOrbit</span>
        </a>
        <nav className="navlinks" aria-label="Main navigation">
          <a href="#calculator">Calculator</a>
          <a href="#compare">Compare</a>
          <a href="#tools">Tools</a>
          <a href="#learn">Learn</a>
          <a href="/guides">Guides</a>
        </nav>
      </div>
    </header>
  );
}
