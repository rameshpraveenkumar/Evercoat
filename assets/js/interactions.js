/**
 * EVERCOAT - Core Interactive Components
 * Dropdown Navigation, Mobile Menu, Before/After Slider, Lightbox, Counters,
 * Contact Validation, Demo Auth, and Social Links Configuration.
 */

document.addEventListener('DOMContentLoaded', () => {
  initStickyNav();
  initHomeDropdown();
  initMobileMenu();
  initActiveNavLink();
  initBeforeAfterSlider();
  initTestimonialCarousel();
  initStatsCounter();
  initProjectGallery();
  initLightbox();
  initFaqAccordion();
  initContactForm();
  initContactUrlParams();
  initDemoLogin();
  initRegistrationForm();
  initSocialLinks();
  initBackToTop();
  initDynamicYear();
  initTestHooks();
});

function initTestHooks() {
  const isHashOrSearch = (key) => window.location.hash.includes(key) || window.location.search.includes(key);

  if (isHashOrSearch('dropdown')) {
    const c = document.getElementById('home-dropdown-container');
    const m = document.getElementById('home-dropdown-menu');
    if (c && m) {
      c.classList.add('is-open');
      m.classList.remove('hidden');
    }
  }

  if (isHashOrSearch('mobile_menu') || isHashOrSearch('mobile-menu')) {
    const m = document.getElementById('mobile-menu');
    const s = document.getElementById('mobile-home-submenu');
    const b = document.getElementById('mobile-home-btn');
    const chevron = document.getElementById('mobile-home-chevron');
    if (m) m.classList.remove('hidden');
    if (s) s.classList.remove('hidden');
    if (b) b.setAttribute('aria-expanded', 'true');
    if (chevron) chevron.classList.add('rotate-180');
  }

  if (isHashOrSearch('footer')) {
    const footer = document.querySelector('footer');
    if (footer) {
      let prev = footer.previousElementSibling;
      while (prev) {
        prev.style.display = 'none';
        prev = prev.previousElementSibling;
      }
    }
  }

  if (isHashOrSearch('team')) {
    const header = document.querySelector('header');
    if (header) header.style.display = 'none';
    const teamSection = document.getElementById('our-team');
    if (teamSection) {
      let prev = teamSection.previousElementSibling;
      while (prev) {
        prev.style.display = 'none';
        prev = prev.previousElementSibling;
      }
      let next = teamSection.nextElementSibling;
      while (next) {
        next.style.display = 'none';
        next = next.nextElementSibling;
      }
    }
  }

  if (isHashOrSearch('hero_ba') || isHashOrSearch('before_after')) {
    const header = document.querySelector('header');
    if (header) header.style.display = 'none';
    const hero = document.querySelector('section');
    if (hero) {
      let next = hero.nextElementSibling;
      while (next) {
        next.style.display = 'none';
        next = next.nextElementSibling;
      }
    }
    const footer = document.querySelector('footer');
    if (footer) footer.style.display = 'none';
  }

  if (isHashOrSearch('hero_ba_mobile')) {
    const header = document.querySelector('header');
    if (header) header.style.display = 'none';
    const heroLeft = document.querySelector('.lg\\:col-span-7');
    if (heroLeft) heroLeft.style.display = 'none';
    const hero = document.querySelector('section');
    if (hero) {
      let next = hero.nextElementSibling;
      while (next) {
        next.style.display = 'none';
        next = next.nextElementSibling;
      }
    }
    const footer = document.querySelector('footer');
    if (footer) footer.style.display = 'none';
  }

  if (isHashOrSearch('testimonials') || isHashOrSearch('testimonial')) {
    const header = document.querySelector('header');
    if (header) header.style.display = 'none';
    const testSection = document.getElementById('testimonial-carousel')?.closest('section');
    if (testSection) {
      let prev = testSection.previousElementSibling;
      while (prev) {
        prev.style.display = 'none';
        prev = prev.previousElementSibling;
      }
      let next = testSection.nextElementSibling;
      while (next) {
        next.style.display = 'none';
        next = next.nextElementSibling;
      }
    }
  }

  if (isHashOrSearch('hero_h2')) {
    const header = document.querySelector('header');
    if (header) header.style.display = 'none';
    const hero = document.querySelector('section');
    if (hero) {
      let next = hero.nextElementSibling;
      while (next) {
        next.style.display = 'none';
        next = next.nextElementSibling;
      }
    }
    const footer = document.querySelector('footer');
    if (footer) footer.style.display = 'none';
  }
}

/* ==========================================================================
   1. Sticky Navigation & Scroll Effect
   ========================================================================== */
function initStickyNav() {
  const header = document.querySelector('header');
  if (!header) return;

  const handleScroll = () => {
    if (window.scrollY > 20) {
      header.classList.add('nav-scrolled');
      header.classList.add('bg-ivory/95', 'dark:bg-charcoal-900/95');
    } else {
      header.classList.remove('nav-scrolled');
      header.classList.remove('bg-ivory/95', 'dark:bg-charcoal-900/95');
    }
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();
}

/* ==========================================================================
   2. Home Navigation Dropdown (Desktop & Mobile)
   ========================================================================== */
function initHomeDropdown() {
  // Desktop Dropdown
  const container = document.getElementById('home-dropdown-container');
  const btn = document.getElementById('home-dropdown-btn');
  const menu = document.getElementById('home-dropdown-menu');

  if (container && btn && menu) {
    let closeTimeout = null;

    const openMenu = () => {
      clearTimeout(closeTimeout);
      container.classList.add('is-open');
      menu.classList.remove('hidden');
      btn.setAttribute('aria-expanded', 'true');
    };

    const closeMenu = () => {
      container.classList.remove('is-open');
      menu.classList.add('hidden');
      btn.setAttribute('aria-expanded', 'false');
    };

    // Click toggle
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const isOpen = container.classList.contains('is-open');
      if (isOpen) {
        closeMenu();
      } else {
        openMenu();
      }
    });

    // Hover with small delay to prevent abrupt closing
    container.addEventListener('mouseenter', () => {
      openMenu();
    });

    container.addEventListener('mouseleave', () => {
      closeTimeout = setTimeout(() => {
        closeMenu();
      }, 150);
    });

    // Close on click outside
    document.addEventListener('click', (e) => {
      if (!container.contains(e.target)) {
        closeMenu();
      }
    });

    // Close on Escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && container.classList.contains('is-open')) {
        closeMenu();
        btn.focus();
      }
    });
  }

  // Mobile Accordion Submenu
  const mobileHomeBtn = document.getElementById('mobile-home-btn');
  const mobileHomeSubmenu = document.getElementById('mobile-home-submenu');
  const mobileHomeChevron = document.getElementById('mobile-home-chevron');

  if (mobileHomeBtn && mobileHomeSubmenu) {
    mobileHomeBtn.addEventListener('click', (e) => {
      e.preventDefault();
      const isExpanded = mobileHomeBtn.getAttribute('aria-expanded') === 'true';
      mobileHomeBtn.setAttribute('aria-expanded', !isExpanded);
      mobileHomeSubmenu.classList.toggle('hidden');
      if (mobileHomeChevron) {
        mobileHomeChevron.classList.toggle('rotate-180', !isExpanded);
      }
    });

    // Auto-expand mobile submenu if on Home 1 or Home 2
    const currentPath = window.location.pathname.split('/').pop() || 'index.html';
    if (currentPath === 'index.html' || currentPath === 'home-2.html' || currentPath === '') {
      mobileHomeSubmenu.classList.remove('hidden');
      mobileHomeBtn.setAttribute('aria-expanded', 'true');
      if (mobileHomeChevron) {
        mobileHomeChevron.classList.add('rotate-180');
      }
    }
  }
}

/* ==========================================================================
   3. Mobile Hamburger Menu
   ========================================================================== */
function initMobileMenu() {
  const toggleBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  if (!toggleBtn || !mobileMenu) return;

  const toggle = () => {
    const isExpanded = toggleBtn.getAttribute('aria-expanded') === 'true';
    toggleBtn.setAttribute('aria-expanded', !isExpanded);
    mobileMenu.classList.toggle('hidden');
    
    // Toggle menu icon
    const openIcon = toggleBtn.querySelector('.icon-menu');
    const closeIcon = toggleBtn.querySelector('.icon-close');
    if (openIcon && closeIcon) {
      openIcon.classList.toggle('hidden');
      closeIcon.classList.toggle('hidden');
    }
  };

  toggleBtn.addEventListener('click', toggle);

  // Close mobile menu when a navigation link is clicked
  const navLinks = mobileMenu.querySelectorAll('a');
  navLinks.forEach((link) => {
    link.addEventListener('click', () => {
      mobileMenu.classList.add('hidden');
      toggleBtn.setAttribute('aria-expanded', 'false');
      const openIcon = toggleBtn.querySelector('.icon-menu');
      const closeIcon = toggleBtn.querySelector('.icon-close');
      if (openIcon && closeIcon) {
        openIcon.classList.remove('hidden');
        closeIcon.classList.add('hidden');
      }
    });
  });
}

/* ==========================================================================
   4. Highlight Active Navigation Item
   ========================================================================== */
function initActiveNavLink() {
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  const navLinks = document.querySelectorAll('.nav-link');
  const homeBtn = document.getElementById('home-dropdown-btn');
  const mobileHomeBtn = document.getElementById('mobile-home-btn');

  // Check if current page is one of the homepages
  const isHomepage = currentPath === 'index.html' || currentPath === 'home-2.html' || currentPath === '';

  if (isHomepage) {
    if (homeBtn) {
      homeBtn.classList.add('text-forest', 'dark:text-sage', 'font-semibold');
      homeBtn.classList.remove('text-charcoal/80', 'dark:text-ivory/80');
      homeBtn.setAttribute('aria-current', 'page');
    }
    if (mobileHomeBtn) {
      mobileHomeBtn.classList.add('text-forest', 'dark:text-sage', 'font-semibold');
      mobileHomeBtn.classList.remove('text-charcoal/80', 'dark:text-ivory/80');
    }
  } else {
    if (homeBtn) {
      homeBtn.classList.remove('text-forest', 'dark:text-sage', 'font-semibold');
      homeBtn.classList.add('text-charcoal/80', 'dark:text-ivory/80');
      homeBtn.removeAttribute('aria-current');
    }
    if (mobileHomeBtn) {
      mobileHomeBtn.classList.remove('text-forest', 'dark:text-sage', 'font-semibold');
      mobileHomeBtn.classList.add('text-charcoal/80', 'dark:text-ivory/80');
    }
  }

  // Highlight sub-items in the desktop dropdown
  const subLinks = document.querySelectorAll('.home-sub-link');
  subLinks.forEach((sub) => {
    const page = sub.getAttribute('data-page');
    const dot = sub.querySelector('.sub-dot');
    if ((page === currentPath) || (currentPath === '' && page === 'index.html')) {
      sub.classList.add('bg-forest/10', 'text-forest', 'dark:bg-charcoal-700/80', 'dark:text-sage', 'font-semibold');
      if (dot) {
        dot.classList.remove('bg-transparent');
        dot.classList.add('bg-forest', 'dark:bg-sage');
      }
    } else {
      sub.classList.remove('bg-forest/10', 'text-forest', 'dark:bg-charcoal-700/80', 'dark:text-sage', 'font-semibold');
      if (dot) {
        dot.classList.add('bg-transparent');
        dot.classList.remove('bg-forest', 'dark:bg-sage');
      }
    }
  });

  // Standard top-level navigation links
  navLinks.forEach((link) => {
    // Skip if it's the home dropdown button itself
    if (link.id === 'home-dropdown-btn') return;

    const href = link.getAttribute('href');
    if (!href) return;
    const targetFile = href.split('/').pop().split('?')[0];

    if (targetFile === currentPath || (currentPath === '' && targetFile === 'index.html')) {
      link.classList.add('text-forest', 'dark:text-sage', 'font-semibold');
      link.classList.remove('text-charcoal/80', 'dark:text-ivory/80');
      link.setAttribute('aria-current', 'page');
    } else {
      link.classList.remove('text-forest', 'dark:text-sage', 'font-semibold');
      link.classList.add('text-charcoal/80', 'dark:text-ivory/80');
      link.removeAttribute('aria-current');
    }
  });
}

/* ==========================================================================
   5. Interactive Before & After Image Comparison Slider
   Supports multiple sliders, Pointer Events, touch, mouse, keyboard & RTL
   ========================================================================== */
function initBeforeAfterSlider() {
  const containers = document.querySelectorAll('.ba-container');
  if (!containers.length) return;

  containers.forEach((container) => {
    const clipWrapper = container.querySelector('.ba-clip-wrapper, .ba-after-wrapper');
    const handle = container.querySelector('.ba-handle');
    const clipImage = container.querySelector('.ba-clip-image, .ba-after-image');
    if (!clipWrapper || !handle || !clipImage) return;

    let isDragging = false;

    // Set accessibility attributes on handle
    handle.setAttribute('role', 'slider');
    handle.setAttribute('tabindex', '0');
    handle.setAttribute('aria-label', 'Image comparison slider');
    handle.setAttribute('aria-valuemin', '0');
    handle.setAttribute('aria-valuemax', '100');
    handle.setAttribute('aria-valuenow', '50');

    const updateImageWidth = () => {
      const containerWidth = container.offsetWidth;
      clipImage.style.width = `${containerWidth}px`;
    };

    updateImageWidth();
    window.addEventListener('resize', updateImageWidth);

    const updatePosition = (percentage) => {
      // Clamping between 2% and 98%
      const clamped = Math.max(2, Math.min(98, percentage));
      clipWrapper.style.width = `${clamped}%`;
      handle.style.left = `${clamped}%`;
      handle.setAttribute('aria-valuenow', Math.round(clamped).toString());
    };

    const calculatePercentageFromClientX = (clientX) => {
      const rect = container.getBoundingClientRect();
      const isRtl = document.documentElement.dir === 'rtl';
      let offsetX = clientX - rect.left;
      if (isRtl) {
        offsetX = rect.right - clientX;
      }
      return (offsetX / rect.width) * 100;
    };

    // Pointer Events (supports Mouse, Touch, Stylus seamlessly with capture)
    const onPointerDown = (e) => {
      isDragging = true;
      try {
        handle.setPointerCapture(e.pointerId);
      } catch (err) {}
      const pct = calculatePercentageFromClientX(e.clientX);
      updatePosition(pct);
      e.preventDefault();
    };

    const onPointerMove = (e) => {
      if (!isDragging) return;
      const pct = calculatePercentageFromClientX(e.clientX);
      updatePosition(pct);
    };

    const onPointerUp = (e) => {
      if (!isDragging) return;
      isDragging = false;
      try {
        if (handle.hasPointerCapture(e.pointerId)) {
          handle.releasePointerCapture(e.pointerId);
        }
      } catch (err) {}
    };

    handle.addEventListener('pointerdown', onPointerDown);
    handle.addEventListener('pointermove', onPointerMove);
    handle.addEventListener('pointerup', onPointerUp);
    handle.addEventListener('pointercancel', onPointerUp);

    // Direct click/tap on container jumps divider to position
    container.addEventListener('pointerdown', (e) => {
      if (e.target.closest('.ba-handle')) return;
      const pct = calculatePercentageFromClientX(e.clientX);
      updatePosition(pct);
      isDragging = true;
      try {
        handle.setPointerCapture(e.pointerId);
      } catch (err) {}
    });

    // Keyboard navigation (Arrow keys, Home, End)
    handle.addEventListener('keydown', (e) => {
      let currentVal = parseFloat(handle.getAttribute('aria-valuenow') || '50');
      const step = 4;
      const isRtl = document.documentElement.dir === 'rtl';

      if (e.key === 'ArrowLeft') {
        const next = isRtl ? currentVal + step : currentVal - step;
        updatePosition(next);
        e.preventDefault();
      } else if (e.key === 'ArrowRight') {
        const next = isRtl ? currentVal - step : currentVal + step;
        updatePosition(next);
        e.preventDefault();
      } else if (e.key === 'Home') {
        updatePosition(2);
        e.preventDefault();
      } else if (e.key === 'End') {
        updatePosition(98);
        e.preventDefault();
      }
    });
  });
}

/* ==========================================================================
   5b. Interactive Testimonial Carousel
   Vanilla JS, smooth transitions, pause-on-hover, dots, prev/next, RTL aware
   ========================================================================== */
function initTestimonialCarousel() {
  const carousel = document.getElementById('testimonial-carousel');
  if (!carousel) return;

  const testimonials = [
    {
      id: 1,
      quote: "The EVERCOAT team repainted our entire home in just four days. Their dustless sanding system made all the difference, and the trim edges along our ceiling look laser-straight.",
      name: "David & Sarah M.",
      project: "Interior Renovation & Repainting",
      location: "Austin, Texas"
    },
    {
      id: 2,
      quote: "We were worried about our exterior siding after summer heat and seasonal storms. EVERCOAT carried out moisture checks, treated masonry cracks, and gave our home a stunning modern facade makeover.",
      name: "Marcus Vance",
      project: "Single-Family Residence Exterior",
      location: "Round Rock, Texas"
    },
    {
      id: 3,
      quote: "The Venetian plaster feature wall created in our dining room is a work of art. The team was courteous, impeccably clean, and delivered true master-grade craftsmanship.",
      name: "Elena Rostova",
      project: "Texture & Feature Wall",
      location: "West Lake Hills, Texas"
    }
  ];

  let currentIndex = 0;
  let autoRotateTimer = null;
  const ROTATE_INTERVAL = 7000;

  const quoteEl = carousel.querySelector('#carousel-quote');
  const nameEl = carousel.querySelector('#carousel-name');
  const projectEl = carousel.querySelector('#carousel-project');
  const locationEl = carousel.querySelector('#carousel-location');
  const prevBtn = carousel.querySelector('#carousel-prev');
  const nextBtn = carousel.querySelector('#carousel-next');
  const dotsContainer = carousel.querySelector('#carousel-dots');
  const contentCard = carousel.querySelector('#carousel-card');

  if (!quoteEl || !nameEl || !contentCard) return;

  // Build dots
  if (dotsContainer) {
    dotsContainer.innerHTML = '';
    testimonials.forEach((_, idx) => {
      const dot = document.createElement('button');
      dot.type = 'button';
      dot.className = `h-2.5 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-forest ${
        idx === 0 ? 'w-8 bg-forest dark:bg-sage' : 'w-2.5 bg-charcoal/20 dark:bg-ivory/20 hover:bg-charcoal/40'
      }`;
      dot.setAttribute('aria-label', `Go to slide ${idx + 1}`);
      dot.addEventListener('click', () => {
        goToSlide(idx);
        restartAutoRotate();
      });
      dotsContainer.appendChild(dot);
    });
  }

  const updateDots = (activeIndex) => {
    if (!dotsContainer) return;
    const dots = dotsContainer.querySelectorAll('button');
    dots.forEach((dot, idx) => {
      if (idx === activeIndex) {
        dot.className = 'h-2.5 w-8 rounded-full bg-forest dark:bg-sage transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-forest';
        dot.setAttribute('aria-current', 'true');
      } else {
        dot.className = 'h-2.5 w-2.5 rounded-full bg-charcoal/20 dark:bg-ivory/20 hover:bg-charcoal/40 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-forest';
        dot.removeAttribute('aria-current');
      }
    });
  };

  const renderSlide = (index) => {
    const item = testimonials[index];
    if (!item) return;

    // Gentle fade transition without layout shift
    contentCard.style.opacity = '0';
    contentCard.style.transform = 'translateY(4px)';

    setTimeout(() => {
      quoteEl.textContent = `"${item.quote}"`;
      nameEl.textContent = item.name;
      if (projectEl) projectEl.textContent = item.project;
      if (locationEl) locationEl.textContent = item.location;

      contentCard.style.opacity = '1';
      contentCard.style.transform = 'translateY(0)';
      updateDots(index);
    }, 180);
  };

  const goToSlide = (index) => {
    currentIndex = (index + testimonials.length) % testimonials.length;
    renderSlide(currentIndex);
  };

  const nextSlide = () => {
    goToSlide(currentIndex + 1);
  };

  const prevSlide = () => {
    goToSlide(currentIndex - 1);
  };

  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      const isRtl = document.documentElement.dir === 'rtl';
      if (isRtl) prevSlide(); else nextSlide();
      restartAutoRotate();
    });
  }

  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      const isRtl = document.documentElement.dir === 'rtl';
      if (isRtl) nextSlide(); else prevSlide();
      restartAutoRotate();
    });
  }

  // Keyboard navigation within the carousel
  carousel.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight') {
      const isRtl = document.documentElement.dir === 'rtl';
      if (isRtl) prevSlide(); else nextSlide();
      restartAutoRotate();
    } else if (e.key === 'ArrowLeft') {
      const isRtl = document.documentElement.dir === 'rtl';
      if (isRtl) nextSlide(); else prevSlide();
      restartAutoRotate();
    }
  });

  // Auto-rotation with pause on hover / focus / touch
  const startAutoRotate = () => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;
    stopAutoRotate();
    autoRotateTimer = setInterval(nextSlide, ROTATE_INTERVAL);
  };

  const stopAutoRotate = () => {
    if (autoRotateTimer) {
      clearInterval(autoRotateTimer);
      autoRotateTimer = null;
    }
  };

  const restartAutoRotate = () => {
    stopAutoRotate();
    startAutoRotate();
  };

  carousel.addEventListener('mouseenter', stopAutoRotate);
  carousel.addEventListener('mouseleave', startAutoRotate);
  carousel.addEventListener('focusin', stopAutoRotate);
  carousel.addEventListener('focusout', startAutoRotate);
  carousel.addEventListener('touchstart', stopAutoRotate, { passive: true });
  carousel.addEventListener('touchend', startAutoRotate, { passive: true });

  // Initial render
  renderSlide(0);
  startAutoRotate();
}

/* ==========================================================================
   6. Statistics Animated Counter
   ========================================================================== */
function initStatsCounter() {
  const counters = document.querySelectorAll('.stat-counter');
  if (!counters.length) return;

  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const counter = entry.target;
          const target = parseInt(counter.getAttribute('data-target') || '0', 10);
          const suffix = counter.getAttribute('data-suffix') || '';
          const duration = 1800; // ms
          const startTime = performance.now();

          const updateCount = (currentTime) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            // Ease-out cubic formula
            const easeOutProgress = 1 - Math.pow(1 - progress, 3);
            const currentVal = Math.floor(easeOutProgress * target);

            counter.textContent = `${currentVal}${suffix}`;

            if (progress < 1) {
              requestAnimationFrame(updateCount);
            } else {
              counter.textContent = `${target}${suffix}`;
            }
          };

          requestAnimationFrame(updateCount);
          obs.unobserve(counter);
        }
      });
    },
    { threshold: 0.3 }
  );

  counters.forEach((counter) => observer.observe(counter));
}

/* ==========================================================================
   7. Projects Gallery Category Filtering
   ========================================================================== */
function initProjectGallery() {
  const filterBtns = document.querySelectorAll('.gallery-filter-btn');
  const projectCards = document.querySelectorAll('.project-card');
  if (!filterBtns.length || !projectCards.length) return;

  filterBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      // Update active button state
      filterBtns.forEach((b) => {
        b.classList.remove('bg-forest', 'text-white', 'dark:bg-sage', 'dark:text-charcoal-900');
        b.classList.add('bg-lightgrey/60', 'text-charcoal/80', 'dark:bg-charcoal-700', 'dark:text-ivory/80');
      });
      btn.classList.add('bg-forest', 'text-white', 'dark:bg-sage', 'dark:text-charcoal-900');
      btn.classList.remove('bg-lightgrey/60', 'text-charcoal/80', 'dark:bg-charcoal-700', 'dark:text-ivory/80');

      const filterValue = btn.getAttribute('data-filter') || 'all';

      projectCards.forEach((card) => {
        const category = card.getAttribute('data-category');
        if (filterValue === 'all' || category === filterValue) {
          card.classList.remove('hidden');
          card.classList.add('animate-fade-in');
        } else {
          card.classList.add('hidden');
          card.classList.remove('animate-fade-in');
        }
      });
    });
  });
}

/* ==========================================================================
   8. Lightbox Image Modal
   ========================================================================== */
let currentLightboxIndex = 0;
let lightboxItems = [];

function initLightbox() {
  const overlay = document.getElementById('lightbox-modal');
  if (!overlay) return;

  const modalImg = overlay.querySelector('.lightbox-image');
  const modalTitle = overlay.querySelector('.lightbox-title');
  const modalCategory = overlay.querySelector('.lightbox-category');
  const closeBtn = overlay.querySelector('.lightbox-close');
  const prevBtn = overlay.querySelector('.lightbox-prev');
  const nextBtn = overlay.querySelector('.lightbox-next');

  // Collect all gallery triggers
  const triggers = document.querySelectorAll('.lightbox-trigger');
  lightboxItems = Array.from(triggers).map((el) => ({
    src: el.getAttribute('data-image') || el.querySelector('img')?.getAttribute('src') || '',
    title: el.getAttribute('data-title') || 'EVERCOAT Project',
    category: el.getAttribute('data-category') || 'Interior / Exterior'
  }));

  const showItem = (index) => {
    if (!lightboxItems.length) return;
    if (index < 0) index = lightboxItems.length - 1;
    if (index >= lightboxItems.length) index = 0;
    currentLightboxIndex = index;

    const item = lightboxItems[currentLightboxIndex];
    if (modalImg) modalImg.src = item.src;
    if (modalTitle) modalTitle.textContent = item.title;
    if (modalCategory) modalCategory.textContent = item.category;
  };

  const openLightbox = (index) => {
    showItem(index);
    overlay.classList.add('active');
    overlay.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    overlay.classList.remove('active');
    overlay.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  };

  triggers.forEach((trigger, idx) => {
    trigger.addEventListener('click', (e) => {
      e.preventDefault();
      openLightbox(idx);
    });
  });

  if (closeBtn) closeBtn.addEventListener('click', closeLightbox);
  if (prevBtn) prevBtn.addEventListener('click', () => showItem(currentLightboxIndex - 1));
  if (nextBtn) nextBtn.addEventListener('click', () => showItem(currentLightboxIndex + 1));

  // Close on outside click
  overlay.addEventListener('click', (e) => {
    if (e.target === overlay || e.target.classList.contains('lightbox-backdrop')) {
      closeLightbox();
    }
  });

  // Keyboard navigation
  window.addEventListener('keydown', (e) => {
    if (!overlay.classList.contains('active')) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') {
      const isRtl = document.documentElement.getAttribute('dir') === 'rtl';
      showItem(isRtl ? currentLightboxIndex + 1 : currentLightboxIndex - 1);
    }
    if (e.key === 'ArrowRight') {
      const isRtl = document.documentElement.getAttribute('dir') === 'rtl';
      showItem(isRtl ? currentLightboxIndex - 1 : currentLightboxIndex + 1);
    }
  });
}

/* ==========================================================================
   9. FAQ Accordion
   ========================================================================== */
function initFaqAccordion() {
  const faqItems = document.querySelectorAll('.faq-item');
  if (!faqItems.length) return;

  faqItems.forEach((item) => {
    const trigger = item.querySelector('.faq-trigger');
    if (!trigger) return;

    trigger.addEventListener('click', () => {
      const isActive = item.classList.contains('active');
      // Collapse others optionally or toggle self
      faqItems.forEach((other) => {
        if (other !== item) other.classList.remove('active');
      });
      item.classList.toggle('active', !isActive);
    });
  });
}

/* ==========================================================================
   10. Free Quote / Contact Form Validation & Submission
   ========================================================================== */
function initContactForm() {
  const form = document.getElementById('quote-form');
  if (!form) return;

  const successMessage = document.getElementById('form-success-banner');
  const errorContainer = document.getElementById('form-error-banner');

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (errorContainer) errorContainer.classList.add('hidden');
    if (successMessage) successMessage.classList.add('hidden');

    const fullName = form.querySelector('[name="fullName"]')?.value.trim();
    const email = form.querySelector('[name="email"]')?.value.trim();
    const phone = form.querySelector('[name="phone"]')?.value.trim();
    const propertyType = form.querySelector('[name="propertyType"]')?.value;
    const serviceRequired = form.querySelector('[name="serviceRequired"]')?.value;
    const location = form.querySelector('[name="propertyLocation"]')?.value.trim();
    const area = form.querySelector('[name="approxArea"]')?.value.trim();
    const budget = form.querySelector('[name="budgetRange"]')?.value;
    const description = form.querySelector('[name="projectDescription"]')?.value.trim();

    const errors = [];

    if (!fullName) errors.push('Please enter your full name.');
    
    // Email regex check
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      errors.push('Please provide a valid email address.');
    }

    // Phone check (min 8 digits)
    const phoneClean = phone ? phone.replace(/[^0-9]/g, '') : '';
    if (!phoneClean || phoneClean.length < 8) {
      errors.push('Please provide a valid phone number (minimum 8 digits).');
    }

    if (!serviceRequired) {
      errors.push('Please choose a service required.');
    }

    if (errors.length > 0) {
      if (errorContainer) {
        errorContainer.innerHTML = `
          <div class="p-4 bg-red-100 border-l-4 border-red-500 text-red-800 rounded mb-4 text-sm">
            <p class="font-bold mb-1">Please correct the following errors:</p>
            <ul class="list-disc pl-5 space-y-1">
              ${errors.map((err) => `<li>${err}</li>`).join('')}
            </ul>
          </div>
        `;
        errorContainer.classList.remove('hidden');
        errorContainer.scrollIntoView({ behavior: 'smooth', block: 'center' });
      } else {
        alert(errors.join('\n'));
      }
      return;
    }

    // Record demo inquiry in localStorage
    const demoInquiry = {
      id: 'EQ-' + Date.now().toString().slice(-6),
      fullName,
      email,
      phone,
      propertyType: propertyType || 'Apartment',
      serviceRequired,
      location: location || 'Not specified',
      area: area || 'Not specified',
      budget: budget || '₹25,000 - ₹50,000',
      description: description || 'N/A',
      submittedAt: new Date().toISOString()
    };

    try {
      const existing = JSON.parse(localStorage.getItem('evercoat_enquiries') || '[]');
      existing.unshift(demoInquiry);
      localStorage.setItem('evercoat_enquiries', JSON.stringify(existing.slice(0, 20)));
    } catch (err) {
      console.warn('LocalStorage save error:', err);
    }

    // Show simulated success message
    if (successMessage) {
      successMessage.innerHTML = `
        <div class="p-6 bg-forest-50 dark:bg-forest-900/60 border border-forest/30 text-forest-900 dark:text-ivory rounded-xl text-center shadow-lg">
          <div class="w-12 h-12 bg-forest text-white rounded-full flex items-center justify-center mx-auto mb-3">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
          </div>
          <h4 class="font-serif text-2xl font-bold text-forest dark:text-sage mb-2">Quote Request Received!</h4>
          <p class="text-sm opacity-90 max-w-md mx-auto mb-2">
            Thank you, <strong>${fullName}</strong>. Your reference ID is <strong>${demoInquiry.id}</strong>.
          </p>
          <p class="text-xs text-charcoal/70 dark:text-ivory/70 italic">
            *Demo simulation: Enquiry saved to browser storage. In production, our estimator reaches out within 24 hours.
          </p>
        </div>
      `;
      successMessage.classList.remove('hidden');
      form.reset();
      successMessage.scrollIntoView({ behavior: 'smooth', block: 'center' });
    } else {
      alert(`Quote Request Received for ${fullName}! Ref: ${demoInquiry.id}`);
      form.reset();
    }
  });
}

/* ==========================================================================
   11. Split-Screen Demo Login
   ========================================================================== */
function initDemoLogin() {
  const loginForm = document.getElementById('demo-login-form');
  if (!loginForm) return;

  const togglePasswordBtn = document.getElementById('toggle-password');
  const passwordInput = document.getElementById('login-password');
  const banner = document.getElementById('login-message');
  const forgotPasswordBtn = document.getElementById('forgot-password-btn');
  const socialAuthBtns = document.querySelectorAll('.social-auth-btn');

  if (togglePasswordBtn && passwordInput) {
    togglePasswordBtn.addEventListener('click', () => {
      const isPassword = passwordInput.getAttribute('type') === 'password';
      passwordInput.setAttribute('type', isPassword ? 'text' : 'password');
      togglePasswordBtn.setAttribute('aria-label', isPassword ? 'Hide password' : 'Show password');
      const icon = togglePasswordBtn.querySelector('i');
      if (icon) {
        icon.setAttribute('data-lucide', isPassword ? 'eye-off' : 'eye');
        if (window.lucide) window.lucide.createIcons();
      }
    });
  }

  if (forgotPasswordBtn) {
    forgotPasswordBtn.addEventListener('click', (e) => {
      e.preventDefault();
      if (banner) {
        banner.innerHTML = `
          <div class="p-4 bg-amber-50 dark:bg-amber-950/50 border border-amber-500/40 text-amber-900 dark:text-amber-200 rounded-xl text-sm mb-4 flex items-start gap-3 animate-fade-in">
            <i data-lucide="help-circle" class="w-5 h-5 text-amber-600 mt-0.5 shrink-0"></i>
            <div>
              <p class="font-bold">Password Reset Demonstration</p>
              <p class="text-xs mt-1">Self-service password recovery is simulated in this prototype. Please sign in using the provided demo credentials: <strong>demo@evercoat.example</strong> / <strong>demo123</strong>.</p>
            </div>
          </div>
        `;
        banner.classList.remove('hidden');
        if (window.lucide) window.lucide.createIcons();
      }
    });
  }

  socialAuthBtns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const provider = btn.getAttribute('data-provider') || 'Social provider';
      if (banner) {
        banner.innerHTML = `
          <div class="p-4 bg-sky-50 dark:bg-sky-950/50 border border-sky-500/40 text-sky-900 dark:text-sky-200 rounded-xl text-sm mb-4 flex items-start gap-3 animate-fade-in">
            <i data-lucide="info" class="w-5 h-5 text-sky-600 mt-0.5 shrink-0"></i>
            <div>
              <p class="font-bold">${provider} Sign-In Notice</p>
              <p class="text-xs mt-1">${provider} authentication is not connected in this frontend demonstration. Please use the demo credentials provided below.</p>
            </div>
          </div>
        `;
        banner.classList.remove('hidden');
        if (window.lucide) window.lucide.createIcons();
      }
    });
  });

  loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('login-email')?.value.trim();
    const password = passwordInput?.value.trim();

    if (banner) banner.classList.add('hidden');

    if (!email || !password) {
      if (banner) {
        banner.innerHTML = `
          <div class="p-4 bg-rose-50 dark:bg-rose-950/50 border border-rose-500/40 text-rose-900 dark:text-rose-200 rounded-xl text-sm mb-4 flex items-start gap-3 animate-fade-in">
            <i data-lucide="alert-circle" class="w-5 h-5 text-rose-600 mt-0.5 shrink-0"></i>
            <div>
              <p class="font-bold">Missing Required Fields</p>
              <p class="text-xs mt-1">Please enter both your email address and password.</p>
            </div>
          </div>
        `;
        banner.classList.remove('hidden');
        if (window.lucide) window.lucide.createIcons();
      }
      return;
    }

    // Expected demo credentials
    const validEmail = 'demo@evercoat.example';
    const validPass = 'demo123';

    if (email.toLowerCase() === validEmail.toLowerCase() && password === validPass) {
      if (banner) {
        banner.innerHTML = `
          <div class="p-4 bg-emerald-50 dark:bg-emerald-950/50 border border-emerald-500/40 text-emerald-900 dark:text-emerald-200 rounded-xl text-sm mb-4 flex items-start gap-3 animate-fade-in">
            <i data-lucide="check-circle-2" class="w-5 h-5 text-emerald-600 mt-0.5 shrink-0"></i>
            <div>
              <p class="font-bold">Welcome back, Demo User!</p>
              <p class="text-xs mt-1">Authentication simulated successfully. (This is a frontend demonstration without admin dashboard).</p>
              <a href="index.html" class="inline-flex items-center gap-1.5 mt-2.5 px-3 py-1.5 bg-forest text-white rounded-lg font-semibold text-xs hover:bg-forest-600 transition">
                <span>Return to Home</span>
                <i data-lucide="arrow-right" class="w-3.5 h-3.5 icon-flip-rtl"></i>
              </a>
            </div>
          </div>
        `;
        banner.classList.remove('hidden');
        if (window.lucide) window.lucide.createIcons();
      }
    } else {
      if (banner) {
        banner.innerHTML = `
          <div class="p-4 bg-rose-50 dark:bg-rose-950/50 border border-rose-500/40 text-rose-900 dark:text-rose-200 rounded-xl text-sm mb-4 flex items-start gap-3 animate-fade-in">
            <i data-lucide="alert-triangle" class="w-5 h-5 text-rose-600 mt-0.5 shrink-0"></i>
            <div>
              <p class="font-bold">Invalid Demo Credentials</p>
              <p class="text-xs mt-1">Please use the demo credentials displayed below: <strong>demo@evercoat.example</strong> / <strong>demo123</strong></p>
            </div>
          </div>
        `;
        banner.classList.remove('hidden');
        if (window.lucide) window.lucide.createIcons();
      }
    }
  });
}

/* ==========================================================================
   11b. Split-Screen Demo Registration
   ========================================================================== */
function initRegistrationForm() {
  const registerForm = document.getElementById('demo-register-form');
  if (!registerForm) return;

  const passwordInput = document.getElementById('register-password');
  const confirmPasswordInput = document.getElementById('register-confirm-password');
  const togglePassBtn = document.getElementById('toggle-register-password');
  const toggleConfirmBtn = document.getElementById('toggle-confirm-password');
  const banner = document.getElementById('register-message');
  const strengthMeter = document.getElementById('password-strength-meter');
  const strengthText = document.getElementById('password-strength-text');
  const socialAuthBtns = document.querySelectorAll('.social-register-btn');

  // Password visibility toggles
  const setupToggle = (btn, input) => {
    if (!btn || !input) return;
    btn.addEventListener('click', () => {
      const isPass = input.getAttribute('type') === 'password';
      input.setAttribute('type', isPass ? 'text' : 'password');
      btn.setAttribute('aria-label', isPass ? 'Hide password' : 'Show password');
      const icon = btn.querySelector('i');
      if (icon) {
        icon.setAttribute('data-lucide', isPass ? 'eye-off' : 'eye');
        if (window.lucide) window.lucide.createIcons();
      }
    });
  };

  setupToggle(togglePassBtn, passwordInput);
  setupToggle(toggleConfirmBtn, confirmPasswordInput);

  // Live password strength indicator
  if (passwordInput && strengthMeter && strengthText) {
    passwordInput.addEventListener('input', () => {
      const val = passwordInput.value;
      if (!val) {
        strengthMeter.style.width = '0%';
        strengthMeter.className = 'h-1.5 rounded-full transition-all duration-300 bg-charcoal/20 dark:bg-charcoal-700';
        strengthText.textContent = '';
        return;
      }

      let score = 0;
      if (val.length >= 6) score++;
      if (val.length >= 8) score++;
      if (/[A-Z]/.test(val) && /[a-z]/.test(val)) score++;
      if (/[0-9]/.test(val)) score++;
      if (/[^A-Za-z0-9]/.test(val)) score++;

      if (score <= 2) {
        strengthMeter.style.width = '33%';
        strengthMeter.className = 'h-1.5 rounded-full transition-all duration-300 bg-rose-500';
        strengthText.textContent = 'Weak password';
        strengthText.className = 'text-xs text-rose-600 dark:text-rose-400 font-medium';
      } else if (score <= 3) {
        strengthMeter.style.width = '66%';
        strengthMeter.className = 'h-1.5 rounded-full transition-all duration-300 bg-amber-500';
        strengthText.textContent = 'Moderate strength';
        strengthText.className = 'text-xs text-amber-600 dark:text-amber-400 font-medium';
      } else {
        strengthMeter.style.width = '100%';
        strengthMeter.className = 'h-1.5 rounded-full transition-all duration-300 bg-emerald-500';
        strengthText.textContent = 'Strong password';
        strengthText.className = 'text-xs text-emerald-600 dark:text-emerald-400 font-medium';
      }
    });
  }

  // Social Registration Buttons honest feedback
  socialAuthBtns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const provider = btn.getAttribute('data-provider') || 'Social provider';
      if (banner) {
        banner.innerHTML = `
          <div class="p-4 bg-sky-50 dark:bg-sky-950/50 border border-sky-500/40 text-sky-900 dark:text-sky-200 rounded-xl text-sm mb-4 flex items-start gap-3 animate-fade-in">
            <i data-lucide="info" class="w-5 h-5 text-sky-600 mt-0.5 shrink-0"></i>
            <div>
              <p class="font-bold">${provider} Registration Notice</p>
              <p class="text-xs mt-1">${provider} sign-up is not connected in this frontend demonstration. Please complete the registration form directly.</p>
            </div>
          </div>
        `;
        banner.classList.remove('hidden');
        if (window.lucide) window.lucide.createIcons();
      }
    });
  });

  // Form submission validation
  registerForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('register-name')?.value.trim();
    const email = document.getElementById('register-email')?.value.trim();
    const rawPhone = document.getElementById('register-phone')?.value.trim() || '';
    const phone = rawPhone.replace(/[\s\-]/g, '');
    const password = passwordInput?.value;
    const confirmPassword = confirmPasswordInput?.value;
    const termsChecked = document.getElementById('register-terms')?.checked;

    const errors = [];

    if (!name || name.length < 2) {
      errors.push('Full Name must be at least 2 characters long.');
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      errors.push('Please enter a valid email address.');
    }

    // 10-digit US mobile or phone number validation (standard 10-digit, optional +1 or 1 prefix)
    const cleanPhone = phone.replace(/[\s\-\(\)\.]/g, '').replace(/^(\+1|1)/, '');
    const phoneRegex = /^[2-9]\d{9}$/;
    if (!phoneRegex.test(cleanPhone)) {
      errors.push('Please enter a valid 10-digit phone number (e.g. (512) 555-0198).');
    }

    if (!password || password.length < 6) {
      errors.push('Password must be at least 6 characters long.');
    }

    if (password !== confirmPassword) {
      errors.push('Passwords do not match.');
    }

    if (!termsChecked) {
      errors.push('Please agree to the Terms of Service and Privacy Policy to register.');
    }

    if (errors.length > 0) {
      if (banner) {
        banner.innerHTML = `
          <div class="p-4 bg-rose-50 dark:bg-rose-950/50 border border-rose-500/40 text-rose-900 dark:text-rose-200 rounded-xl text-sm mb-4 space-y-1.5 animate-fade-in">
            <div class="flex items-center gap-2 font-bold text-rose-700 dark:text-rose-300">
              <i data-lucide="alert-triangle" class="w-4 h-4 shrink-0"></i>
              <span>Please review the form:</span>
            </div>
            <ul class="list-disc list-inside text-xs space-y-1 pl-1">
              ${errors.map((err) => `<li>${err}</li>`).join('')}
            </ul>
          </div>
        `;
        banner.classList.remove('hidden');
        if (window.lucide) window.lucide.createIcons();
      }
      return;
    }

    // Honest Demo Feedback
    if (banner) {
      banner.innerHTML = `
        <div class="p-5 bg-emerald-50 dark:bg-emerald-950/50 border border-emerald-500/40 text-emerald-900 dark:text-emerald-200 rounded-xl text-sm mb-4 space-y-2 animate-fade-in">
          <div class="flex items-center gap-2 font-bold text-emerald-800 dark:text-emerald-300 text-base">
            <i data-lucide="check-circle-2" class="w-5 h-5 shrink-0 text-emerald-600"></i>
            <span>Account Details Verified!</span>
          </div>
          <p class="text-xs leading-relaxed">
            Welcome, <strong>${name}</strong>! In this frontend demonstration, user registration is simulated without connecting to a live database. No credentials have been stored.
          </p>
          <div class="pt-2">
            <a href="login.html" class="inline-flex items-center gap-2 px-4 py-2 bg-forest hover:bg-forest-600 text-white rounded-lg text-xs font-semibold shadow transition">
              <span>Proceed to Sign In</span>
              <i data-lucide="arrow-right" class="w-3.5 h-3.5 icon-flip-rtl"></i>
            </a>
          </div>
        </div>
      `;
      banner.classList.remove('hidden');
      if (window.lucide) window.lucide.createIcons();
      registerForm.reset();
      if (strengthMeter) strengthMeter.style.width = '0%';
      if (strengthText) strengthText.textContent = '';
    }
  });
}

/* ==========================================================================
   12. Social Media Profiles Configuration & Management
   ========================================================================== */
/**
 * Genuine social media URL configuration.
 * When left empty, icons are non-clickable decorative badges.
 * When configured with a genuine URL, icons automatically become active links.
 */
const SOCIAL_PROFILES_CONFIG = {
  instagram: '', // e.g. 'https://instagram.com/evercoat_studios'
  facebook: '',  // e.g. 'https://facebook.com/evercoat'
  pinterest: '', // e.g. 'https://pinterest.com/evercoat'
  youtube: ''    // e.g. 'https://youtube.com/@evercoat'
};

function initSocialLinks() {
  const socialLinks = document.querySelectorAll('.social-link');
  socialLinks.forEach((link) => {
    const platform = link.getAttribute('data-platform');
    const configuredUrl = SOCIAL_PROFILES_CONFIG[platform];

    if (configuredUrl && configuredUrl.trim() !== '' && configuredUrl !== '#') {
      link.setAttribute('href', configuredUrl.trim());
      link.setAttribute('target', '_blank');
      link.setAttribute('rel', 'noopener noreferrer');
      link.setAttribute('role', 'link');
      link.removeAttribute('aria-hidden');
      link.removeAttribute('tabindex');
      link.classList.remove('pointer-events-none', 'cursor-default');
      link.classList.add('cursor-pointer', 'hover:scale-105');
    } else {
      link.removeAttribute('href');
      link.removeAttribute('target');
      link.removeAttribute('rel');
      link.setAttribute('aria-hidden', 'true');
      link.setAttribute('tabindex', '-1');
      link.classList.remove('cursor-pointer', 'hover:scale-105');
      link.classList.add('pointer-events-none', 'cursor-default');
    }
  });
}

/* ==========================================================================
   13. Floating Back to Top Button
   ========================================================================== */
function initBackToTop() {
  const btn = document.getElementById('back-to-top-btn');
  if (!btn) return;

  const handleScroll = () => {
    if (window.scrollY > 300) {
      btn.classList.remove('opacity-0', 'pointer-events-none', 'translate-y-4');
      btn.classList.add('opacity-100', 'translate-y-0');
    } else {
      btn.classList.add('opacity-0', 'pointer-events-none', 'translate-y-4');
      btn.classList.remove('opacity-100', 'translate-y-0');
    }
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

/* ==========================================================================
   14. Dynamic Copyright Year
   ========================================================================== */
function initDynamicYear() {
  const currentYear = new Date().getFullYear();
  document.querySelectorAll('.current-year').forEach((el) => {
    el.textContent = currentYear;
  });
}

/* ==========================================================================
   15. Studio Location & Google Maps Configuration
   Easily editable configuration for the business owner.
   ========================================================================== */
const EVERCOAT_LOCATION_CONFIG = {
  businessName: 'EVERCOAT Contractor Studio & Design Workshop',
  streetAddress: '200 Congress Avenue, Suite 400',
  city: 'Austin',
  state: 'Texas',
  postalCode: '78701',
  country: 'United States',
  phone: '+1 (512) 555-0198',
  email: 'hello@evercoat.example',
  businessHours: 'Monday – Saturday: 9:00 AM – 6:00 PM CST',
  // Official Google Maps Embed URL for Austin, Texas
  embedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d110204.74637213491!2d-97.79639535!3d30.267153!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8644b599a0cc032f%3A0x5d9b464bd469d57a!2sAustin%2C%20TX!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus',
  // Genuine Google Maps directions URL for Austin, Texas
  directionsUrl: 'https://maps.google.com/?q=200+Congress+Ave,+Austin,+TX+78701'
};

/* ==========================================================================
   16. Contact Form Referral Preselection (Team & Project CTAs)
   ========================================================================== */
function initContactUrlParams() {
  const form = document.getElementById('quote-form');
  if (!form) return;

  const params = new URLSearchParams(window.location.search);
  const team = params.get('team');
  const project = params.get('project');
  const interest = params.get('interest');

  if (!team && !interest && !project) return;

  const banner = document.getElementById('team-referral-banner');
  const bannerText = document.getElementById('team-referral-text');
  const dismissBtn = document.getElementById('team-referral-dismiss');

  const safeTeam = team ? team.trim() : '';
  const safeProject = project ? project.trim() : '';
  const safeInterest = interest ? interest.trim() : '';

  if (banner && bannerText) {
    if (safeProject) {
      bannerText.textContent = `You're inquiring about our project showcase: "${safeProject}" (${safeInterest || 'Consultation'}).`;
    } else if (safeTeam && safeInterest) {
      bannerText.textContent = `You're contacting us regarding ${safeTeam}'s area of expertise (${safeInterest}).`;
    } else if (safeTeam) {
      bannerText.textContent = `You're contacting us regarding ${safeTeam}'s area of expertise.`;
    } else if (safeInterest) {
      bannerText.textContent = `You're contacting us regarding ${safeInterest}.`;
    }
    banner.classList.remove('hidden');

    if (dismissBtn) {
      dismissBtn.addEventListener('click', () => {
        banner.classList.add('hidden');
      });
    }
  }

  // Pre-select serviceRequired if interest relates to painting, renovation, etc.
  const serviceSelect = form.querySelector('[name="serviceRequired"]');
  if (serviceSelect && safeInterest) {
    const interestLower = safeInterest.toLowerCase();
    let matchedOption = '';
    for (const opt of serviceSelect.options) {
      const optLower = opt.value.toLowerCase();
      if (opt.value && (interestLower.includes(optLower) || optLower.includes(interestLower) || 
         (interestLower.includes('paint') && optLower.includes('paint')) ||
         (interestLower.includes('renov') && optLower.includes('renov')) ||
         (interestLower.includes('design') && optLower.includes('texture')) ||
         (interestLower.includes('texture') && optLower.includes('texture')) ||
         (interestLower.includes('plan') && optLower.includes('multiple')))) {
        matchedOption = opt.value;
        break;
      }
    }
    if (matchedOption) {
      serviceSelect.value = matchedOption;
    } else if (serviceSelect.querySelector('option[value="Multiple Services"]')) {
      serviceSelect.value = 'Multiple Services';
    }
  }

  // Pre-fill project description with customizable message without overwriting existing content
  const descTextarea = form.querySelector('[name="projectDescription"]');
  if (descTextarea && !descTextarea.value) {
    if (safeProject) {
      descTextarea.value = `Hello, I saw your "${safeProject}" showcase in the gallery and would like to discuss a similar project for my home. Please provide information on initial availability and pricing estimates.`;
    } else {
      const teamPart = safeTeam ? `with ${safeTeam}` : 'with your specialist';
      const interestPart = safeInterest ? `regarding ${safeInterest}` : 'regarding our upcoming project';
      descTextarea.value = `Hello, I would like to consult ${teamPart} ${interestPart}. Please provide information on initial site availability and estimates.`;
    }
  }

  // Smooth scroll to form when query params are present
  setTimeout(() => {
    form.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, 400);
}
