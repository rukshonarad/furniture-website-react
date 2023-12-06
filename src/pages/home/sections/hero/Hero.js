import "./Hero.css";
import shape from "../../../../assets/shape.png";
import hero from "../../../../assets/hero.png";
import line from "../../../../assets/line.png";

const Hero = () => {
    return (
        <section class="hero-section container">
            <div class="hero_content">
                <div class="hero-left inline-block">
                    <img src={shape} alt="Round shape" class="round-shape" />
                    <img src={hero} alt="Couch" class="hero-img" />
                </div>
                <div class="hero-right inline-block">
                    <p class="main-text">QUALITY DESIGN FOR ALL</p>
                    <h1 class="text-large">
                        Bring back the classic look by using Whiter. Easy home
                        delivery!
                    </h1>
                    <p class="words">
                        Rediscover the timeless allure of the past as Whiter
                        effortlessly revives the beloved vintage aesthetic.
                    </p>
                    <div class="last-word">
                        <a href="" class="bottom-text inline-block">
                            <img
                                src={line}
                                alt="Orange line"
                                class="orange-line inline-block"
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
