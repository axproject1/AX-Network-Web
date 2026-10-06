/* ═══════════════════════════════════════════════════
   AX NETWORK — MAIN JAVASCRIPT
   Mobile menu, scroll reveal & header effects
   ═══════════════════════════════════════════════════ */

// Mobile menu toggle
const menuToggle = document.getElementById('menuToggle');
const navMenu = document.getElementById('navMenu');
if (menuToggle) {
  menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('open');
  });
  // Close menu when clicking a link
  navMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => navMenu.classList.remove('open'));
  });
}

// Intersection Observer for scroll reveal
const revealElements = document.querySelectorAll('.reveal');
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -40px 0px'
};

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry, index) => {
    if (entry.isIntersecting) {
      // Stagger animation for cards in the same section
      const siblings = entry.target.parentElement.querySelectorAll('.reveal');
      let delay = 0;
      siblings.forEach((sibling, i) => {
        if (sibling === entry.target) delay = i * 80;
      });
      setTimeout(() => {
        entry.target.classList.add('visible');
      }, delay);
      revealObserver.unobserve(entry.target);
    }
  });
}, observerOptions);

revealElements.forEach(el => revealObserver.observe(el));

// Smooth header background on scroll
const header = document.querySelector('header');
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    header.style.background = 'rgba(6, 9, 19, 0.88)';
  } else {
    header.style.background = 'rgba(6, 9, 19, 0.62)';
  }
}, { passive: true });
