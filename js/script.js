function changeImage(image, newSrc) {
    image.src = newSrc;
  }

document.getElementById('language-toggle').onclick = function() {
  const dropdownContent = document.querySelector('.dropdown-content');
  dropdownContent.style.display = dropdownContent.style.display === 'flex' ? 'none' : 'flex';
}

function setLanguage(language){
  alert('Idioma cambiado a: ${language}');
}


document.querySelector('a[href="#projects"]').addEventListener('click', function(e) {
  e.preventDefault();
  document.querySelector('#projects').scrollIntoView({
    behavior: 'smooth',
  });
});

// Projects json connection and html
fetch('./data/projects.json')
  .then((response) => response.json())
  .then((projects) => {
    const container = document.querySelector('.projects-container');
    container.innerHTML = '';

    projects.forEach((project) => {
      const projectBox = document.createElement('div');
      projectBox.className = 'project-box';

      projectBox.innerHTML = `
        <a href="${project.link}" target="_blank" class="project-link">
          <img src="${project.image}" alt="${project.title}" />
          <div class="overlay">
            <i class="fa-brands fa-github"></i>
          </div>
        </a>
        <h3 class="project-title">${project.title}</h3>
        <p class="project-text">${project.description}</p>
        <div class="technology-icons">
          ${project.technologies
            .map((tech) => `<div class="tech-icon">${tech}</div>`)
            .join('')}
        </div>
      `;
      container.appendChild(projectBox);
    });
  })
  .catch((error) => console.error('Error loading projects:', error));
