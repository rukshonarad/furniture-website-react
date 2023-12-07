import { TopNavigation } from "./sections/top-navigation/Top-navigation";
import { Hero } from "./sections/hero/Hero";
import { Services } from "./sections/service/Service";
import { Designe } from "./sections/designe/Designe";
import { Progress } from "./sections/progress/Progress";
import { Product } from "./sections/product/Product";
import { Customers } from "./sections/customers/Customers";
import { Subscribe } from "./sections/subscribe/Subscribe";
import { Footer } from "./sections/footer/Footer";
const Home = () => {
    return (
        <>
            <TopNavigation />
            <Hero />
            <Services />
            <Designe />
            <Progress />
            <Product />
            <Customers />
            <Subscribe />
            <Footer />
        </>
    );
};
export { Home };
