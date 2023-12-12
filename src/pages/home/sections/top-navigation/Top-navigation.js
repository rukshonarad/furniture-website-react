import React, { useState } from "react";
import "./Top-navigation.css";
import logo from "../../../../assets/logo.svg";
import menu from "../../../../assets/menu.svg";
import "../../../../App.css";
const links = [
    { text: "Product", link: "https://google.com" },
    { text: "Rooms", link: "https://google.com" },
    { text: "Inspiration", link: "https://facebook.com" },
    { text: "Support", link: "https://google.com" },
    { text: "Sign in", link: "https://google.com" }
];

const TopNavigation = () => {
    const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

    const toggleMobileNav = () => {
        setIsMobileNavOpen(!isMobileNavOpen);
    };

    return (
        <header className="header">
            <div className="container">
                <img src={logo} alt="Whiter logo" className="logo" />
                <nav className="nav inline-block">
                    <ul>
                        {links.map((link, idx) => (
                            <li key={idx}>
                                <a href={link.link}>{link.text}</a>
                            </li>
                        ))}
                    </ul>
                </nav>
                <img
                    src={menu}
                    alt=""
                    id="mobile-nav-icon"
                    onClick={toggleMobileNav}
                    className="mobile-nav-icon"
                />
                <nav
                    className={`mobile-nav ${
                        isMobileNavOpen ? "show-menu" : ""
                    }`}
                >
                    <img
                        src={menu}
                        alt=""
                        id="mobile-nav-icon"
                        onClick={toggleMobileNav}
                        className="mobile-nav-icon"
                    />
                    <ul className="mobile-nav_link">
                        {links.map((link, idx) => (
                            <li key={idx}>
                                <a href={link.link}>{link.text}</a>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export { TopNavigation };
