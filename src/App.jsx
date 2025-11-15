import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Flashcards from "./pages/Flashcards";
import Quiz from "./pages/Quiz";
import Agent from "./pages/Agent";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/flashcards" element={<Flashcards />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/agent" element={<Agent />} />
      </Routes>
    </Router>
  );
}

export default App;
