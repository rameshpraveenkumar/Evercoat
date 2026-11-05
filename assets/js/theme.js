/**
 * EVERCOAT - Theme and Direction Management
 * Handles Instant Theme (Light/Dark) and Direction (LTR/RTL) with LocalStorage persistence.
 */

(function () {
  // Immediately apply stored preferences to prevent flash of unstyled theme
  const savedTheme = localStorage.getItem('evercoat_theme');
  const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }

  const savedDir = localStorage.getItem('evercoat_dir') || 'ltr';
  document.documentElement.setAttribute('dir', savedDir);
})();

document.addEventListener('DOMContentLoaded', () => {
  initThemeToggle();
  initDirectionToggle();
});

/**
 * Initialize Light / Dark theme toggles across all pages
 */
function initThemeToggle() {
  const themeToggles = document.querySelectorAll('.theme-toggle-btn');
  updateThemeIcons();

  themeToggles.forEach((btn) => {
    btn.addEventListener('click', () => {
      const isDark = document.documentElement.classList.toggle('dark');
      localStorage.setItem('evercoat_theme', isDark ? 'dark' : 'light');
      updateThemeIcons();
    });
  });
}

function updateThemeIcons() {
  const isDark = document.documentElement.classList.contains('dark');
  const lightIcons = document.querySelectorAll('.theme-icon-light');
  const darkIcons = document.querySelectorAll('.theme-icon-dark');

  lightIcons.forEach((el) => {
    el.style.display = isDark ? 'inline-block' : 'none';
  });
  darkIcons.forEach((el) => {
    el.style.display = isDark ? 'none' : 'inline-block';
  });
}

/**
 * Initialize LTR / RTL direction toggle
 */
function initDirectionToggle() {
  const dirToggles = document.querySelectorAll('.dir-toggle-btn');
  updateDirLabels();

  dirToggles.forEach((btn) => {
    btn.addEventListener('click', () => {
      const currentDir = document.documentElement.getAttribute('dir') || 'ltr';
      const newDir = currentDir === 'ltr' ? 'rtl' : 'ltr';
      document.documentElement.setAttribute('dir', newDir);
      localStorage.setItem('evercoat_dir', newDir);
      updateDirLabels();

      // Dispatch event in case components need realignment
      window.dispatchEvent(new CustomEvent('directionchange', { detail: { dir: newDir } }));
    });
  });
}

function updateDirLabels() {
  const currentDir = document.documentElement.getAttribute('dir') || 'ltr';
  const dirToggles = document.querySelectorAll('.dir-toggle-btn');
  dirToggles.forEach((btn) => {
    const nextDir = currentDir === 'ltr' ? 'RTL' : 'LTR';
    btn.setAttribute('aria-label', `Switch text direction (Current: ${currentDir.toUpperCase()}, click for ${nextDir})`);
    btn.setAttribute('title', `Switch text direction (Current: ${currentDir.toUpperCase()})`);
  });
  const dirLabels = document.querySelectorAll('.dir-toggle-label');
  dirLabels.forEach((label) => {
    label.textContent = currentDir.toUpperCase();
  });
}
