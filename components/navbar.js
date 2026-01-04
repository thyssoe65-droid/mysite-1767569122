class CustomNavbar extends HTMLElement {
    connectedCallback() {
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `\
            <style>
                :host {
                    display: block;
                    position: fixed;
                    top: 0;
                    left: 0;
                    right: 0;
                    z-index: 1000;
                    transition: all 0.3s ease;
                }

                .navbar {
                    background: rgba(0, 0, 0, 0.8);
                    backdrop-filter: blur(10px);
                    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
                    padding: 1rem 2rem;
                    transition: all 0.3s ease;
                }

                .navbar.scrolled {
                    background: rgba(0, 0, 0, 0.95);
                    padding: 0.5rem 2rem;
                }

                .navbar-container {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    max-width: 1200px;
                    margin: 0 auto;
                }

                .logo {
                    font-family: 'Playfair Display', serif;
                    font-size: 1.5rem;
                    font-weight: 300;
                    letter-spacing: 2px;
                    color: white;
                    text-decoration: none;
                }

                .nav-links {
                    display: flex;
                    gap: 2rem;
                    align-items: center;
                }

                .nav-link {
                    color: white;
                    text-decoration: none;
                    font-weight: 300;
                    font-size: 0.9rem;
                    letter-spacing: 1px;
                    transition: all 0.3s ease;
                    position: relative;
                }

                .nav-link:hover {
                    color: #d4af37;
                }

                .nav-link::after {
                    content: '';
                    position: absolute;
                    bottom: -5px;
                    left: 0;
                    width: 0;
                    height: 1px;
                    background: #d4af37;
                    transition: width 0.3s ease;
                }

                .nav-link:hover::after {
                    width: 100%;
                }

                .mobile-menu-btn {
                    display: none;
                    background: none;
                    border: none;
                    color: white;
                    cursor: pointer;
                }

                .mobile-menu {
                    display: none;
                    position: absolute;
                    top: 100%;
                    left: 0;
                    right: 0;
                    background: rgba(0, 0, 0, 0.95);
                    backdrop-filter: blur(10px);
                    border-top: 1px solid rgba(255, 255, 255, 0.1);
                    padding: 1rem 2rem;
                }

                .mobile-menu.open {
                    display: block;
                }

                .mobile-nav-links {
                    display: flex;
                    flex-direction: column;
                    gap: 1rem;
                }

                @media (max-width: 768px) {
                    .nav-links {
                        display: none;
                    }

                    .mobile-menu-btn {
                        display: block;
                    }

                    .navbar {
                        padding: 1rem;
                    }

                    .navbar.scrolled {
                        padding: 0.5rem 1rem;
                    }
                }
            </style>
            <nav class="navbar">
                <div class="navbar-container">
                    <a href="#" class="logo">LE DIJO</a>
                    <div class="nav-links">
                        <a href="#carte" class="nav-link">CARTE</a>
                        <a href="#horaires" class="nav-link">HORAIRES</a>
                        <a href="#reservation" class="nav-link">RÉSERVER</a>
                    </div>
                    <button class="mobile-menu-btn">
                        <i data-feather="menu"></i>
                    </button>
                </div>
                <div class="mobile-menu">
                    <div class="mobile-nav-links">
                        <a href="#carte" class="nav-link">CARTE</a>
                        <a href="#horaires" class="nav-link">HORAIRES</a>
                        <a href="#reservation" class="nav-link">RÉSERVER</a>
                    </div>
                </div>
            </nav>
        `;

        // Add scroll behavior
        this.handleScroll = this.handleScroll.bind(this);
        this.toggleMobileMenu = this.toggleMobileMenu.bind(this);
        
        window.addEventListener('scroll', this.handleScroll);
        
        const mobileMenuBtn = this.shadowRoot.querySelector('.mobile-menu-btn');
        mobileMenuBtn.addEventListener('click', this.toggleMobileMenu);

        // Close mobile menu when clicking on links
        const mobileLinks = this.shadowRoot.querySelectorAll('.mobile-nav-links .nav-link');
        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                this.toggleMobileMenu(false);
            });
        });
    }

    handleScroll() {
        const navbar = this.shadowRoot.querySelector('.navbar');
        if (window.scrollY > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    }

    toggleMobileMenu(force) {
        const mobileMenu = this.shadowRoot.querySelector('.mobile-menu');
        if (force !== undefined) {
            mobileMenu.classList.toggle('open', force);
        } else {
            mobileMenu.classList.toggle('open');
        }
    }

    disconnectedCallback() {
        window.removeEventListener('scroll', this.handleScroll);
    }
}

customElements.define('custom-navbar', CustomNavbar);