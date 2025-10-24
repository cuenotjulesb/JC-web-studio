class CustomNavbar extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <nav style="
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        z-index: 1000;
        background: rgba(255,255,255,0.95);
        backdrop-filter: blur(10px);
        box-shadow: 0 4px 15px rgba(0,0,0,0.08);
        padding: 1rem 2rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-family: 'Poppins', sans-serif;
      ">
        <a href='https://cuenotjulesb.github.io/JC-web-studio/index.html'
           style="font-weight:700; font-size:1.4rem; color:black; text-decoration:none;">
          JC Web Studio
        </a>
        <div style="display:flex; gap:2rem;">
          <a href='https://cuenotjulesb.github.io/JC-web-studio/index.html#services' style='text-decoration:none; color:black;'>Services</a>
          <a href='https://cuenotjulesb.github.io/JC-web-studio/index.html#pricing' style='text-decoration:none; color:black;'>Tarifs</a>
          <a href='https://cuenotjulesb.github.io/JC-web-studio/index.html#portfolio' style='text-decoration:none; color:black;'>Réalisations</a>
          <a href='https://cuenotjulesb.github.io/JC-web-studio/index.html#faq' style='text-decoration:none; color:black;'>FAQ</a>
          <a href='https://cuenotjulesb.github.io/JC-web-studio/index.html#contact' style='text-decoration:none; color:black;'>Contact</a>
        </div>
      </nav>
    `;
  }
}

customElements.define('custom-navbar', CustomNavbar);
