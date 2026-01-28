from flask import Flask, render_template, request
import os
import json
from utils.recommend import get_career_suggestions

app = Flask(__name__)

# Path to career data
career_data_path = os.path.join(os.path.dirname(__file__), "models", "career_data.json")

# Load career data safely
with open(career_data_path, "r", encoding="utf-8") as f:
    career_data = json.load(f)
    # Ensure it's a list
    if isinstance(career_data, dict):
        career_data = [career_data]

@app.route("/", methods=["GET", "POST"])
def index():
    suggestions = []
    if request.method == "POST":
        # Get input from form
        interest = request.form.get("interest", "").strip()
        skills_input = request.form.get("skills", "").strip()
        skills = [s.strip().lower() for s in skills_input.split(",") if s.strip()]
        education = request.form.get("education", "").strip()

        # Get career suggestions
        suggestions = get_career_suggestions(interest, education, skills, career_data)

    return render_template("index.html", suggestions=suggestions)

if __name__ == "__main__":
    app.run(debug=True)
