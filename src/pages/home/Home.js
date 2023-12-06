import { TopNavigation } from "./sections/top-navigation/Top-navigation";
import { Hero } from "./sections/hero/Hero";
import { Service } from "./sections/service/Service";
import { Designe } from "./sections/designe/Designe";
import { Progress } from "./sections/progress/Progress";
import { Product } from "./sections/product/Product";
const Home = () => {
    return (
        <>
            <TopNavigation />
            <Hero />
            <Service />
            <Designe />
            <Progress />
            <Product />
        </>
    );
};
export { Home };
