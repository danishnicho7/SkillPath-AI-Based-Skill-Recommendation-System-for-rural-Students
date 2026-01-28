const roadmapData = [
  {
    title: "Software Engineer",
    steps: [
      { title: "Learn Programming", desc: "Master basics of Python, JavaScript, and Java." },
      { title: "Education", desc: "Typically an undergraduate degree or coding bootcamp." },
      { title: "Internships", desc: "Gain real-world experience through projects." },
      { title: "Entry Job", desc: "Work as a junior developer in companies or startups." },
      { title: "Growth", desc: "Progress to senior, architect, or specialized roles." }
    ]
  },
  {
    title: "Civil Services",
    steps: [
      { title: "Build Foundation", desc: "Start with general knowledge and NCERT books." },
      { title: "Undergraduate Degree", desc: "Complete a bachelor's degree, mandatory for UPSC." },
      { title: "Coaching & Test Series", desc: "Enroll in coaching and practice mains & prelims." },
      { title: "Clear UPSC Exams", desc: "Pass prelims, mains, and interview stages." },
      { title: "Join Service", desc: "Become IAS/IPS/IFS officer with defined career paths." }
    ]
  }
];

function showRoadmap(index) {
  const career = roadmapData[index];
  document.getElementById('roadmapTitle').innerText = career.title;
  const container = document.getElementById('roadmapTimeline');
  container.innerHTML = '';

  career.steps.forEach(step => {
    const div = document.createElement('div');
    div.classList.add('timeline-step');

    const h4 = document.createElement('h4');
    h4.textContent = step.title;

    const p = document.createElement('p');
    p.textContent = step.desc;

    div.appendChild(h4);
    div.appendChild(p);

    container.appendChild(div);
  });

  document.getElementById('roadmapModal').style.display = 'flex';
  document.getElementById('roadmapModal').focus();
}

function closeModal() {
  document.getElementById('roadmapModal').style.display = 'none';
}

// Close modal on ESC key
document.addEventListener('keydown', (e) => {
  if (e.key === "Escape" && document.getElementById('roadmapModal').style.display === 'flex') {
    closeModal();
  }
});
