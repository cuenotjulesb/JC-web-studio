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
          background: rgba(255, 255, 255, 0.98);
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
          backdrop-filter: blur(10px);
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
            background: rgba(255, 255, 255, 0.98);
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
        <a href="https://cuenotjulesb.github.io/JC-web-studio/index.html" class="logo">JC Web Studio</a>
        <div class="burger" id="burger">
          <i data-feather="menu"></i>
        </div>
        <div class="nav-links" id="navLinks">
          <a href="https://cuenotjulesb.github.io/JC-web-studio/index.html#services" class="nav-link">Services</a>
          <a href="https://cuenotjulesb.github.io/JC-web-studio/index.html#pricing" class="nav-link">Tarifs</a>
          <a href="https://cuenotjulesb.github.io/JC-web-studio/index.html#portfolio" class="nav-link">Nos réalisations</a>
          <a href="https://cuenotjulesb.github.io/JC-web-studio/index.html#faq" class="nav-link">FAQ</a>
          <a href="https://cuenotjulesb.github.io/JC-web-studio/index.html#contact" class="nav-link">Contact</a>
        </div>
      </div>
    `;

    // Fonction burger
    const burger = this.shadowRoot.getElementById('burger');
    const navLinks = this.shadowRoot.getElementById('navLinks');
    burger.addEventListener('click', () => {
      navLinks.classList.toggle('active');
    });

    // Forcer l’exécution de feather-icons dans le shadowRoot
    const featherScript = document.createElement('script');
    featherScript.innerHTML = "feather.replace()";
    this.shadowRoot.appendChild(featherScript);
  }
}

customElements.define('custom-navbar', CustomNavbar);
