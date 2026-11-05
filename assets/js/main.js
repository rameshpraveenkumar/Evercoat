/**
 * EVERCOAT - Main Entry Point
 * Orchestrates Lucide icon initialization, general UI setup, and logging
 */

document.addEventListener('DOMContentLoaded', () => {
  // Initialize Lucide icons if the library is loaded
  if (typeof lucide !== 'undefined' && lucide.createIcons) {
    lucide.createIcons();
  }

  // Optional: re-run Lucide createIcons on dynamic events
  window.addEventListener('directionchange', () => {
    if (typeof lucide !== 'undefined' && lucide.createIcons) {
      lucide.createIcons();
    }
  });

  // URL parameters for visual testing / screenshot capture
  try {
    const params = new URLSearchParams(window.location.search);
    const testScroll = params.get('test_scroll');
    const testTheme = params.get('test_theme');
    const testDir = params.get('test_dir');
    const testDropdown = params.get('test_dropdown');

    if (testTheme === 'dark') {
      document.documentElement.classList.add('dark');
      try { localStorage.setItem('theme', 'dark'); } catch(_) {}
    } else if (testTheme === 'light') {
      document.documentElement.classList.remove('dark');
      try { localStorage.setItem('theme', 'light'); } catch(_) {}
    }

    if (testDir === 'rtl') {
      document.documentElement.setAttribute('dir', 'rtl');
      try { localStorage.setItem('direction', 'rtl'); } catch(_) {}
    } else if (testDir === 'ltr') {
      document.documentElement.setAttribute('dir', 'ltr');
      try { localStorage.setItem('direction', 'ltr'); } catch(_) {}
    }

    if (testDropdown) {
      const dropdownMenu = document.getElementById('home-dropdown-menu');
      if (dropdownMenu) {
        dropdownMenu.classList.remove('hidden');
      }
    }

    if (testScroll) {
      const targetEl = document.getElementById(testScroll);
      if (targetEl) {
        targetEl.scrollIntoView({ behavior: 'instant', block: 'start' });
      }
    }
  } catch (_) {}

  console.info('EVERCOAT - Professional Painting & Home Renovation Contractor Platform Initialized.');
});
