import "./Designe.css";
import arrowLeft from "../../../../assets/arrow-left.svg";
import arrowRight from "../../../../assets/arrow-right.svg";
import chairLight from "../../../../assets/chair-light.jpeg";
import chairDark from "../../../../assets/chair-dark.jpeg";
import couch from "../../../../assets/couch.jpeg";
const Designe = () => {
    return (
        <section class="designe-section container">
            <div class="designe-section__header">
                <h2 class="designe-header__text inline-block">
                    Explore our exclusive design.
                </h2>
                <div class="arrows inline-block">
                    <img src={arrowLeft} alt="Arrow-left" class="arrow-left" />
                    <img src={arrowRight} alt="Arrow-left" class="arrow-left" />
                </div>
            </div>

            <div class="picture-wrapper inline-block">
                <img src={chairLight} alt="Light Chair" />
            </div>
            <div class="picture-wrapper inline-block">
                <img src={chairDark} alt="Dark Chair" />
            </div>
            <div class="inline-block" id="last-img">
                <img src={couch} alt="Couch" />
                <div class="price">
                    <h4>$271</h4>
                    <h5 class="product-name">WHITE PHONIX</h5>
                </div>
            </div>
        </section>
    );
};
export { Designe };
