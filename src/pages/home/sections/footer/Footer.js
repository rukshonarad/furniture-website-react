import "./Footer.css";
const Footer = () => {
    return (
        <footer>
            <div class="footer container">
                <div class="footer__content">
                    <div class="footer-card__main">
                        <div class="footer-logo">
                            <img src="./images/logo.svg" alt="" />
                        </div>
                        <p class="text-small footer-text">
                            We make furniture with love and passions. No doubt,
                            really.
                        </p>
                        <p class="text-small footer-text">© TuranTech Inc.</p>
                    </div>

                    <div class="footer-card">
                        <h4 class="text-medium name">CONTACT</h4>
                        <a>62 Orp St, Seattle, USA</a>
                        <a href="mailto">sales@furnatur.com</a>
                        <a href="tel:347-567-2828" class="footer__text">
                            +1 800 726 915273
                        </a>
                    </div>
                    <div class="footer-card">
                        <h4 class="text-medium name">PRODUCT</h4>
                        <a href="">Living Room</a>
                        <a href="">Bed Room</a>
                        <a href="">Office Room</a>
                    </div>
                    <div class="footer-card">
                        <h4 class="text-medium name">OUR COMPANY</h4>
                        <a href="">About Us</a>
                        <a href="">Service</a>
                        <a href="">products</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};
export { Footer };
