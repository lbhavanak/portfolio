import "./Home.css";

export default function Home() {
  return (
    <section className="home" id="home">
        <h2>I'am K.Lakshmi Bhavana</h2>
      <h1>Welcome to My Portfolio</h1>
      
      <p>
        I am a passionate CSE student building projects in AI, Web Development,
        and Future Technologies.
      </p>

      <button onClick={() => document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" })}>
        View My Work
      </button>
    </section>
  );
}

