import "./Product.css";
import couples from "../../../../assets/wife-husband.jpeg";
import shape from "../../../../assets/shape.svg";
import line from "../../../../assets/line.png";
const Product = () => {
    return (
        <section class="product-description container">
            <div class="product-description__left inline-block">
                <img
                    src={couples}
                    alt="Wife and husband sitting on couch"
                    class="wife-husband"
                />
                <img src={shape} alt="Teal shape" class="shape" />
            </div>
            <div class="product-description__right inline-block">
                <p class="text-large progress2">
                    Spend your happy time with full comfort.
                </p>
                <p class="product-progress text-small">
                    Embrace blissful comfort: Revel in delightful moments,
                    surrounded by unmatched tranquility and exquisite
                    relaxation.
                </p>
                <div class="last-orange-link">
                    <a href="">
                        <img src={line} alt="Orange line" />
                        EXPLORE OUR PRODUCTS
                    </a>
                </div>
            </div>
        </section>
    );
};
export { Product };
