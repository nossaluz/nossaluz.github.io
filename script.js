document.addEventListener('DOMContentLoaded', () => {

  // --- MOBILE NAVIGATION BAR TOGGLE ---
  const navToggle = document.querySelector('.nav-toggle');
  const mobileMenu = document.getElementById('mobile-menu');
  const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

  function toggleMenu() {
    const isExpanded = navToggle.getAttribute('aria-expanded') === 'true';
    navToggle.setAttribute('aria-expanded', !isExpanded);
    navToggle.classList.toggle('open');
    mobileMenu.classList.toggle('open');
    mobileMenu.setAttribute('aria-hidden', isExpanded);
  }

  navToggle.addEventListener('click', toggleMenu);

  // Close mobile menu when clicking a link
  mobileNavLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (mobileMenu.classList.contains('open')) {
        toggleMenu();
      }
    });
  });


  // --- HEADER SCROLL ACTION ---
  const header = document.querySelector('.header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });


  // --- ENTRANCE SCROLL ANIMATION (Intersection Observer) ---
  const scrollElements = document.querySelectorAll('.fade-in-up, .fade-in-left, .fade-in-right');

  const elementObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-active');
        // Unobserve once animated to save browser calculations
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.15,
    rootMargin: '0px 0px -50px 0px'
  });

  scrollElements.forEach(el => {
    elementObserver.observe(el);
  });


  // --- PORTFOLIO GALLERY FILTERS ---
  const filterButtons = document.querySelectorAll('.filter-btn');
  const galleryItems = document.querySelectorAll('.gallery-item');

  filterButtons.forEach(button => {
    button.addEventListener('click', (e) => {
      // 1. Update active state of buttons
      filterButtons.forEach(btn => {
        btn.classList.remove('active');
        btn.setAttribute('aria-selected', 'false');
      });
      button.classList.add('active');
      button.setAttribute('aria-selected', 'true');

      // 2. Filter gallery items
      const filterValue = button.getAttribute('data-filter');

      galleryItems.forEach(item => {
        const category = item.getAttribute('data-category');
        
        // Visual transition: scale down first, then hide/show
        item.style.transform = 'scale(0.85)';
        item.style.opacity = '0';
        
        setTimeout(() => {
          if (filterValue === 'all' || category === filterValue) {
            item.classList.remove('hidden');
            // Request animation frame for smooth fade-in
            requestAnimationFrame(() => {
              item.style.transform = 'scale(1)';
              item.style.opacity = '1';
            });
          } else {
            item.classList.add('hidden');
          }
        }, 300); // matches scaling transition
      });
    });
  });


  // --- ACTIVE LINK HIGHLIGHT ON SCROLL ---
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  function highlightNavSection() {
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 120; // offset for fixed header
      const sectionId = current.getAttribute('id');

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
          }
        });
      }
    });
  }

  window.addEventListener('scroll', highlightNavSection);

});
