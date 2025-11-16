from flask import Blueprint, request, jsonify
from services.openai_service import ask_openai
import json

flashcards_bp = Blueprint("flashcards_bp", __name__)

@flashcards_bp.route("/api/flashcards", methods=["POST"])
def generate_flashcards():
    data = request.get_json()
    topic = data.get("topic")

    prompt = f"""
    Generate 5 study flashcards about {topic}.
    Respond ONLY in JSON in this format:
    [
      {{"question": "string", "answer": "string"}},
      ...
    ]
    """

    ai_response = ask_openai(prompt)

    try:
        flashcards = json.loads(ai_response)
        return jsonify(flashcards)
    except:
        return jsonify({"error": "Invalid JSON", "raw": ai_response}), 500
