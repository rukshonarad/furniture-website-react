import "./Customers.css";
import lady from "../../../../assets/lady-drinking-coffee.jpeg";
const Customers = () => {
    return (
        <section class="customers-review">
            <div class="customers-review__left">
                <h5>
                    “It was super easy to share my unique concept. I got exactly
                    what I ordered. Great service!”
                </h5>
                <p class="author">Jenny Wilson</p>
                <p>St. Celina, Delaware</p>
            </div>
            <div class="customers-review__rigth">
                <div class="customers-review__img-wrapper">
                    <img
                        src={lady}
                        alt="Lady drinking coffee"
                        class="customers-review__img"
                    />
                </div>
                <button class="play-btn"></button>
            </div>
        </section>
    );
};
export { Customers };
