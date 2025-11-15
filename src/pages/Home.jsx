export default function Home() {
  return (
    <div className="container">
      <h1 style={{ fontSize: "48px", marginBottom: "20px" }}>
        Welcome to <span style={{ color: "#1e90ff" }}>Yohan</span>
      </h1>

      <p style={{ maxWidth: "550px", margin: "0 auto", fontSize: "18px", color: "#444" }}>
        Your AI-powered study helper. Generate flashcards, take quizzes,
        and learn any topic with intelligent agent support.
      </p>

      <div style={{ marginTop: "40px" }}>
        <button onClick={() => window.location.href = "/flashcards"}>Flashcards</button>
        <button onClick={() => window.location.href = "/quiz"}>Quiz</button>
        <button onClick={() => window.location.href = "/agent"}>AI Agent</button>
      </div>
    </div>
  );
}
