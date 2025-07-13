// Typewriter effect
const words = [
  "Creative Developer",
  "Python Scripter",
  "Photographer",
  "Java Enthusiast"
];
let i = 0, j = 0, currentWord = '', isDeleting = false;

function type() {
  const typewriterText = document.querySelector('.typewriter-text');
  if (!typewriterText) return;

  if (i < words.length) {
    if (!isDeleting && j <= words[i].length) {
      currentWord = words[i].slice(0, j + 1);
      j++;
      typewriterText.textContent = currentWord;
    }
    if (isDeleting && j >= 0) {
      currentWord = words[i].slice(0, j - 1);
      j--;
      typewriterText.textContent = currentWord;
    }

    if (j === words[i].length) {
      isDeleting = true;
      setTimeout(type, 1500);
      return;
    }
    if (j === 0 && isDeleting) {
      isDeleting = false;
      i = (i + 1) % words.length;
    }
  }
  setTimeout(type, isDeleting ? 80 : 120);
}

document.addEventListener("DOMContentLoaded", () => {
  type();

  // Light/Dark toggle button event
  const toggleBtn = document.querySelector('.toggle-theme');
  if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
      document.body.classList.toggle('light-mode');
      document.body.classList.toggle('dark-mode');

      // Update icon
      if (document.body.classList.contains('light-mode')) {
        toggleBtn.classList.replace('fa-moon', 'fa-sun');
      } else {
        toggleBtn.classList.replace('fa-sun', 'fa-moon');
      }

      // Save preference
      const theme = document.body.classList.contains('light-mode') ? 'light-mode' : 'dark-mode';
      localStorage.setItem('theme', theme);
    });
  }

  // Load saved theme on page load
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) {
    document.body.classList.remove('light-mode', 'dark-mode');
    document.body.classList.add(savedTheme);
    // Update toggle icon accordingly
    if (toggleBtn) {
      if (savedTheme === 'light-mode') {
        toggleBtn.classList.remove('fa-moon');
        toggleBtn.classList.add('fa-sun');
      } else {
        toggleBtn.classList.remove('fa-sun');
        toggleBtn.classList.add('fa-moon');
      }
    }
  }
});

// Placeholder functions for nav menu
function hamburg() {
  document.querySelector('.dropdown').style.transform = 'translateY(0)';
}
function cancel() {
  document.querySelector('.dropdown').style.transform = 'translateY(-500px)';
}
