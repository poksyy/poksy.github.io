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