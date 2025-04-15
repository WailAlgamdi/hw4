document.addEventListener('DOMContentLoaded', function () {
    const toggleButton = document.getElementById('toggleSkillsBtn');
    const skillsSection = document.getElementById('skillsSection');

    toggleButton.addEventListener('click', function () {
        if (skillsSection.style.display === 'none') {
            skillsSection.style.display = 'block';
        } else {
            skillsSection.style.display = 'none';
        }
    });
});
