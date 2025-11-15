import { Link } from "react-router-dom";


export default function Navbar() {
  return (
    <nav>
      <h1>Yohan</h1>

      <div>
        <a href="/">Home</a>
        <a href="/flashcards">Flashcards</a>
        <a href="/quiz">Quiz</a>
        <a href="/agent">AI Agent</a>
      </div>
    </nav>
  );
}
