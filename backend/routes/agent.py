from flask import Blueprint, request, jsonify
from services.openai_service import ask_openai

agent_bp = Blueprint("agent_bp", __name__)

@agent_bp.route("/api/agent", methods=["POST"])
def chat_agent():
    data = request.get_json()
    message = data.get("message")

    prompt = f"""
    You are Yohan, an AI study assistant created by software engineer Yonatan Eshetu.
    Your job is to help users learn concepts clearly and efficiently. 
    Keep your explanations simple, helpful, and directly related to the user's question.

    User: {message}
    """


    response = ask_openai(prompt)

    return jsonify({"reply": response})
