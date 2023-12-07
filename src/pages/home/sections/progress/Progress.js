import "./Progress.css";

import line from "../../../../assets/line.png";

const Progress = () => {
    return (
        <section className="progress-section">
            <h3>OUR WORKING PROCESS</h3>
            <div className="section-devider">
                <p className="inline-block num">01.</p>
                <p className="inline-block text-large progress">
                    Discuss the concept with us.
                </p>
                <p className="inline-block section-progress">
                    Engage in an insightful conversation with our team to
                    explore your project's vision, goals, and desired outcomes
                </p>
                <div className="link">
                    <a href="">
                        <img
                            src={line}
                            alt="Orange line"
                            className="orange-line"
                        />
                        LEARN MORE
                    </a>
                </div>
            </div>
            <div className="section-devider">
                <p className="inline-block num">02.</p>
                <p className="inline-block text-large progress">
                    Confirm the provided design.
                </p>
                <p className="inline-block section-progress">
                    Once you provide us with the design you envision, our
                    experienced team will meticulously review and validate every
                    aspect.
                </p>
                <div className="link">
                    <a href="">
                        <img
                            src={line}
                            alt="Orange line"
                            className="orange-line"
                        />
                        LEARN MORE
                    </a>
                </div>
            </div>
            <div className="section-devider">
                <p className="inline-block num">03.</p>
                <p className="inline-block text-large progress">
                    Get delivered the furniture on time.
                </p>
                <p className="inline-block section-progress">
                    Our dedicated team prioritizes punctuality and efficient
                    logistics to ensure that your furniture arrives precisely.
                </p>
                <div className="link">
                    <img
                        src={line}
                        alt=" Orange line"
                        className="orange-line"
                    />
                    <a href="" className="orange-link-text">
                        LEARN MORE
                    </a>
                </div>
            </div>
        </section>
    );
};
export { Progress };
