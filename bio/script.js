/**
 * NOSSA LUZ — LANDING PAGE DE LINKS (BIO)
 * Lightweight Vanilla JS for touch interactions & accessibility
 */
document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('.bio-btn');

  buttons.forEach(button => {
    // Mobile Touch Feedback (Active State)
    button.addEventListener('touchstart', () => {
      button.style.transform = 'scale(0.98)';
    }, { passive: true });

    button.addEventListener('touchend', () => {
      button.style.transform = '';
    }, { passive: true });
  });
});
