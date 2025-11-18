import { useState, useEffect, useRef } from "react";

export default function Agent() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const chatEndRef = useRef(null);

  const scrollToBottom = () => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, loading]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = { sender: "user", text: input };
    setMessages((prev) => [...prev, userMessage]);

    setInput("");
    setLoading(true);

    try {
      const response = await fetch("http://127.0.0.1:5000/api/agent", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message: userMessage.text }),
      });

      const data = await response.json();

      const aiMessage = { sender: "ai", text: data.reply };
      setMessages((prev) => [...prev, aiMessage]);
    } catch (error) {
      console.log("Error contacting backend:", error);

      setMessages((prev) => [
        ...prev,
        { sender: "ai", text: "⚠️ Error: Could not connect to the backend." },
      ]);
    }

    setLoading(false);
  };

  return (
    <div
      className="chat-container"
      style={{
        width: "100%",
        maxWidth: "900px",
        margin: "0 auto",
        padding: "20px",
      }}
    >
      {/* Header */}
      <div
        style={{
          fontSize: "32px",
          fontWeight: "bold",
          textAlign: "center",
          marginBottom: "20px",
        }}
      >
        Yohan AI Assistant 💬
      </div>

      {/* Chat Window */}
      <div
        style={{
          background: "#ffffff",
          height: "550px",
          padding: "20px",
          borderRadius: "15px",
          boxShadow: "0 0 20px rgba(0,0,0,0.1)",
          overflowY: "auto",
        }}
      >
        {messages.map((msg, index) => (
          <div
            key={index}
            style={{
              display: "flex",
              justifyContent:
                msg.sender === "user" ? "flex-end" : "flex-start",
              marginBottom: "18px",
            }}
          >
            <div
              style={{
                background:
                  msg.sender === "user" ? "#0078ff" : "#f1f1f1",
                color: msg.sender === "user" ? "white" : "black",
                padding: "12px 16px",
                maxWidth: "70%",
                borderRadius:
                  msg.sender === "user"
                    ? "15px 15px 0 15px"
                    : "15px 15px 15px 0",
                fontSize: "16px",
                lineHeight: "1.5",
                boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
              }}
            >
              {msg.text}
            </div>
          </div>
        ))}

        {loading && (
          <div
            style={{
              fontStyle: "italic",
              opacity: 0.7,
              marginBottom: "10px",
            }}
          >
            Yohan is typing...
          </div>
        )}

        <div ref={chatEndRef} />
      </div>

      {/* Input Section */}
      <div
        style={{
          marginTop: "15px",
          display: "flex",
          gap: "10px",
        }}
      >
        <input
          type="text"
          value={input}
          placeholder="Ask Yohan anything..."
          onChange={(e) => setInput(e.target.value)}
          style={{
            flex: 1,
            padding: "14px",
            borderRadius: "10px",
            border: "1px solid #ccc",
            fontSize: "17px",
            outline: "none",
          }}
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
        />

        <button
          onClick={handleSend}
          style={{
            padding: "14px 22px",
            background: "#0078ff",
            color: "white",
            border: "none",
            borderRadius: "10px",
            fontSize: "17px",
            cursor: "pointer",
            boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
          }}
        >
          Send
        </button>
      </div>
    </div>
  );
}
