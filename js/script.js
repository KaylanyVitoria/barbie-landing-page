// ================= BOTÕES "VER MAIS" =================

const castBtn = document.querySelector('.cast .btn');
const reviewsBtn = document.querySelector('.reviews .btn');

if (castBtn) {
  castBtn.addEventListener('click', () => {
    alert('Mais elenco em breve 🎬');
  });
}

if (reviewsBtn) {
  reviewsBtn.addEventListener('click', () => {
    alert('Mais resenhas em breve ⭐');
  });
}

// ================= SCROLL SUAVE =================

const links = document.querySelectorAll('.menu a');

links.forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute('href'));

    if (target) {
      target.scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});