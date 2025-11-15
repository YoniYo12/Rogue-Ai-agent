import { useState } from "react";

export default function Agent() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);

  const handleSend = () => {
    if (!input.trim()) return;

    const newUserMessage = { sender: "user", text: input };
    const newAIResponse = {
      sender: "ai",
      text: "This is a sample AI response. The real backend will answer soon.",
    };

    setMessages([...messages, newUserMessage, newAIResponse]);
    setInput("");
  };

  return (
    <div className="container">
      <h1 style={{ fontSize: "40px", marginBottom: "20px" }}>AI Agent</h1>

      <div
        style={{
          width: "80%",
          maxWidth: "700px",
          height: "500px",
          backgroundColor: "white",
          margin: "0 auto",
          padding: "20px",
          borderRadius: "10px",
          boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div
          style={{
            flex: 1,
            overflowY: "auto",
            paddingRight: "10px",
            marginBottom: "15px",
          }}
        >
          {messages.map((msg, index) => (
            <div
              key={index}
              style={{
                marginBottom: "15px",
                textAlign: msg.sender === "user" ? "right" : "left",
              }}
            >
              <div
                style={{
                  display: "inline-block",
                  padding: "12px 16px",
                  borderRadius: "12px",
                  backgroundColor:
                    msg.sender === "user" ? "#1e90ff" : "#e5e5e5",
                  color: msg.sender === "user" ? "white" : "black",
                  maxWidth: "80%",
                  wordWrap: "break-word",
                }}
              >
                {msg.text}
              </div>
            </div>
          ))}
        </div>

        <div style={{ display: "flex", gap: "10px" }}>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask Rogue anything..."
            style={{
              flex: 1,
              padding: "12px",
              borderRadius: "8px",
              border: "1px solid #aaa",
              fontSize: "16px",
            }}
          />

          <button onClick={handleSend}>Send</button>
        </div>
      </div>
    </div>
  );
}
