import { useState } from "react";

export default function Flashcards() {
  const [topic, setTopic] = useState("");
  const [cards, setCards] = useState([]);

  
  const sampleFlashcards = [
    { question: "What is AI?", answer: "AI is the simulation of human intelligence by machines." },
    { question: "What is Python?", answer: "A popular programming language used for AI and backend development." },
    { question: "What is React?", answer: "A JavaScript library for building user interfaces." },
  ];

  const handleGenerate = () => {
    setCards(sampleFlashcards);
  };

  return (
    <div className="container">
      <h1 style={{ fontSize: "40px", marginBottom: "20px" }}>Flashcards</h1>

      <p style={{ color: "#555", marginBottom: "20px" }}>
        Enter a topic, and Rogue will generate flashcards for you.
      </p>

   
      <input
        type="text"
        value={topic}
        onChange={(e) => setTopic(e.target.value)}
        placeholder="Enter a topic (e.g. Python basics)"
        style={{
          padding: "12px",
          width: "350px",
          borderRadius: "6px",
          border: "1px solid #aaa",
          marginRight: "10px",
        }}
      />

   
      <button onClick={handleGenerate}>Generate Flashcards</button>

     
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
          gap: "20px",
          marginTop: "40px",
        }}
      >
        {cards.map((card, index) => (
          <div
            key={index}
            style={{
              backgroundColor: "white",
              padding: "20px",
              borderRadius: "10px",
              boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
              textAlign: "left",
              minHeight: "180px",
            }}
          >
            <h3 style={{ marginBottom: "10px", color: "#1e90ff" }}>
              {card.question}
            </h3>
            <p style={{ color: "#444" }}>{card.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
