import "./Customers.css";
import lady from "../../../../assets/lady-drinking-coffee.jpeg";
const Customers = () => {
    return (
        <section className="customers-review">
            <div className="customers-review__left">
                <h5>
                    “It was super easy to share my unique concept. I got exactly
                    what I ordered. Great service!”
                </h5>
                <p className="author">Jenny Wilson</p>
                <p>St. Celina, Delaware</p>
            </div>
            <div className="customers-review__rigth">
                <div className="customers-review__img-wrapper">
                    <img
                        src={lady}
                        alt="Lady drinking coffee"
                        className="customers-review__img"
                    />
                </div>
                <button className="play-btn"></button>
            </div>
        </section>
    );
};
export { Customers };
