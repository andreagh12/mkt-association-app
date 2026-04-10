import "./styles.css";

const NAV_LINKS = ["About", "Services", "Contact Us"];

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1600&q=60";

const LISTINGS = [
  {
    title: "Marketing Services Directory",
    subtitle: "This directory contains a list of Marketing Association members who are marketing agencies or suppliers who have committed to best practice marketing.",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=60",
  },
  {
    title: "Advice Line",
    subtitle: "We're here to help our members stay on the right side of the many laws that affect marketing and marketers. Call or message us today and we'll get back to you within 24 hours.",
    image:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=60",
  },
  {
    title: "Data Warranted Organisations",
    subtitle: "The Data Warranted logo means that your personal information is treated with respect and absolute privacy, in accordance with best-practice standards and New Zealand law.",
    image:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=60",
  },
];

function Navbar() {
  return (
    <header className="nav">
      <div className="nav-inner">
        <div className="brand">
          <div className="brand-icon" aria-hidden="true" />
          <span>Marketing Association NZ</span>
        </div>

        <nav className="nav-links" aria-label="Primary navigation">
          {NAV_LINKS.map((item) => (
            <a key={item} href="#">
              {item}
            </a>
          ))}
          <button className="login-btn" type="button">
            Login
          </button>
        </nav>

        <button className="burger" type="button" aria-label="Open menu">
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero">
      <div className="hero-box">
        <div className="hero-top">
          <h1>Helping marketers be BRILLIANT</h1>

          {/* Center column: hero image */}
          <div className="hero-image" aria-hidden="true">
            <img src={HERO_IMAGE} alt="" />
          </div>

          {/* Spacer column: keeps image centered on page */}
          <div className="hero-spacer" aria-hidden="true" />
        </div>

        <div className="search" role="search">
          <input type="text" aria-label="Search" />
          <button type="button">SEARCH</button>
        </div>
      </div>
    </section>
  );
}

function Card({ title, subtitle, image }) {
  return (
    <article className="card">
      <img src={image} alt="" />
      <div className="card-body">
        <h3>{title}</h3>
        <p>{subtitle}</p>
      </div>
    </article>
  );
}

export default function App() {
  return (
    <div className="page">
      <Navbar />
      <Hero />

      <main className="content">
        <div className="card-grid">
          {LISTINGS.map((item, index) => (
            <Card key={index} {...item} />
          ))}
        </div>
      </main>

      <footer className="footer">
        © {new Date().getFullYear()} Marketing Association NZ
      </footer>
    </div>
  );
}
