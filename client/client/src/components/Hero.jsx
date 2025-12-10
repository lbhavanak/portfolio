import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="home"
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        padding: "20px",
        background: "#f5f5f5",
      }}
    >
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        style={{ fontSize: "3rem", marginBottom: "15px" }}
      >
        Hi, I’m K. Lakshmi Bhavana 👋
      </motion.h1>

      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        style={{ fontSize: "2rem", marginBottom: "15px", color: "#555" }}
      >
        Welcome to My Portfolio
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        style={{ fontSize: "1.2rem", maxWidth: "600px", marginBottom: "25px" }}
      >
        I’m a CSE student passionate about AI, technology, and innovation.
      </motion.p>

      <motion.a
        href="#projects"
        whileHover={{ scale: 1.1 }}
        style={{ textDecoration: "none" }}
      >
        <button
          style={{
            padding: "12px 30px",
            fontSize: "16px",
            background: "#222",
            color: "#fff",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          See My Projects
        </button>
      </motion.a>
    </section>
  );
  

}
