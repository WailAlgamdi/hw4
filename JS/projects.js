document.addEventListener('DOMContentLoaded', function() {
    const showMoreBtn = document.getElementById('showMoreBtn');
    const projectsGrid = document.querySelector('.projects-grid');

    showMoreBtn.addEventListener('click', function() {
        const newProject = document.createElement('article');
        newProject.classList.add('project-card');

        newProject.innerHTML = `
            <h2>Title Search - Matching System</h2>
            <time datetime="2025-01-01">January 2025</time>
            <p>Search for news by title covered by SPA. Uses Python in Jupyter Notebook.</p>
            <a href="https://github.com/WailAlgamdi/Title-Search-Matching-System" target="_blank" class="project-btn">View on GitHub</a>
        `;

        projectsGrid.appendChild(newProject);

        showMoreBtn.style.display = 'none';
    });
});
