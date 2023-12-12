import "./Service.css";
import { services } from "./Data";

const Service = (props) => {
    return (
        <div className="wrapper ">
            <div id={props.name}>
                <img src={props.image} alt="Heart" className="icon" />
            </div>
            <div className="text">
                <h2>{props.title}</h2>
                <p>{props.description}</p>
            </div>
        </div>
    );
};
const Services = () => {
    return (
        <div className="service container">
            {services.map((service, idx) => {
                const name =
                    idx === 1 ? "zap" : idx === 2 ? "headphone" : "heart";
                return (
                    <Service
                        key={idx}
                        title={service.title}
                        description={service.description}
                        image={service.image}
                        name={name}
                    />
                );
            })}
        </div>
    );
};
export { Services };
