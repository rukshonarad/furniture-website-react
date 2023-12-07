import "./Designe.css";
import arrowLeft from "../../../../assets/arrow-left.svg";
import arrowRight from "../../../../assets/arrow-right.svg";
import chairLight from "../../../../assets/chair-light.jpeg";
import chairDark from "../../../../assets/chair-dark.jpeg";
import couch from "../../../../assets/couch.jpeg";
const Designe = () => {
    return (
        <section className="designe-section container">
            <div className="designe-section__header">
                <h2 className="designe-header__text inline-block">
                    Explore our exclusive design.
                </h2>
                <div className="arrows inline-block">
                    <img
                        src={arrowLeft}
                        alt="Arrow-left"
                        className="arrow-left"
                    />
                    <img
                        src={arrowRight}
                        alt="Arrow-left"
                        className="arrow-left"
                    />
                </div>
            </div>

            <div className="picture-wrapper inline-block">
                <img src={chairLight} alt="Light Chair" />
            </div>
            <div className="picture-wrapper inline-block">
                <img src={chairDark} alt="Dark Chair" />
            </div>
            <div className="inline-block" id="last-img">
                <img src={couch} alt="Couch" />
                <div className="price">
                    <h4>$271</h4>
                    <h5 className="product-name">WHITE PHONIX</h5>
                </div>
            </div>
        </section>
    );
};
export { Designe };
