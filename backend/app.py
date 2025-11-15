from flask import Flask, jsonify
from flask_cors import CORS

from routes.flashcards import flashcards_bp
from routes.quiz import quiz_bp
from routes.agent import agent_bp

app = Flask(__name__)
CORS(app)

app.register_blueprint(flashcards_bp, url_prefix="/api")
app.register_blueprint(quiz_bp, url_prefix="/api")
app.register_blueprint(agent_bp, url_prefix="/api")

@app.route("/")
def home():
    return jsonify({"message": "Yohan backend is running"})

if __name__ == "__main__":
    app.run(debug=True)
