from flask import Flask, jsonify
from flask_cors import CORS
import os

app = Flask(__name__)
CORS(app)

@app.route("/")
def home():
    return {"status": "ServerPulse backend running (demo mode)"}

@app.route("/predict", methods=["POST"])
def predict():
    return jsonify({
        "will_fail": False,
        "probability": 0.18,
        "reason": "Demo mode prediction (TensorFlow disabled for deployment)",
        "last_spike": {
            "metric": "cpu",
            "change": "+5%"
        }
    })

@app.route("/live-sequence")
def live_sequence():
    return jsonify({
        "sequence": []
    })

@app.route("/favicon.ico")
def favicon():
    return "", 204

if __name__ == "__main__":
    port = int(os.environ.get("PORT", 5001))
    app.run(host="0.0.0.0", port=port)
