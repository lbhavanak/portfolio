import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <h2 className="logo">My Portfolio</h2>

      <ul className="nav-links">
        
        
        <li>
  <a href="#home" onClick={(e) => {
    e.preventDefault();
    document.querySelector("#home").scrollIntoView({ behavior: "smooth" });
  }}>Home</a>
</li><li><a href="#about">About</a></li>
<li>
  <a href="#projects" onClick={(e) => {
    e.preventDefault();
    document.querySelector("#projects").scrollIntoView({ behavior: "smooth" });
  }}>Projects</a>
</li>

        
<li>
  <a href="#contact" onClick={(e) => {
    e.preventDefault();
    document.querySelector("#contact").scrollIntoView({ behavior: "smooth" });
  }}>Contact</a>
</li>

      </ul>
    </nav>
  );
}
