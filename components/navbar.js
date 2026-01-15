class PortfolioNavbar extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.render();
    this.addEventListeners();
  }

  render() {
    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: block;
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 50;
          backdrop-filter: blur(10px);
          background: rgba(255, 255, 255, 0.8);
          border-bottom: 1px solid rgba(229, 231, 235, 0.5);
          transition: all 0.3s ease;
        }
        .dark :host {
          background: rgba(17, 24, 39, 0.8);
          border-bottom: 1px solid rgba(55, 65, 81, 0.5);
        }

        .container {
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 1rem;
        }

        .navbar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          height: 4rem;
        }

        .logo {
          font-size: 1.25rem;
          font-weight: 700;
          color: #0ea5e9;
          text-decoration: none;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .logo-icon {
          width: 2rem;
          height: 2rem;
          background: linear-gradient(90deg, #0ea5e9 0%, #14b8a6 100%);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-size: 0.875rem;
          font-weight: bold;
        }

        .nav-links {
          display: flex;
          gap: 2rem;
          align-items: center;
        }

        .nav-link {
          color: #374151;
          text-decoration: none;
          font-weight: 500;
          transition: color 0.3s;
          position: relative;
        }

        .dark .nav-link {
          color: #d1d5db;
        }

        .nav-link:hover {
          color: #0ea5e9;
        }

        .nav-link.active::after {
          content: '';
          position: absolute;
          bottom: -4px;
          left: 0;
          right: 0;
          height: 2px;
          background: linear-gradient(90deg, #0ea5e9 0%, #14b8a6 100%);
          border-radius: 2px;
        }

        .actions {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .theme-toggle {
          background: none;
          border: none;
          cursor: pointer;
          color: #6b7280;
          padding: 0.5rem;
          border-radius: 0.5rem;
          transition: background 0.3s;
        }

        .theme-toggle:hover {
          background: rgba(0, 0, 0, 0.05);
        }

        .dark .theme-toggle:hover {
          background: rgba(255, 255, 255, 0.1);
        }

        .mobile-menu-button {
          display: none;
          background: none;
          border: none;
          cursor: pointer;
          color: #374151;
          padding: 0.5rem;
          border-radius: 0.5rem;
        }

        .dark .mobile-menu-button {
          color: #d1d5db;
        }

        .mobile-menu {
          display: none;
          padding: 1rem;
          background: white;
          border-top: 1px solid #e5e7eb;
        }

        .dark .mobile-menu {
          background: #1f2937;
          border-top: 1px solid #374151;
        }

        .mobile-links {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        @media (max-width: 768px) {
          .nav-links {
            display: none;
          }
          .mobile-menu-button {
            display: block;
          }
        }

        @media (min-width: 769px) {
          .mobile-menu {
            display: none !important;
          }
        }
      </style>

      <div class="container">
        <nav class="navbar" role="navigation" aria-label="Главная навигация">
          <a href="/" class="logo" aria-label="На главную">
            <div class="logo-icon">ДВ</div>
            Денис Веретенников
          </a>
          <div class="nav-links">
            <a href="/" class="nav-link active" aria-current="page">Главная</a>
            <a href="#experience" class="nav-link">Опыт</a>
            <a href="#education" class="nav-link">Образование</a>
            <a href="#skills" class="nav-link">Навыки</a>
            <a href="/portfolio.html" class="nav-link">Портфолио</a>
          </div>
          <div class="actions">
            <button class="theme-toggle" aria-label="Переключить тему">
              <svg class="sun-icon" width="20" height="20" fill="currentColor" viewBox="0 0 24 24" style="display: none;">
                <path d="M12 17a5 5 0 1 0 0-10 5 5 0 0 0 0 10zm0-13a1 1 0 0 1 1 1v2a1 1 0 0 1-2 0V5a1 1 0 0 1 1-1zm0 16a1 1 0 0 1 1 1v2a1 1 0 0 1-2 0v-2a1 1 0 0 1 1-1zM5.64 7.05a1 1 0 0 1 .7 1.23l-.5 1.73a1 1 0 1 1-1.93-.56l.5-1.73a1 1 0 0 1 1.23-.7zm12.68 8.14a1 1 0 0 1 .7 1.23l-.5 1.73a1 1 0 1 1-1.93-.56l.5-1.73a1 1 0 0 1 1.23-.7zM5.64 16.95a1 1 0 0 1-1.23.7l-1.73-.5a1 1 0 0 1 .56-1.93l1.73.5a1 1 0 0 1 .67 1.23zm12.68-8.14a1 1 0 0 1-1.23.7l-1.73-.5a1 1 0 0 1 .56-1.93l1.73.5a1 1 0 0 1 .67 1.23zM3 11a1 1 0 0 1 1-1h2a1 1 0 0 1 0 2H4a1 1 0 0 1-1-1zm14 0a1 1 0 0 1 1-1h2a1 1 0 0 1 0 2h-2a1 1 0 0 1-1-1z"/>
              </svg>
              <svg class="moon-icon" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                <path d="M21.64 13a1 1 0 0 0-1.05-.14 8 8 0 0 1-9.58-9.58A1 1 0 0 0 11 2a10 10 0 1 0 10 10 1 1 0 0 0-.36-.78z"/>
              </svg>
            </button>

            <button class="mobile-menu-button" aria-label="Мобильное меню" aria-expanded="false">
              <svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M3 12h18M3 6h18M3 18h18"/>
              </svg>
            </button>
          </div>
        </nav>

        <div class="mobile-menu hidden">
          <div class="mobile-links">
            <a href="/" class="nav-link active" aria-current="page">Главная</a>
            <a href="#experience" class="nav-link">Опыт</a>
            <a href="#education" class="nav-link">Образование</a>
            <a href="#skills" class="nav-link">Навыки</a>
            <a href="/portfolio.html" class="nav-link">Портфолио</a>
          </div>
        </div>
      </div>
    `;
  }

  addEventListeners() {
    const themeToggle = this.shadowRoot.querySelector('.theme-toggle');
    const mobileMenuButton = this.shadowRoot.querySelector('.mobile-menu-button');
    const mobileMenu = this.shadowRoot.querySelector('.mobile-menu');

    // Theme toggle
    if (themeToggle) {
      themeToggle.addEventListener('click', () => {
        const isDark = document.documentElement.classList.toggle('dark');
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
        this.updateThemeIcon(isDark);
      });
      
      // Set initial icon
      this.updateThemeIcon(document.documentElement.classList.contains('dark'));
    }

    // Mobile menu toggle
    if (mobileMenuButton && mobileMenu) {
      mobileMenuButton.addEventListener('click', () => {
        const isExpanded = mobileMenuButton.getAttribute('aria-expanded') === 'true';
        mobileMenuButton.setAttribute('aria-expanded', !isExpanded);
        mobileMenu.classList.toggle('hidden');
      });
    }

    // Close mobile menu when clicking outside
    document.addEventListener('click', (event) => {
      if (!this.shadowRoot.contains(event.target) && mobileMenu && !mobileMenu.classList.contains('hidden')) {
        mobileMenu.classList.add('hidden');
        mobileMenuButton.setAttribute('aria-expanded', 'false');
      }
    });

    // Update active nav link based on scroll
    window.addEventListener('scroll', this.updateActiveLink.bind(this));
  }

  updateThemeIcon(isDark) {
    const sunIcon = this.shadowRoot.querySelector('.sun-icon');
    const moonIcon = this.shadowRoot.querySelector('.moon-icon');
    
    if (sunIcon && moonIcon) {
      if (isDark) {
        sunIcon.style.display = 'block';
        moonIcon.style.display = 'none';
      } else {
        sunIcon.style.display = 'none';
        moonIcon.style.display = 'block';
      }
    }
  }

  updateActiveLink() {
    const links = this.shadowRoot.querySelectorAll('.nav-link');
    const scrollPos = window.scrollY + 100;

    links.forEach(link => {
      const href = link.getAttribute('href');
      if (href.startsWith('#')) {
        const section = document.querySelector(href);
        if (section) {
          const { offsetTop, offsetHeight } = section;
          if (scrollPos >= offsetTop && scrollPos < offsetTop + offsetHeight) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        }
      } else if (href === '/' && window.location.pathname === '/') {
        if (scrollPos < 100) {
          link.classList.add('active');
        } else {
          link.classList.remove('active');
        }
      }
    });
  }
}

customElements.define('portfolio-navbar', PortfolioNavbar);