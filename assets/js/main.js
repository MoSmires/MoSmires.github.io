/**
 * Portfolio Mohammed Smirès - GitHub Pages Interactive Logic
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Mobile Menu Toggle
  const burger = document.querySelector('.ms-burger');
  const navLinks = document.querySelector('.ms-nav-links');

  if (burger && navLinks) {
    burger.addEventListener('click', () => {
      navLinks.classList.toggle('open');
      burger.classList.toggle('toggle');
    });

    // Close mobile nav when clicking a link
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('open');
        burger.classList.remove('toggle');
      });
    });
  }

  // 2. Navigation Active State on Scroll (IntersectionObserver)
  const sections = document.querySelectorAll('section[id]');
  const navItems = document.querySelectorAll('.ms-nav-links a[href^="#"]');

  const observerOptions = {
    root: null,
    rootMargin: '-20% 0px -70% 0px',
    threshold: 0
  };

  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navItems.forEach(item => {
          if (item.getAttribute('href') === `#${id}`) {
            item.classList.add('active');
          } else {
            item.classList.remove('active');
          }
        });
      }
    });
  }, observerOptions);

  sections.forEach(sec => sectionObserver.observe(sec));

  // 3. Projets IA Filter System
  const filterBtns = document.querySelectorAll('.ms-filter-btn');
  const projectCards = document.querySelectorAll('.ms-project-card');

  if (filterBtns.length > 0) {
    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        // Toggle active button class
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const filterVal = btn.getAttribute('data-filter');

        projectCards.forEach(card => {
          if (filterVal === 'all') {
            card.style.display = 'block';
          } else {
            const categories = card.getAttribute('data-category') || '';
            if (categories.includes(filterVal)) {
              card.style.display = 'block';
            } else {
              card.style.display = 'none';
            }
          }
        });
      });
    });
  }

  // 4. Contact Form Handler (Pre-fills email client or triggers alert)
  const contactForm = document.getElementById('ms-contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = document.getElementById('form-name').value;
      const email = document.getElementById('form-email').value;
      const company = document.getElementById('form-company').value || 'Non spécifié';
      const subject = document.getElementById('form-subject').value;
      const message = document.getElementById('form-message').value;

      // Construct mailto URL as instant fallback
      const mailtoUrl = `mailto:medsmires@outlook.com?subject=${encodeURIComponent(`[Portfolio] ${subject} - ${name} (${company})`)}&body=${encodeURIComponent(`Bonjour Mohammed,\n\n${message}\n\nDe : ${name}\nEmail : ${email}\nSociété : ${company}`)}`;

      // Alert confirmation
      alert(`Merci ${name} ! Votre client de messagerie va s'ouvrir pour transmettre directement votre message à Mohammed Smirès.`);
      window.location.href = mailtoUrl;
    });
  }
});
