import "./Hero.css";
import "../../../../App.css";
import shape from "../../../../assets/shape.png";
import hero from "../../../../assets/hero.png";
import line from "../../../../assets/line.png";

const Hero = () => {
    return (
        <section className="hero-section container">
            <div className="hero_content">
                <div className="hero-left inline-block">
                    <img
                        src={shape}
                        alt="Round shape"
                        className="round-shape"
                    />
                    <img src={hero} alt="Couch" className="hero-img" />
                </div>
                <div className="hero-right inline-block">
                    <p className="main-text">QUALITY DESIGN FOR ALL</p>
                    <h1 className="text-large">
                        Bring back the classNameic look by using Whiter. Easy
                        home delivery!
                    </h1>
                    <p className="words">
                        Rediscover the timeless allure of the past as Whiter
                        effortlessly revives the beloved vintage aesthetic.
                    </p>
                    <div className="last-word">
                        <a href="" className="bottom-text inline-block">
                            <img
                                src={line}
                                alt="Orange line"
                                className="orange-line inline-block"
                            />
                            EXPLORE OUR PRODUCTS
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};
export { Hero };
