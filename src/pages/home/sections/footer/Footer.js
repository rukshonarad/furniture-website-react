import "./Footer.css";
const Footer = () => {
    return (
        <footer>
            <div className="footer container">
                <div className="footer__content">
                    <div className="footer-card__main">
                        <div className="footer-logo">
                            <img src="./images/logo.svg" alt="" />
                        </div>
                        <p className="text-small footer-text">
                            We make furniture with love and passions. No doubt,
                            really.
                        </p>
                        <p className="text-small footer-text">
                            © TuranTech Inc.
                        </p>
                    </div>

                    <div className="footer-card">
                        <h4 className="text-medium name">CONTACT</h4>
                        <a>62 Orp St, Seattle, USA</a>
                        <a href="mailto">sales@furnatur.com</a>
                        <a href="tel:347-567-2828" className="footer__text">
                            +1 800 726 915273
                        </a>
                    </div>
                    <div className="footer-card">
                        <h4 className="text-medium name">PRODUCT</h4>
                        <a href="">Living Room</a>
                        <a href="">Bed Room</a>
                        <a href="">Office Room</a>
                    </div>
                    <div className="footer-card">
                        <h4 className="text-medium name">OUR COMPANY</h4>
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
