from flask import Flask, render_template, request, redirect, url_for, session
import os, json
from utils.recommend import get_career_suggestions

app = Flask(__name__)
app.secret_key = "career_guidance_secret_key"  # REQUIRED for session

career_data_path = os.path.join(os.path.dirname(__file__), "models", "career_data.json")

with open(career_data_path, "r", encoding="utf-8") as f:
    career_data = json.load(f)
    if isinstance(career_data, dict):
        career_data = [career_data]


@app.route("/", methods=["GET", "POST"])
def index():
    if request.method == "POST":
        # Store form values in session
        session["interest"] = request.form.get("interest", "")
        session["skills"] = request.form.get("skills", "")
        session["education"] = request.form.get("education", "")

        # Redirect to GET (IMPORTANT)
        return redirect(url_for("index"))

    # GET request
    interest = session.get("interest", "")
    skills_input = session.get("skills", "")
    education = session.get("education", "")

    suggestions = []
    if interest and skills_input:
        skills = [s.strip().lower() for s in skills_input.split(",") if s.strip()]
        suggestions = get_career_suggestions(interest, education, skills, career_data)

    return render_template(
        "index.html",
        suggestions=suggestions,
        interest=interest,
        skills=skills_input,
        education=education
    )


@app.route("/career/<career_name>/<section>")
def career_section(career_name, section):
    selected = None
    for c in career_data:
        if c["career"].lower().replace(" ", "-") == career_name:
            selected = c
            break

    return render_template(
        "career_detail.html",
        career=selected,
        section=section
    )


if __name__ == "__main__":
    app.run(debug=True)
