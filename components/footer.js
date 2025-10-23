
class CustomFooter extends HTMLElement {
    connectedCallback() {
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <style>
                footer {
                    background-color: #1a202c;
                    color: white;
                    padding: 3rem 2rem;
                    text-align: center;
                }
                .footer-content {
                    max-width: 1200px;
                    margin: 0 auto;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                }
                .footer-links {
                    display: flex;
                    flex-wrap: wrap;
                    justify-content: center;
                    gap: 2rem;
                    margin-bottom: 2rem;
                }
                .footer-links a {
                    color: white;
                    text-decoration: none;
                    transition: color 0.3s;
                }
                .footer-links a:hover {
                    color: #007BFF;
                }
                .social-links {
                    display: flex;
                    gap: 1rem;
                    margin-bottom: 1.5rem;
                }
                .social-links a {
                    color: white;
                    background: rgba(255, 255, 255, 0.1);
                    width: 40px;
                    height: 40px;
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    transition: background 0.3s;
                }
                .social-links a:hover {
                    background: rgba(255, 255, 255, 0.2);
                }
                .copyright {
                    margin-top: 1rem;
                    color: rgba(255, 255, 255, 0.7);
                    font-size: 0.9rem;
                }
            </style>
            <footer>
                <div class="footer-content">
                    <div class="footer-links">
                        <a href="/index.html">Accueil</a>
                        <a href="#services">Services</a>
                        <a href="#pricing">Tarifs</a>
                        <a href="#portfolio">Nos réalisations</a>
                        <a href="#faq">FAQ</a>
                        <a href="#contact">Contact</a>
                    </div>
                    <div class="social-links">
                        <a href="#"><i data-feather="facebook"></i></a>
                        <a href="#"><i data-feather="instagram"></i></a>
                        <a href="#"><i data-feather="twitter"></i></a>
                        <a href="#"><i data-feather="linkedin"></i></a>
                    </div>
                    <p class="copyright">© 2023 JC Web Studio. Tous droits réservés.</p>
                </div>
            </footer>
        `;
    }
}

customElements.define('custom-footer', CustomFooter);