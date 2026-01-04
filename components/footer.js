class CustomFooter extends HTMLElement {
    connectedCallback() {
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `\
            <style>
                :host {
                    display: block;
                    background: #000;
                    border-top: 1px solid rgba(255, 255, 255, 0.1);
                }

                .footer {
                    padding: 3rem 2rem;
                    max-width: 1200px;
                    margin: 0 auto;
                }

                .footer-content {
                    display: grid;
                    grid-template-columns: 1fr auto;
                    gap: 3rem;
                    align-items: center;
                }

                .footer-info h3 {
                    font-family: 'Playfair Display', serif;
                    font-size: 1.5rem;
                    font-weight: 300;
                    margin-bottom: 1rem;
                    letter-spacing: 2px;
                }

                .footer-info p {
                    color: #888;
                    font-size: 0.9rem;
                    line-height: 1.6;
                }

                .footer-contact {
                    text-align: right;
                }

                .footer-contact p {
                    color: #888;
                    font-size: 0.9rem;
                    margin-bottom: 0.5rem;
                }

                .footer-bottom {
                    border-top: 1px solid rgba(255, 255, 255, 0.1);
                    padding-top: 2rem;
                    margin-top: 2rem;
                    text-align: center;
                    color: #666;
                    font-size: 0.8rem;
                }

                .social-links {
                    display: flex;
                    gap: 1rem;
                    justify-content: flex-end;
                    margin-top: 1rem;
                }

                .social-link {
                    color: #888;
                    transition: color 0.3s ease;
                }

                .social-link:hover {
                    color: white;
                }

                @media (max-width: 768px) {
                    .footer-content {
                        grid-template-columns: 1fr;
                        gap: 2rem;
                        text-align: center;
                    }

                    .footer-contact {
                        text-align: center;
                    }

                    .social-links {
                        justify-content: center;
                    }

                    .footer {
                        padding: 2rem 1rem;
                    }
                }
            </style>
            <footer class="footer">
                <div class="footer-content">
                    <div class="footer-info">
                        <h3>LE DIJO</h3>
                        <p>Restaurant semi-gastronomique</p>
                        <p>La Rochelle, France</p>
                    </div>
                    <div class="footer-contact">
                        <p><i data-feather="phone" class="inline mr-2 w-4 h-4"></i> 06 56 87 01 75</p>
<p><i data-feather="mail" class="inline mr-2 w-4 h-4"></i> contact@ledijo.fr</p>
                        <div class="social-links">
                            <a href="#" class="social-link">
                                <i data-feather="instagram" class="w-5 h-5"></i>
                            </a>
                            <a href="#" class="social-link">
                                <i data-feather="facebook" class="w-5 h-5"></i>
                            </a>
                            <a href="#" class="social-link">
                                <i data-feather="map-pin" class="w-5 h-5"></i>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="footer-bottom">
                    <p>&copy; 2024 Le Dijo. Tous droits réservés.</p>
                </div>
            </footer>
        `;
    }
}

customElements.define('custom-footer', CustomFooter);