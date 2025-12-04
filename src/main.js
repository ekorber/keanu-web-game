// Main page JavaScript
document.addEventListener('DOMContentLoaded', () => {
  const playButton = document.getElementById('playButton');

  if (playButton) {
    playButton.addEventListener('click', () => {
      // Navigate to game page
      window.location.href = '/game.html';
    });
  }

  // Add smooth scroll behavior for any future internal links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      e.preventDefault();
      const target = document.querySelector(anchor.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
});
