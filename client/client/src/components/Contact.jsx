

export default function Contact() {
  return (
    <section id="contact" style={{ padding: "60px 20px", textAlign: "center" }}>
      <h2>Contact Me</h2>
      <p>Feel free to reach out to me for collaborations, ideas, or tech discussions!</p>

      {/* Your details */}
      <div style={{ margin: "20px 0" }}>
        <p>Email: <a href="mailto:karrilakshmibhavana@gmail.com">karrilakshmibhavana@gmail.com</a></p>
        <p>Phone: +91-7077725556</p>
        <p>LinkedIn: <a href="https://www.linkedin.com/in/karri-lakshmi-bhavana-263683326" target="_blank" rel="noopener noreferrer">linkedin.com/in/karri-lakshmi-bhavana-263683326</a></p>
        <p>GitHub: <a href="https://github.com/lbhavanak" target="_blank" rel="noopener noreferrer">github.com/lbhavanak</a></p>
      </div>

      {/* Contact form for visitors */}
      <form
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "12px",
          maxWidth: "400px",
          margin: "auto"
        }}
      >
        <input type="text" placeholder="Your Name" required style={{ padding: "10px" }} />
        <input type="email" placeholder="Your Email" required style={{ padding: "10px" }} />
        <textarea placeholder="Your Message" rows="4" required style={{ padding: "10px" }}></textarea>
        <button type="submit" style={{ padding: "10px", background: "black", color: "white", border: "none", cursor: "pointer" }}>
          Send Message
        </button>
      </form>
    </section>
  );
}
