/**
 * Portfolio Mohammed Smirès - GitHub Pages Interactive Logic
 * Support bilingue FR / EN & Gestionnaire de téléchargement CV
 */

document.addEventListener('DOMContentLoaded', () => {
  // ==========================================================================
  // 1. GESTION DU MULTILINGUE (i18n)
  // ==========================================================================
  let currentLang = localStorage.getItem('portfolio_lang') || 'fr';

  function setLanguage(lang) {
    if (typeof translations === 'undefined' || !translations[lang]) {
      console.warn(`Traduction non disponible pour la langue: ${lang}`);
      return;
    }

    currentLang = lang;
    localStorage.setItem('portfolio_lang', lang);
    document.documentElement.setAttribute('lang', lang);

    const t = translations[lang];

    // Mise à jour balises META / SEO
    if (t.page_title) document.title = t.page_title;
    
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc && t.meta_desc) metaDesc.setAttribute('content', t.meta_desc);

    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle && t.og_title) ogTitle.setAttribute('content', t.og_title);

    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc && t.og_desc) ogDesc.setAttribute('content', t.og_desc);

    // Mise à jour de tous les éléments avec [data-i18n]
    document.querySelectorAll('[data-i18n]').forEach((el) => {
      const key = el.getAttribute('data-i18n');
      if (t[key] !== undefined) {
        if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
          // pas d'écrasement de valeur saisie
        } else if (el.tagName === 'OPTION') {
          el.textContent = t[key];
        } else {
          el.innerHTML = t[key];
        }
      }
    });

    // Mise à jour des placeholders [data-i18n-placeholder]
    document.querySelectorAll('[data-i18n-placeholder]').forEach((el) => {
      const key = el.getAttribute('data-i18n-placeholder');
      if (t[key] !== undefined) {
        el.setAttribute('placeholder', t[key]);
      }
    });

    // Mise à jour des attributs aria [data-i18n-aria]
    document.querySelectorAll('[data-i18n-aria]').forEach((el) => {
      const key = el.getAttribute('data-i18n-aria');
      if (t[key] !== undefined) {
        el.setAttribute('aria-label', t[key]);
      }
    });

    // Mise à jour des attributs title [data-i18n-title]
    document.querySelectorAll('[data-i18n-title]').forEach((el) => {
      const key = el.getAttribute('data-i18n-title');
      if (t[key] !== undefined) {
        el.setAttribute('title', t[key]);
      }
    });

    // Mise à jour visuelle des boutons de langue
    document.querySelectorAll('.ms-lang-btn').forEach((btn) => {
      const btnLang = btn.getAttribute('data-lang');
      if (btnLang === lang) {
        btn.classList.add('active');
        btn.setAttribute('aria-pressed', 'true');
      } else {
        btn.classList.remove('active');
        btn.setAttribute('aria-pressed', 'false');
      }
    });
  }

  // Écouteurs sur les boutons de changement de langue
  document.querySelectorAll('.ms-lang-btn').forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const targetLang = btn.getAttribute('data-lang');
      if (targetLang && targetLang !== currentLang) {
        setLanguage(targetLang);
      }
    });
  });

  // Initialisation immédiate de la langue (par défaut FR si aucun choix mémorisé)
  setLanguage(currentLang);

  // ==========================================================================
  // 2. GESTION DU MENU DÉROULANT CV (NAVBAR DROPDOWN)
  // ==========================================================================
  const cvDropdowns = document.querySelectorAll('.ms-cv-dropdown');
  cvDropdowns.forEach((dropdown) => {
    const toggleBtn = dropdown.querySelector('.ms-cv-dropdown-toggle');
    if (toggleBtn) {
      toggleBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        const isOpen = dropdown.classList.contains('open');
        // Fermer tous les dropdowns avant d'ouvrir celui-ci
        cvDropdowns.forEach(d => d.classList.remove('open'));
        if (!isOpen) {
          dropdown.classList.add('open');
          toggleBtn.setAttribute('aria-expanded', 'true');
        } else {
          toggleBtn.setAttribute('aria-expanded', 'false');
        }
      });
    }
  });

  // Fermer le dropdown lors d'un clic en dehors
  document.addEventListener('click', () => {
    cvDropdowns.forEach((dropdown) => {
      dropdown.classList.remove('open');
      const toggleBtn = dropdown.querySelector('.ms-cv-dropdown-toggle');
      if (toggleBtn) toggleBtn.setAttribute('aria-expanded', 'false');
    });
  });

  // Fermer le dropdown avec la touche Échap
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      cvDropdowns.forEach((dropdown) => {
        dropdown.classList.remove('open');
        const toggleBtn = dropdown.querySelector('.ms-cv-dropdown-toggle');
        if (toggleBtn) toggleBtn.setAttribute('aria-expanded', 'false');
      });
    }
  });

  // ==========================================================================
  // 3. MENU MOBILE BURGER
  // ==========================================================================
  const burger = document.querySelector('.ms-burger');
  const navLinks = document.querySelector('.ms-nav-links');

  if (burger && navLinks) {
    burger.addEventListener('click', () => {
      navLinks.classList.toggle('open');
      burger.classList.toggle('toggle');
    });

    // Fermer le menu mobile lors d'un clic sur un lien
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('open');
        burger.classList.remove('toggle');
      });
    });
  }

  // ==========================================================================
  // 4. NAVIGATION ACTIVE AU DÉFILEMENT (IntersectionObserver)
  // ==========================================================================
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

  // ==========================================================================
  // 5. FILTRAGE DES PROJETS IA
  // ==========================================================================
  const filterBtns = document.querySelectorAll('.ms-filter-btn');
  const projectCards = document.querySelectorAll('.ms-project-card');

  if (filterBtns.length > 0) {
    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
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

  // ==========================================================================
  // 6. FORMULAIRE DE CONTACT AVEC SUPPORT MULTILINGUE
  // ==========================================================================
  const contactForm = document.getElementById('ms-contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = document.getElementById('form-name').value;
      const email = document.getElementById('form-email').value;
      const company = document.getElementById('form-company').value || (currentLang === 'en' ? 'Not specified' : 'Non spécifié');
      const subject = document.getElementById('form-subject').value;
      const message = document.getElementById('form-message').value;

      const mailtoUrl = `mailto:medsmires@outlook.com?subject=${encodeURIComponent(`[Portfolio] ${subject} - ${name} (${company})`)}&body=${encodeURIComponent(
        currentLang === 'en' 
          ? `Hello Mohammed,\n\n${message}\n\nFrom: ${name}\nEmail: ${email}\nCompany: ${company}`
          : `Bonjour Mohammed,\n\n${message}\n\nDe : ${name}\nEmail : ${email}\nSociété : ${company}`
      )}`;

      const t = translations[currentLang] || translations.fr;
      alert(`${t.form_alert_thanks || 'Merci'} ${name} ! ${t.form_alert_body || "Votre client de messagerie va s'ouvrir pour transmettre directement votre message à Mohammed Smirès."}`);
      window.location.href = mailtoUrl;
    });
  }
});
