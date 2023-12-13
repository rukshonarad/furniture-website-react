import "./Product.css";
import "../../../../App.css";
import couples from "../../../../assets/wife-husband.jpeg";
import shape from "../../../../assets/shape.svg";
import line from "../../../../assets/line.png";
const Product = () => {
    return (
        <section className="product-description container">
            <div className="product-description__left inline-block">
                <img
                    src={couples}
                    alt="Wife and husband sitting on couch"
                    className="wife-husband"
                />
                <img src={shape} alt="Teal shape" className="shape" />
            </div>
            <div className="product-description__right inline-block">
                <p className="text-large progress2">
                    Spend your happy time with full comfort.
                </p>
                <p className="product-progress text-small">
                    Embrace blissful comfort: Revel in delightful moments,
                    surrounded by unmatched tranquility and exquisite
                    relaxation.
                </p>
                <div className="last-orange-link">
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
