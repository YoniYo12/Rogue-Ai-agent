from flask import Blueprint, request, jsonify
from services.openai_service import ask_openai
import json

quiz_bp = Blueprint("quiz", __name__)

@quiz_bp.route("/quiz", methods=["POST"])
def generate_quiz():
    data = request.json
    topic = data.get("topic", "")

    prompt = f"Create 5 multiple-choice quiz questions about {topic}. Return JSON list with 'question', 'choices', and 'answer'."
    response = ask_openai(prompt)

    return jsonify(json.loads(response))
