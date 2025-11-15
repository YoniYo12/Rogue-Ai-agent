from flask import Blueprint, request, jsonify
from services.openai_service import ask_openai

agent_bp = Blueprint("agent", __name__)

@agent_bp.route("/agent", methods=["POST"])
def chat_agent():
    data = request.json
    message = data.get("message", "")

    response = ask_openai(message)

    return jsonify({"reply": response})
