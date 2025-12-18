import "./Navbar.css";

export default function Navbar() {

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="navbar">
      <h2 className="logo">My Portfolio</h2>

      <ul className="nav-links">
        <li><a onClick={() => scrollToSection("home")}>Home</a></li>
        <li><a onClick={() => scrollToSection("about")}>About</a></li>
        <li><a onClick={() => scrollToSection("projects")}>Projects</a></li>
        <li><a onClick={() => scrollToSection("contact")}>Contact</a></li>
      </ul>
    </nav>
  );
}
