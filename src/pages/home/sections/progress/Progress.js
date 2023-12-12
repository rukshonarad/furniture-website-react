import "./Progress.css";
import { data } from "./Data";

const Progress = (props) => {
    return (
        <div className="section-devider">
            <p className=" num">{props.number}</p>
            <p className=" text-large progress">{props.title}</p>
            <p className=" section-progress">{props.description}</p>
            <div className="link">
                <a href="">
                    <img
                        src={props.image}
                        alt="Orange line"
                        className="orange-line"
                    />
                    LEARN MORE
                </a>
            </div>
        </div>
    );
};
const Progresses = () => {
    return (
        <section className="progress-section">
            <h3>OUR WORKING PROCESS</h3>
            {data.map((progress, idx) => {
                return (
                    <Progress
                        key={idx}
                        number={progress.number}
                        title={progress.title}
                        description={progress.description}
                        image={progress.image}
                        link={progress.link}
                    />
                );
            })}
        </section>
    );
};

export { Progresses };
