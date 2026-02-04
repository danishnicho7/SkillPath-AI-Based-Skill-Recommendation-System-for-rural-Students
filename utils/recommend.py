def get_career_suggestions(interest, education, skills, career_data):
    suggestions = []

    for career in career_data:
        if interest.lower() in career["interest"].lower():
            career_skills = [s.lower() for s in career.get("skills", [])]
            if any(skill in career_skills for skill in skills):
                suggestions.append(career)

    return suggestions
