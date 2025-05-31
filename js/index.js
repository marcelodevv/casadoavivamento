const hamburger = document.getElementById('hamburger');
const navbar = document.getElementById('navbar');
const navLinks = navbar.querySelectorAll('a');

hamburger.addEventListener('click', () => {
  const expanded = hamburger.getAttribute('aria-expanded') === 'true' || false;
  hamburger.setAttribute('aria-expanded', !expanded);
  navbar.classList.toggle('active');
});

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    // Fecha o menu
    navbar.classList.remove('active');
    hamburger.setAttribute('aria-expanded', false);
  });
});

// Acessibilidade para teclado
hamburger.addEventListener('keydown', (e) => {
  if (e.key === 'Enter' || e.key === ' ') {
    e.preventDefault();
    hamburger.click();
  }
});