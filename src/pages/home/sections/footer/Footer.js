import "./Footer.css";
import logo from "../../../../assets/logo.svg";
import { contactLinks, productLinks, aboutUsLinks } from "./data.js";
const Link = (props) => {
    return (
        <a href={props.link} className="text-lg">
            {props.text}
        </a>
    );
};
export const Footer = () => {
    return (
        <footer>
            <div className="footer__content">
                <div className="footer-card__main">
                    <div className="footer-logo">
                        <img src={logo} alt="" />
                    </div>
                    <p className="text-small footer-text">
                        We make furniture with love and passions. No doubt,
                        really.
                    </p>
                    <p className="text-small footer-text">© TuranTech Inc.</p>
                </div>

                <div className="footer-card">
                    <h4 className="text-medium name">CONTACT</h4>
                    <a>62 Orp St, Seattle, USA</a>
                    {contactLinks.map((link, idx) => {
                        return (
                            <Link key={idx} link={link.link} text={link.text} />
                        );
                    })}
                </div>
                <div className="footer-card">
                    <h4 className="text-medium name">PRODUCT</h4>
                    {productLinks.map((link, idx) => {
                        return (
                            <Link key={idx} link={link.link} text={link.text} />
                        );
                    })}
                </div>
                <div className="footer-card">
                    <h4 className="text-medium name">OUR COMPANY</h4>

                    {aboutUsLinks.map((link, idx) => {
                        return (
                            <Link key={idx} link={link.link} text={link.text} />
                        );
                    })}
                </div>
            </div>
        </footer>
    );
};
