def get_career_suggestions(interest, education, skills, career_data):
    suggestions = []

    # Ensure career_data is a list
    if isinstance(career_data, dict):
        career_data = [career_data]

    for career in career_data:
        if isinstance(career, dict) and 'interest' in career:
            # Match interest
            if interest.lower() in career['interest'].lower():
                # Match at least one skill
                career_skills = [s.lower() for s in career.get('skills', [])]
                if any(skill in career_skills for skill in skills):
                    suggestions.append(career)
    
    return suggestions
