import "./Progress.css";
import line from "../../../../assets/line.png";

const Progress = () => {
    return (
        <section class="progress-section">
            <h3>OUR WORKING PROCESS</h3>
            <div class="section-devider">
                <p class="inline-block num">01.</p>
                <p class="inline-block text-large progress">
                    Discuss the concept with us.
                </p>
                <p class="inline-block section-progress">
                    Engage in an insightful conversation with our team to
                    explore your project's vision, goals, and desired outcomes
                </p>
                <div class="link">
                    <a href="">
                        <img src={line} alt="Orange line" class="orange-line" />
                        LEARN MORE
                    </a>
                </div>
            </div>
            <div class="section-devider">
                <p class="inline-block num">02.</p>
                <p class="inline-block text-large progress">
                    Confirm the provided design.
                </p>
                <p class="inline-block section-progress">
                    Once you provide us with the design you envision, our
                    experienced team will meticulously review and validate every
                    aspect.
                </p>
                <div class="link">
                    <a href="">
                        <img src={line} alt="Orange line" class="orange-line" />
                        LEARN MORE
                    </a>
                </div>
            </div>
            <div class="section-devider">
                <p class="inline-block num">03.</p>
                <p class="inline-block text-large progress">
                    Get delivered the furniture on time.
                </p>
                <p class="inline-block section-progress">
                    Our dedicated team prioritizes punctuality and efficient
                    logistics to ensure that your furniture arrives precisely.
                </p>
                <div class="link">
                    <img src={line} alt=" Orange line" class="orange-line" />
                    <a href="" class="orange-link-text">
                        LEARN MORE
                    </a>
                </div>
            </div>
        </section>
    );
};
export { Progress };
