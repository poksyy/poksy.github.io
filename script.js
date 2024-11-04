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