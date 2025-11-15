import { useState } from "react";

export default function Quiz() {
  const [topic, setTopic] = useState("");
  const [quizStarted, setQuizStarted] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);

  const sampleQuiz = [
    {
      question: "What does AI stand for?",
      choices: ["Artificial Intelligence", "Auto Input", "Analytical Interface"],
      answer: "Artificial Intelligence",
    },
    {
      question: "Which language is most used for AI?",
      choices: ["Python", "Java", "C#"],
      answer: "Python",
    },
    {
      question: "React is used for?",
      choices: ["Backend", "Mobile antivirus", "Building UIs"],
      answer: "Building UIs",
    },
  ];

  const handleStart = () => {
    setQuizStarted(true);
  };

  const handleChoice = (choice) => {
    if (choice === sampleQuiz[currentQuestion].answer) {
      setScore(score + 1);
    }

    if (currentQuestion + 1 < sampleQuiz.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setQuizStarted("finished");
    }
  };

  return (
    <div className="container">
      <h1 style={{ fontSize: "40px", marginBottom: "20px" }}>Quiz</h1>

      {!quizStarted && quizStarted !== "finished" && (
        <>
          <p style={{ color: "#555", marginBottom: "20px" }}>
            Enter a topic and start a quick quiz.
          </p>

          <input
            type="text"
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            placeholder="Enter a topic (e.g. JavaScript)"
            style={{
              padding: "12px",
              width: "350px",
              borderRadius: "6px",
              border: "1px solid #aaa",
              marginRight: "10px",
            }}
          />

          <button onClick={handleStart}>Start Quiz</button>
        </>
      )}

      {quizStarted && quizStarted !== "finished" && (
        <div
          style={{
            backgroundColor: "white",
            padding: "30px",
            borderRadius: "10px",
            boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
            width: "500px",
            margin: "40px auto",
            textAlign: "left",
          }}
        >
          <h2 style={{ marginBottom: "20px", color: "#1e90ff" }}>
            {sampleQuiz[currentQuestion].question}
          </h2>

          {sampleQuiz[currentQuestion].choices.map((choice, index) => (
            <button
              key={index}
              onClick={() => handleChoice(choice)}
              style={{
                display: "block",
                width: "100%",
                padding: "12px",
                textAlign: "left",
                marginBottom: "12px",
                backgroundColor: "#874444ff",
                borderRadius: "8px",
                border: "1px solid #ccc",
                fontSize: "16px",
              }}
            >
              {choice}
            </button>
          ))}
        </div>
      )}

      {quizStarted === "finished" && (
        <div
          style={{
            marginTop: "40px",
            backgroundColor: "white",
            padding: "30px",
            borderRadius: "10px",
            boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
            width: "420px",
            margin: "40px auto",
          }}
        >
          <h2>Your Score</h2>
          <p style={{ fontSize: "22px", marginTop: "10px" }}>
            {score} / {sampleQuiz.length}
          </p>
        </div>
      )}
    </div>
  );
}
