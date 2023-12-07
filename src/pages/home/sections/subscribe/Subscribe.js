import "./Subscribe.css";
import lock from "../../../../assets/lock.svg";
const Subscribe = () => {
    return (
        <section className="subscribe-section-wrapper container">
            <div className="subscribe-section">
                <h6>Subscribe to our newsletter to get updated</h6>
                <p className="text-small info">
                    Get our latest update on your inbox. With lots of unique
                    blocks, you can easily build a page without coding. Build
                    your next consultancy website within few minutes.
                </p>
                <div className="email-wrapper">
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="    Enter email address"
                    />
                    <input
                        type="button"
                        value="SUBSCRIBE"
                        onclick="msg()"
                        id="button"
                    />
                </div>
                <div className="security-part inline-block">
                    <img src={lock} alt="Lock" className="lock" />
                    <p className="text-small security inline-block">
                        We don't spam at all, our promise!
                    </p>
                </div>
            </div>
        </section>
    );
};
export { Subscribe };
