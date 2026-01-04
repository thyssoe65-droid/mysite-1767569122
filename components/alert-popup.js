class AlertPopup extends HTMLElement {
    connectedCallback() {
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `\
            <style>
                :host {
                    display: block;
                    position: fixed;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%) scale(0.9);
                    z-index: 9999;
                    opacity: 0;
                    transition: opacity 0.3s ease, transform 0.3s ease;
                }

                :host(.show) {
                    opacity: 1;
                    transform: translate(-50%, -50%) scale(1);
                }

                .popup-overlay {
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background: rgba(0, 0, 0, 0.8);
                    backdrop-filter: blur(5px);
                    z-index: 9998;
                    opacity: 0;
                    transition: opacity 0.3s ease;
                }

                .popup-overlay.show {
                    opacity: 1;
                }
                .alert-popup {
                    background: rgba(0, 0, 0, 0.95);
                    border: 1px solid rgba(255, 255, 255, 0.2);
                    border-radius: 8px;
                    padding: 2rem;
                    max-width: 500px;
                    text-align: center;
                    position: relative;
                    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
                    color: white;
                }
.alert-icon {
                    width: 48px;
                    height: 48px;
                    color: #d4af37;
                    margin-bottom: 1rem;
                }
                .alert-title {
                    font-family: 'Playfair Display', serif;
                    font-size: 1.5rem;
                    font-weight: 300;
                    letter-spacing: 1px;
                    margin-bottom: 1rem;
                    color: white;
                }

                .alert-message {
                    color: #ccc;
                    line-height: 1.6;
                    margin-bottom: 1.5rem;
                }
.close-btn {
                    background: #d4af37;
                    color: black;
                    border: none;
                    padding: 0.75rem 2rem;
                    font-weight: 300;
                    letter-spacing: 1px;
                    border-radius: 4px;
                    cursor: pointer;
                    transition: all 0.3s ease;
                    font-size: 0.9rem;
                }

                .close-btn:hover {
                    background: #b8941f;
                    transform: scale(1.05);
                }
            </style>
            <div class="popup-overlay"></div>
            <div class="alert-popup">
                <i data-feather="alert-triangle" class="alert-icon"></i>
                <h3 class="alert-title">FERMETURE EXCEPTIONNELLE</h3>
                <p class="alert-message">
                    Le restaurant sera exceptionnellement fermé<br>
                    du <strong>15 au 25 janvier 2026</strong>
                </p>
                <button class="close-btn">COMPRIS</button>
            </div>
        `;

        this.showPopup();
        this.setupEventListeners();
    }

    showPopup() {
        setTimeout(() => {
            this.classList.add('show');
            const overlay = this.shadowRoot.querySelector('.popup-overlay');
            overlay.classList.add('show');
        }, 1000);
    }

    setupEventListeners() {
        const closeBtn = this.shadowRoot.querySelector('.close-btn');
        closeBtn.addEventListener('click', () => {
            this.hidePopup();
        });

        const overlay = this.shadowRoot.querySelector('.popup-overlay');
        overlay.addEventListener('click', () => {
            this.hidePopup();
        });
    }

    hidePopup() {
        this.classList.remove('show');
        const overlay = this.shadowRoot.querySelector('.popup-overlay');
        overlay.classList.remove('show');
        
        setTimeout(() => {
            this.remove();
        }, 300);
    }
}

customElements.define('alert-popup', AlertPopup);