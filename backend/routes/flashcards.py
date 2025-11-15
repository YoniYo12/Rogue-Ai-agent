from flask import Blueprint,request,jsonify
from services.openai_service import ask_openai
import json

flashcards_bp = Blueprint("flashcards",__name__)

@flashcards_bp.route("/flashcards",methods=["POST"])
def generate_flashcards():
    data = request.json
    topic = data.get("topic","")

    prompt = f"Create 5 simple flashcards about {topic}. Return JSON list of objects with 'question' and 'answer'."
    response = ask_openai(prompt)

    return jsonify(json.loads(response))