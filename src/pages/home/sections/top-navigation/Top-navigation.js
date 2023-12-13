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

const NavigationLinks = (props) => {
    return (
        <ul>
            {props.links.map((link, idx) => (
                <li key={idx}>
                    <a href={link.link}>{link.text}</a>
                </li>
            ))}
        </ul>
    );
};
export class TopNavigation extends React.Component {
    state = {
        showMenu: false
    };

    openMenu = () => {
        this.setState({
            showMenu: true
        });
    };

    closeMenu = () => {
        this.setState({
            showMenu: false
        });
    };

    render() {
        const menuClass = this.state.showMenu ? "show-menu" : "";

        return (
            <header className="header container">
                <div className="container">
                    <img className="logo" src={logo} alt="Whiter logo" />
                    <nav className="nav inline-block">
                        <NavigationLinks links={links} />
                    </nav>

                    <img
                        onClick={this.openMenu}
                        src={menu}
                        alt=""
                        id="mobile-nav-icon"
                    />

                    {this.state.showMenu ? (
                        <nav className={`mobile-nav ${menuClass}`}>
                            <img
                                className="mobile-nav_logo"
                                src={logo}
                                alt="Whiter logo"
                            />
                            <span
                                className="close-icon"
                                onClick={this.closeMenu}
                            >
                                &times;
                            </span>
                            <NavigationLinks links={links} />
                        </nav>
                    ) : null}
                </div>
            </header>
        );
    }
}
