import { TopNavigation } from "./sections/top-navigation/Top-navigation";
import { Hero } from "./sections/hero/Hero";
import { Service } from "./sections/service/Service";
import { Designe } from "./sections/designe/Designe";
const Home = () => {
    return (
        <>
            <TopNavigation />
            <Hero />
            <Service />
            <Designe />
        </>
    );
};
export { Home };
