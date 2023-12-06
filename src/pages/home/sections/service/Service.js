import "./Service.css";
import zap from "../../../../assets/zap.png";
import heart from "../../../../assets/heart.png";
import headphone from "../../../../assets/headphone.svg";
const Service = () => {
    return (
        <div class="service container">
            <div class="first relative inline-block">
                <div id="heart">
                    <img src={heart} alt="Heart" class="icon" />
                </div>
                <div class="text">
                    <h2>Best quality</h2>
                    <p>Uncompromising excellence delivered in every product</p>
                </div>
            </div>
            <div class="second relative inline-block">
                <div id="zap">
                    <img src={zap} alt="Zap" class="icon" />
                </div>
                <div class="text">
                    <h2>Fastest delivery</h2>

                    <p>
                        Swift and efficient shipping to bring your order to you
                        promptly.
                    </p>
                </div>
            </div>
            <div class="third relative inline-block">
                <div id="headphone">
                    <img src={headphone} alt="Headphone" class="icon" />
                </div>
                <div class="text">
                    <h2>Great support</h2>
                    <p>
                        Exceptional customer service to assist and guide you
                        effectively
                    </p>
                </div>
            </div>
        </div>
    );
};
export { Service };
