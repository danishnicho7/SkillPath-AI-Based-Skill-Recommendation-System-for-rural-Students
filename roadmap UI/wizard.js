document.addEventListener('DOMContentLoaded', () => {
  const steps = document.querySelectorAll('.step');
  const stepContents = document.querySelectorAll('.step-content');
  let currentStep = 0;

  const updateSteps = () => {
    steps.forEach((step, i) => {
      step.classList.toggle('active', i === currentStep);
      step.classList.toggle('completed', i < currentStep);
      stepContents[i].classList.toggle('active', i === currentStep);
    });
  };

  // Buttons for navigation
  document.getElementById('btnNext1').addEventListener('click', () => {
    const interest = document.getElementById('interest');
    if (interest.value.trim() === '') {
      alert('Please enter your area of interest.');
      return;
    }
    currentStep = 1;
    updateSteps();
  });

  document.getElementById('btnNext2').addEventListener('click', () => {
    currentStep = 2;
    updateSteps();
  });

  document.getElementById('btnPrev2').addEventListener('click', () => {
    currentStep = 0;
    updateSteps();
  });

  document.getElementById('btnPrev3').addEventListener('click', () => {
    currentStep = 1;
    updateSteps();
  });

  //------------- Skills tag input -------------//
  const tagInputContainer = document.getElementById('tagInput');
  const skillInput = document.getElementById('skillInput');
  const skillsHidden = document.getElementById('skillsHidden');

  let skills = [];

  const renderTags = () => {
    tagInputContainer.querySelectorAll('.tag').forEach(tag => tag.remove());

    skills.forEach((skill, idx) => {
      const tag = document.createElement('div');
      tag.classList.add('tag');
      tag.textContent = skill;
      const closeBtn = document.createElement('span');
      closeBtn.textContent = '×';
      closeBtn.addEventListener('click', () => {
        skills.splice(idx, 1);
        renderTags();
      });
      tag.appendChild(closeBtn);
      tagInputContainer.insertBefore(tag, skillInput);
    });

    // Update hidden input value
    skillsHidden.value = skills.join(',');
  };

  skillInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      const val = skillInput.value.trim();
      if (val && !skills.includes(val)) {
        skills.push(val);
        skillInput.value = '';
        renderTags();
      }
    }
  });

  updateSteps();
});
