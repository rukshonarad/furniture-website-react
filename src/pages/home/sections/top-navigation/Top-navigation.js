import "./Top-navigation.css";
import logo from "../../../../assets/logo.svg";
import menu from "../../../../assets/menu.svg";
const links = [
    { text: "Product", link: "https://google.com" },
    { text: "Rooms", link: "https://google.com" },
    { text: "Inspiration", link: "https://facebook.com" },
    { text: "Support", link: "https://google.com" },
    { text: "Sign in", link: "https://google.com" }
];
const TopNavigation = () => {
    return (
        <header class="header">
            <div class="container">
                <img src={logo} alt="Whiter logo" class="logo" />
                <nav class="nav inline-block">
                    <ul>
                        {links.map((link, idx) => {
                            return (
                                <li key={idx}>
                                    <a href={link.link}>{link.text}</a>
                                </li>
                            );
                        })}
                    </ul>
                </nav>
                <img src={menu} alt="" id="mobile-nav-icon" />
                <nav class="mobile-nav">
                    <span class="close-icon">&times;</span>

                    <ul class="mobile-nav_link">
                        <li>
                            <a href="">Products</a>
                        </li>
                        <li>
                            <a href="">Rooms</a>
                        </li>
                        <li>
                            <a href="">Inspiration</a>
                        </li>
                        <li>
                            <a href="">Support</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};
export { TopNavigation };
