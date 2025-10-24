
class CustomNavbar extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: block;
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          backdrop-filter: blur(10px);
          background: rgba(255, 255, 255, 0.95);
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
          transition: all 0.3s ease;
          border-bottom: 1px solid rgba(0, 0, 0, 0.05);
        }
        .navbar-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
          max-width: 1200px;
          margin: 0 auto;
          padding: 1rem 2rem;
        }
        .logo {
          display: flex;
          align-items: center;
          font-family: 'Montserrat', sans-serif;
          font-weight: 700;
          font-size: 1.5rem;
          color: #000;
          text-decoration: none;
          transition: transform 0.2s ease;
        }
        .logo:hover {
          transform: scale(1.03);
        }
        .nav-links {
          display: flex;
          gap: 2rem;
        }
        .nav-link {
          font-family: 'Poppins', sans-serif;
          font-weight: 600;
          color: #1a1a1a;
          text-decoration: none;
          transition: all 0.3s ease;
          position: relative;
          padding: 0.5rem 0;
        }
        .nav-link:hover {
          color: #007BFF;
        }
        .nav-link::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 3px;
          background: #007BFF;
          transition: width 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
        }
        .nav-link:hover::after {
          width: 100%;
        }
        .nav-link.active {
          color: #007BFF;
        }
        .nav-link.active::after {
          width: 100%;
        }
        .burger {
          diclass CustomNavbar extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: block;
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          backdrop-filter: blur(10px);
          background: rgba(255, 255, 255, 0.95);
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
          transition: all 0.3s ease;
          border-bottom: 1px solid rgba(0, 0, 0, 0.05);
        }
        .navbar-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
          max-width: 1200px;
          margin: 0 auto;
          padding: 1rem 2rem;
        }
        .logo {
          font-family: 'Montserrat', sans-serif;
          font-weight: 700;
          font-size: 1.5rem;
          color: #000;
          text-decoration: none;
        }
        .nav-links {
          display: flex;
          gap: 2rem;
        }
        .nav-link {
          font-family: 'Poppins', sans-serif;
          font-weight: 600;
          color: #1a1a1a;
          text-decoration: none;
          transition: all 0.3s ease;
          position: relative;
        }
        .nav-link:hover {
          color: #007BFF;
        }
        .burger {
          display: none;
          cursor: pointer;
        }
        @media (max-width: 768px) {
          .nav-links {
            display: none;
            flex-direction: column;
            position: absolute;
            top: 100%;
            left: 0;
            right: 0;
            background: rgba(255, 255, 255, 0.95);
            padding: 1rem 2rem;
            box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
          }
          .nav-links.active {
            display: flex;
          }
          .burger {
            display: block;
          }
        }
      </style>
      <div class="navbar-container">
        <a href="index.html" class="logo">JC Web Studio</a>
        <div class="burger" id="burger">
          <i data-feather="menu"></i>
        </div>
        <div class="nav-links" id="navLinks">
          <a href="index.html" class="nav-link">Accueil</a>
          <a href="#services" class="nav-link">Services</a>
          <a href="#pricing" class="nav-link">Tarifs</a>
          <a href="#portfolio" class="nav-link">Nos réalisations</a>
          <a href="#faq" class="nav-link">FAQ</a>
          <a href="#contact" class="nav-link">Contact</a>
        </div>
      </div>
    `;

    const burger = this.shadowRoot.getElementById('burger');
    const navLinks = this.shadowRoot.getElementById('navLinks');

    burger.addEventListener('click', () => {
      navLinks.classList.toggle('active');
    });

    const links = this.shadowRoot.querySelectorAll('.nav-link');

    links.forEach(link => {
      link.addEventListener('click', (e) => {
        const href = link.getAttribute('href');

        // Si c’est un lien externe (autre page)
        if (href.includes('index.html')) {
          return; // Laisse le navigateur gérer
        }

        // Si c’est une ancre sur la même page
        if (href.startsWith('#')) {
          e.preventDefault();
          const target = document.querySelector(href);
          if (target) {
            window.scrollTo({
              top: target.offsetTop - 80,
              behavior: 'smooth'
            });
            navLinks.classList.remove('active');
          }
        }
      });
    });
  }
}

customElements.define('custom-navbar', CustomNavbar);
splay: none;
          cursor: pointer;
        }
        @media (max-width: 768px) {
          .nav-links {
            display: none;
            flex-direction: column;
            position: absolute;
            top: 100%;
            left: 0;
            right: 0;
            background: rgba(255, 255, 255, 0.95);
            padding: 1rem 2rem;
            box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
          }
          .nav-links.active {
            display: flex;
          }
          .nav-link {
            padding: 0.5rem 0;
          }
          .burger {
            display: block;
          }
        }
      </style>
      <div class="navbar-container">
        <a href="/index.html" class="logo">JC Web Studio</a>
        <div class="burger" id="burger">
          <i data-feather="menu"></i>
        </div>
        <div class="nav-links" id="navLinks">
          <a href="/index.html" class="nav-link">Accueil</a>
          <a href="#services" class="nav-link">Services</a>
          <a href="#pricing" class="nav-link">Tarifs</a>
          <a href="#portfolio" class="nav-link">Nos réalisations</a>
          <a href="#faq" class="nav-link">FAQ</a>
          <a href="#contact" class="nav-link">Contact</a>
        </div>
      </div>
    `;

    const burger = this.shadowRoot.getElementById('burger');
    const navLinks = this.shadowRoot.getElementById('navLinks');
    
    burger.addEventListener('click', () => {
      navLinks.classList.toggle('active');
    });

    // Highlight active section
    const links = this.shadowRoot.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section[id]');
    
    window.addEventListener('scroll', () => {
      let current = '';
      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= (sectionTop - 100)) {
          current = section.getAttribute('id');
        }
      });

      links.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
          link.classList.add('active');
        }
      });
    });

    // Smooth scrolling
    links.forEach(link => {
      link.addEventListener('click', (e) => {
        const targetId = link.getAttribute('href');
        
        if (targetId.startsWith('/')) {
          window.location.href = targetId;
        } else {
          e.preventDefault();
          const targetElement = document.querySelector(targetId);
          if (targetElement) {
            window.scrollTo({
              top: targetElement.offsetTop - 80,
              behavior: 'smooth'
            });
            navLinks.classList.remove('active');
          }
        }
      });
    });
  }
}
customElements.define('custom-navbar', CustomNavbar);